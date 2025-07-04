// History modal header with title and close button
interface HistoryModalHeaderProps {
  onClose: () => void
  stats: {
    totalGames: number
    wins: number
    losses: number
    ties: number
    winRate: number
  }
}

import GameStatsGrid from './GameStatsGrid'

export default function HistoryModalHeader({ onClose, stats }: HistoryModalHeaderProps) {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Game History</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          ×
        </button>
      </div>
      <GameStatsGrid stats={stats} />
    </div>
  )
}
