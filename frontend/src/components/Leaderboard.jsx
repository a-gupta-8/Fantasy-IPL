import "./Leaderboard.css"
import LeaderboardRecord from "./LeaderboardRecord.jsx";

export default function Leaderboard() {
    return (
        <div class="leaderboard">
            <div class="leaderboard-header">
                <div class="leaderboard-title">LEADERBOARD</div>
                <div class="total-title">Total</div>
                <div class="pts-today-title">Pts. Today</div>
                <div class="position-change-title"># gain/lost</div>
            </div>
            <LeaderboardRecord name="Aviral" total={5600} today={0} change={0} rank={1} />
            <LeaderboardRecord name="Sayani x Bhagya" total={5300} today={0} change={0} rank={2} />
            <LeaderboardRecord name="Sarthak" total={4900} today={0} change={0} rank={3} />
            <LeaderboardRecord name="Shajin" total={4700} today={0} change={0} rank={4} />
            <LeaderboardRecord name="Arjun" total={4400} today={0} change={0} rank={5} />
        </div>
    );
}