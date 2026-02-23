import upcoming_matches from "../../../data/match_schedule/upcoming_matches.json"
import "./Match.css"
import { teams } from "./Teams"

export default function Matches() {
  const today = new Date();
  const localToday = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");

  const firstMatch = upcoming_matches.length === 1 ? upcoming_matches[0] : null;
  const nextMatch = upcoming_matches.length > 1 ? upcoming_matches[1] : null;

  const headingText = firstMatch.date === localToday ? "TODAY" : "UPCOMING";

  const [team1FullName, team2FullName] = firstMatch.name.split(" vs ");

  const team1 = teams[team1FullName];
  const team2 = teams[team2FullName];

  const start = new Date(firstMatch.dateTime);
  const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);

  const isLive = today >= start && now <= end;

  return (
      <>
        {firstMatch && <div class="matches">
          <h4 class="match-title-text">{headingText}</h4>
          <div class="matchup-label" style={{"--left-color": team1.colorCode, "--right-color": team2.colorCode}}>
            <img class="team1-logo logo" src={team1.logo} alt={team1.name} />
            <h3 class="team-name">{team1.name}</h3>
            <p class="vs">v/s</p>
            {isLive ? (<div class="match-live">
              <span className="live-blinker"></span>
              <p class="live-text">LIVE</p>
            </div>) : (
              <div class="match-dated">
                <p class="live-text">{firstMatch.date}</p>
              </div>
            ) }
            <h3 class="team-name">{team2.name}</h3>
            <img class="team2-logo logo" src={team2.logo} alt={team2.name} />
          </div>
        </div>}
      </>
  );
}