import upcoming_matches from "../../../data/match_schedule/upcoming_matches.json"
import "./Match.css"
import { teams } from "./Teams"

export default function Matches() {
  const today = new Date();
  const localToday = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");

  const firstMatch = upcoming_matches.length >= 1 ? upcoming_matches[0] : null;
  const nextMatch = upcoming_matches.length > 1 ? upcoming_matches[1] : null;

  const headingText = firstMatch.date === localToday ? "TODAY" : "UPCOMING";


  const [team1FullName, team2FullName] = firstMatch?.name?.split(" vs ") || [];
  const [team3FullName, team4FullName] = nextMatch?.name?.split(" vs ") || [];

  const team1 = team1FullName ? teams[team1FullName] : null;
  const team2 = team2FullName ? teams[team2FullName] : null;
  const team3 = team3FullName ? teams[team3FullName] : null;
  const team4 = team4FullName ? teams[team4FullName] : null;
 

  const isLive = firstMatch ? firstMatch.is_live : false;

  const formatDate = (dateString) => {
    const date = new Date(dateString + "T00:00:00"); 
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
  
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

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
                <p class="live-text">{formatDate(firstMatch.date)}</p>
                <p class="live-datetime">{formatTime(firstMatch.dateTime)}</p>
              </div>
            ) }
            <h3 class="team-name">{team2.name}</h3>
            <img class="team2-logo logo" src={team2.logo} alt={team2.name} />
          </div>
          { nextMatch && <div class="upcoming-match-label">
            <img class="team3-logo logo" src={team3.logo}></img>
            <div className="upcoming-date">
              <p class="nextmatch-date">{formatDate(nextMatch.date)}</p>
              <p class="nextmatch-time">{formatTime(nextMatch.dateTime)}</p>
            </div>
            <img class="team4-logo logo" src={team4.logo}></img>
          </div> }
        </div>}
      </>
  );
}