import "./LeaderboardRecord.css"

export default function LeaderboardRecord({name, total, today, change, rank}) {
    return (
        <div class={`leaderboard-record-rank rank-${rank}`}>
            <div class={`leaderboard-record`}>{name}</div>
            <div class={`total-record`}>{total}</div>
            <div class={`pts-today-record`}>{today}</div>
            <div class={`position-change-record`}>{change}</div>
        </div>
    );
}