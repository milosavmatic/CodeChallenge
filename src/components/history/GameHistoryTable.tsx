// Game history modal with statistics and scroll lock
import { useState, useEffect } from 'react'
import type { GameHistory } from '../../models/history'
import { getGameHistory, clearGameHistory, getGameStats } from '../../services/gameHistory'
import { lockBodyScroll, unlockBodyScroll, cleanupBodyScrollLock } from '../../utils/bodyScrollLock'
import ConfirmModal from '../ui/ConfirmModal'
import GameHistoryList from './GameHistoryList'
import HistoryModalFooter from './HistoryModalFooter'
import HistoryModalHeader from './HistoryModalHeader'

interface GameHistoryProps {
  isVisible: boolean
  onClose: () => void
}

export default function GameHistoryTable({ isVisible, onClose }: GameHistoryProps) {
  // History data and modal state
  const [history, setHistory] = useState<GameHistory[]>([])
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [stats, setStats] = useState({
    totalGames: 0,
    wins: 0,
    losses: 0,
    ties: 0,
    winRate: 0,
  })

  // Load history data and statistics from localStorage
  const loadHistory = () => {
    const gameHistory = getGameHistory()
    const gameStats = getGameStats()
    setHistory(gameHistory)
    setStats(gameStats)
  }

  useEffect(() => {
    if (isVisible) {
      loadHistory()
      // Prevent background scrolling when modal is open
      lockBodyScroll()
    } else {
      unlockBodyScroll()
    }

    // Cleanup: ensure body scroll is restored when component unmounts
    return cleanupBodyScrollLock
  }, [isVisible])

  // Clear history confirmation flow
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

  // Don't render modal if not visible
  if (!isVisible) return null

  return (
    // Modal overlay with backdrop
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      {/* Composed modal using extracted components */}
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[calc(100vh-2rem)] md:max-h-[90vh] overflow-hidden">
        <HistoryModalHeader onClose={onClose} stats={stats} />
        <GameHistoryList history={history} />
        <HistoryModalFooter
          onClearHistory={handleClearHistory}
          onClose={onClose}
          hasHistory={history.length > 0}
        />
      </div>

      {/* Confirmation modal for clearing history */}
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
