import "./Leaderboard.css"
import LeaderboardRecord from "./LeaderboardRecord.jsx";
import teamScores from "../../../data/team_scores.json";

export default function Leaderboard() {

    const sortedTeams = [...teamScores.teams].sort(
        (a, b) => b.total_points - a.total_points
    );

    return (
        <div class="leaderboard">
            <div class="leaderboard-header">
                <div class="leaderboard-title">LEADERBOARD</div>
                <div class="total-title">Total</div>
                <div class="pts-today-title">Pts. Today</div>
                <div class="position-change-title"># gain/lost</div>
            </div>
            {sortedTeams.map((team, index) => (
                <LeaderboardRecord
                    key={team.team_name}
                    name={team.team_name}
                    total={team.total_points}
                    today={0}
                    change={0}
                    rank={index + 1}
                />
            ))}
        </div>
    );
}