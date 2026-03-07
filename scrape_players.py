import requests
from bs4 import BeautifulSoup
import json

BASE = "https://www.iplt20.com"
TEAMS_URL = BASE + "/teams"

headers = {"User-Agent": "Mozilla/5.0"}

players = []

def get_teams():
    url = "https://www.iplt20.com/teams"

    r = requests.get(url, headers=headers)
    soup = BeautifulSoup(r.text, "html.parser")
    teams = []

    for a in soup.select("ul.vn-teamsInnerWrp li a"):
        team_name = a.get("data-team_name")
        team_url = a.get("href")

        teams.append({
            "name": team_name,
            "url": team_url
        })

    return teams

def scrape_team(team):

    r = requests.get(team["url"] + "/squad", headers=headers)
    soup = BeautifulSoup(r.text, "html.parser")

    cards = soup.select("li.ih-pcard1")

    for card in cards:

        link = card.select_one("a")
        name_tag = card.select_one("h2")
        img_tag = card.select_one(".ih-p-img img")

        if not link or not name_tag or not img_tag:
            continue

        name = name_tag.text.strip()
        team_name = link.get("data-team_name")

        img_url = img_tag.get("src") or img_tag.get("data-src")

        players.append({
            "name": name,
            "team": team_name,
            "image": img_url
        })


teams = get_teams()

for team in teams:
    print("Scraping:", team["name"])
    scrape_team(team)

with open("data/players.json", "w") as f:
    json.dump(players, f, indent=2)

print("Saved", len(players), "players")