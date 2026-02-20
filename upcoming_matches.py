import json
from datetime import datetime, timezone, timedelta


MATCH_DURATION_HOURS = 4  # Safe estimate for T20


def parse_match_time(match):
    return datetime.strptime(
        match["dateTimeGMT"],
        "%Y-%m-%dT%H:%M:%S"
    ).replace(tzinfo=timezone.utc)


def get_selected_matches(schedule_path="data/match_schedule/match_schedule.json"):
    with open(schedule_path, "r") as f:
        schedule = json.load(f)

    match_list = schedule["data"]["matchList"]
    now = datetime.now(timezone.utc)
    today_str = now.strftime("%Y-%m-%d")

    todays_matches = []
    future_matches = []

    for match in match_list:
        start_time = parse_match_time(match)
        end_time = start_time + timedelta(hours=MATCH_DURATION_HOURS)

        if match["date"] == today_str:
            todays_matches.append((match, start_time, end_time))
        elif start_time > now:
            future_matches.append((match, start_time))

    # ---- STEP 1: Handle today's matches ----
    selected = []

    for match, start_time, end_time in todays_matches:
        # Set match info
        match_info = {
            "id": match["id"],
            "name": match["name"].split(",")[0],
            "date": match["date"],
            "is_live": False
        }
        # LIVE
        if start_time <= now < end_time:
            match_info["is_live"] = True
            selected.append(match_info)
        # UPCOMING TODAY
        elif start_time > now:
            selected.append(match_info)

    if selected:
        return selected

    # ---- STEP 2: If all today's matches ended ----
    future_matches.sort(key=lambda x: x[1])
    selected = []

    for m in future_matches[:2]:
        match_info = {
            "id": m[0]["id"],
            "name": m[0]["name"].split(",")[0],
            "date": m[0]["date"],
            "is_live": False
        }
        selected.append(match_info)

    return selected


def write_selected_matches():
    matches = get_selected_matches()

    with open("data/match_schedule/upcoming_matches.json", "w") as f:
        json.dump(matches, f, indent=4)

    print("Updated upcoming_matches.json")


if __name__ == "__main__":
    write_selected_matches()