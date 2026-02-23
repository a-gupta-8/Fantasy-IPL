import json
from datetime import datetime, timezone, timedelta
from zoneinfo import ZoneInfo

MATCH_DURATION_HOURS = 4  # Safe estimate for T20
PDT_OFFSET = timedelta(hours=-7)


def parse_match_time(match):
    return datetime.strptime(
        match["dateTimeGMT"],
        "%Y-%m-%dT%H:%M:%S"
    ).replace(tzinfo=timezone.utc)


def get_selected_matches(schedule_path="data/match_schedule/match_schedule.json"):
    with open(schedule_path, "r") as f:
        schedule = json.load(f)

    match_list = schedule["data"]["matchList"]
    now = datetime.now(ZoneInfo("America/Vancouver"))
    today_str = now.strftime("%Y-%m-%d")

    todays_matches = []
    future_matches = []

    for match in match_list:
        start_time = parse_match_time(match)
        local_start_time = start_time + PDT_OFFSET
        end_time = local_start_time + timedelta(hours=MATCH_DURATION_HOURS)

        if local_start_time.strftime("%Y-%m-%d") == today_str:
            todays_matches.append((match, local_start_time, end_time))
        elif local_start_time > now:
            future_matches.append((match, local_start_time))

    # ---- STEP 1: Handle today's matches ----
    selected = []

    for match, local_start_time, end_time in todays_matches:
        # Set match info
        match_info = {
            "id": match["id"],
            "name": match["name"].split(",")[0],
            "date": local_start_time.strftime("%Y-%m-%d"),
            "dateTime": local_start_time.strftime("%Y-%m-%dT%H:%M:%S"),
            "is_live": False
        }
        # LIVE
        if local_start_time <= now < end_time:
            match_info["is_live"] = True
            selected.append(match_info)
        # UPCOMING TODAY
        elif local_start_time > now:
            selected.append(match_info)

    # ---- STEP 2: If all today's matches ended ----
    future_matches.sort(key=lambda x: x[1])

    for m in future_matches[:2]:
        match_info = {
            "id": m[0]["id"],
            "name": m[0]["name"].split(",")[0],
            "date": m[0]["date"],
            "dateTime": m[0]["dateTimeGMT"],
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