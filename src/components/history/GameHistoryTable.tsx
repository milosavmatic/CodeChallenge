import { useState, useEffect } from 'react'
import type { GameHistory } from '../../models/history'
import { getGameHistory, clearGameHistory, getGameStats } from '../../services/gameHistory'
import { getChoiceImage } from '../../utils/gameUtils'
import { formatDate, getResultColor, getResultText } from '../../utils/historyUtils'
import ConfirmModal from '../ui/ConfirmModal'

interface GameHistoryProps {
  isVisible: boolean
  onClose: () => void
}

export default function GameHistoryTable({ isVisible, onClose }: GameHistoryProps) {
  const [history, setHistory] = useState<GameHistory[]>([])
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [stats, setStats] = useState({
    totalGames: 0,
    wins: 0,
    losses: 0,
    ties: 0,
    winRate: 0,
  })

  const loadHistory = () => {
    const gameHistory = getGameHistory()
    const gameStats = getGameStats()
    setHistory(gameHistory)
    setStats(gameStats)
  }

  useEffect(() => {
    if (isVisible) {
      loadHistory()
    }
  }, [isVisible])

  const handleClearHistory = () => {
    setShowConfirmModal(true)
  }

  const handleConfirmClear = () => {
    clearGameHistory()
    loadHistory()
    setShowConfirmModal(false)
  }

  const handleCancelClear = () => {
    setShowConfirmModal(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[calc(100vh-2rem)] md:max-h-[90vh] overflow-hidden">
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
        </div>

        <div className="overflow-auto max-h-[30vh]">
          {history.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No games played yet. Start playing to see your history!
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    #
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Your Choice
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Computer Choice
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Result
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {history.map((game, index) => (
                  <tr key={game.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-500 font-medium">{index + 1}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {formatDate(game.timestamp)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-3">
                        <img
                          src={getChoiceImage(game.playerChoice.name)}
                          alt={game.playerChoice.name}
                          className="w-8 h-8"
                        />
                        <span className="text-sm text-gray-900 capitalize">
                          {game.playerChoice.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-3">
                        <img
                          src={getChoiceImage(game.computerChoice.name)}
                          alt={game.computerChoice.name}
                          className="w-8 h-8"
                        />
                        <span className="text-sm text-gray-900 capitalize">
                          {game.computerChoice.name}
                        </span>
                      </div>
                    </td>
                    <td className={`px-4 py-3 text-sm font-medium ${getResultColor(game.result)}`}>
                      {getResultText(game.result)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {game.playerScore} - {game.computerScore}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="p-4 border-t border-gray-200 flex justify-between">
          <button
            onClick={handleClearHistory}
            className="px-4 py-2 text-sm text-red-600 hover:text-red-800 disabled:opacity-50"
            disabled={history.length === 0}
          >
            Clear History
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>

      <ConfirmModal
        isVisible={showConfirmModal}
        title="Clear Game History"
        message="Are you sure you want to clear all game history? This action cannot be undone."
        confirmText="Clear History"
        cancelText="Cancel"
        onConfirm={handleConfirmClear}
        onCancel={handleCancelClear}
      />
    </div>
  )
}
