import upcoming_matches from "../../../data/match_schedule/upcoming_matches.json"
import "./Match.css"
import { teams } from "./Teams"

export default function Matches() {
  const today = new Date();
  const localToday = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");

  const firstMatch = upcoming_matches[0];
  const headingText = firstMatch.date === localToday ? "TODAY" : "UPCOMING";

  const [team1FullName, team2FullName] = firstMatch.name.split(" vs ");

  const team1 = teams[team1FullName];
  const team2 = teams[team2FullName];

  return (
      <>
        <div class="matches">
          <h4 class="match-title-text">{headingText}</h4>
          <div class="matchup-label" style={{"--left-color": team1.colorCode, "--right-color": team2.colorCode}}>
            <img class="team1-logo logo" src={team1.logo} alt={team1.short} />
            <span>v/s</span>
            <img class="team2-logo logo" src={team2.logo} alt={team2.short} />
          </div>
        </div>
      </>
  );
}