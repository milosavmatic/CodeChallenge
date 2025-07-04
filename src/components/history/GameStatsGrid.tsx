// Game statistics grid component
interface GameStatsGridProps {
  stats: {
    totalGames: number
    wins: number
    losses: number
    ties: number
    winRate: number
  }
}

export default function GameStatsGrid({ stats }: GameStatsGridProps) {
  return (
    // Responsive grid: 2 columns on mobile, 5 columns on desktop
    <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4">
      <div className="bg-gray-50 p-3 rounded text-center">
        <div className="text-2xl font-bold text-gray-900">{stats.totalGames}</div>
        <div className="text-sm text-gray-600">Total Games</div>
      </div>
      <div className="bg-green-50 p-3 rounded text-center">
        <div className="text-2xl font-bold text-green-600">{stats.wins}</div>
        <div className="text-sm text-gray-600">Wins</div>
      </div>
      <div className="bg-red-50 p-3 rounded text-center">
        <div className="text-2xl font-bold text-red-600">{stats.losses}</div>
        <div className="text-sm text-gray-600">Losses</div>
      </div>
      <div className="bg-yellow-50 p-3 rounded text-center">
        <div className="text-2xl font-bold text-yellow-600">{stats.ties}</div>
        <div className="text-sm text-gray-600">Ties</div>
      </div>
      <div className="bg-blue-50 p-3 rounded text-center">
        <div className="text-2xl font-bold text-blue-600">{stats.winRate}%</div>
        <div className="text-sm text-gray-600">Win Rate</div>
      </div>
    </div>
  )
}
