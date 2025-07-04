import { useEffect, useState } from 'react'
import type { Choice, GameResult } from './models/game'
import GameBoard from './components/game/GameBoard'
import GameResults from './components/game/GameResults'
import GameHistoryTable from './components/history/GameHistoryTable'
import HistoryButton from './components/history/HistoryButton'
import Toast from './components/ui/Toast'
import { getChoices, playGame } from './services/api'
import { saveGameToHistory, isFirstTimePlayer, markPlayerAsReturning } from './services/gameHistory'

function App() {
  // Game state
  const [choices, setChoices] = useState<Choice[]>([])
  const [gameResult, setGameResult] = useState<GameResult | null>(null)
  const [countWinsPC, setCountWinsPC] = useState(0)
  const [countWinsYou, setCountWinsYou] = useState(0)

  // UI state
  const [isLoadingChoices, setIsLoadingChoices] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [gameMode, setGameMode] = useState<'normal' | 'tutorial'>('normal')
  const [isFirstTime, setIsFirstTime] = useState(false)

  // Toast notifications
  const [toast, setToast] = useState<{
    message: string
    type: 'error' | 'success' | 'info'
    isVisible: boolean
  }>({
    message: '',
    type: 'error',
    isVisible: false,
  })

  // Toast utility functions
  const showToast = (message: string, type: 'error' | 'success' | 'info' = 'error') => {
    setToast({
      message,
      type,
      isVisible: true,
    })
  }

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }))
  }

  // Load game choices from API
  const loadChoices = async() => {
    try {
      setIsLoadingChoices(true)
      const choicesData = await getChoices()
      setChoices(choicesData)
    } catch (error) {
      showToast(
        error instanceof Error ? error.message : 'Failed to load game choices. Please try again.',
        'error'
      )
    } finally {
      console.log('Choices loaded:')
      setIsLoadingChoices(false)
    }
  }

  // Initialize app and check for first-time users
  useEffect(() => {
    loadChoices()

    // Show tutorial automatically for first-time players
    const firstTimePlayer = isFirstTimePlayer()
    setIsFirstTime(firstTimePlayer)
    if (firstTimePlayer) {
      setGameMode('tutorial')
    }
  }, [])

  // Game logic functions

  // Update scores based on game result
  const updateScores = (result: GameResult) => {
    let newCountWinsYou = countWinsYou
    let newCountWinsPC = countWinsPC

    if (result.results === 'win') {
      newCountWinsYou = countWinsYou + 1
      setCountWinsYou(newCountWinsYou)
    } else if (result.results === 'lose') {
      newCountWinsPC = countWinsPC + 1
      setCountWinsPC(newCountWinsPC)
    }

    return { newCountWinsYou, newCountWinsPC }
  }

  // Save game to localStorage history
  const saveGameResult = (result: GameResult, playerScore: number, computerScore: number) => {
    const playerChoice = choices.find(choice => choice.id === result.player)
    const computerChoice = choices.find(choice => choice.id === result.computer)

    if (playerChoice && computerChoice) {
      saveGameToHistory({
        timestamp: new Date(),
        playerChoice,
        computerChoice,
        result: result.results,
        playerScore,
        computerScore,
      })
    }
  }

  // Handle game errors with toast notifications
  const handleGameError = (error: unknown) => {
    showToast(
      error instanceof Error ? error.message : 'Failed to play game. Please try again.',
      'error'
    )
  }

  // Main game handler - orchestrates game flow
  const handlePlayGame = async(choiceId: number) => {
    try {
      setIsPlaying(true)
      const result = await playGame(choiceId)

      setGameResult(result)

      const { newCountWinsYou, newCountWinsPC } = updateScores(result)

      saveGameResult(result, newCountWinsYou, newCountWinsPC)
    } catch (error) {
      handleGameError(error)
    } finally {
      setIsPlaying(false)
    }
  }

  // UI event handlers

  // Reset game state and scores
  const handleReload = () => {
    setGameResult(null)
    setCountWinsPC(0)
    setCountWinsYou(0)
  }

  // Switch to tutorial mode
  const handleStartTutorial = () => {
    setGameMode('tutorial')
  }

  // Exit tutorial and mark user as returning
  const handleExitTutorial = () => {
    setGameMode('normal')
    setIsFirstTime(false)
    // Mark player as returning so tutorial won't show again
    markPlayerAsReturning()
  }

  return (
    <div className="min-h-screen grid xl:grid-cols-2 grid-cols-1 bg-mobile-bg md:bg-desktop-bg bg-cover bg-center bg-no-repeat px-4 md:px-0 pb-10 md:pb-20 relative">
      {/* Header controls */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <HistoryButton onClick={() => setShowHistory(true)} />
        <button
          onClick={handleStartTutorial}
          className="px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg transition-colors font-medium"
        >
          📚 Tutorial
        </button>
      </div>

      {/* Main game board */}
      <GameBoard
        choices={choices}
        playGame={handlePlayGame}
        isLoading={isLoadingChoices}
        isPlaying={isPlaying}
        onRetry={loadChoices}
        className="order-2 xl:order-1"
        gameMode={gameMode}
        onExitTutorial={handleExitTutorial}
        isFirstTime={isFirstTime}
      />

      {/* Game results and score display */}
      <GameResults
        choices={choices}
        gameResult={gameResult}
        countWinsYou={countWinsYou}
        countWinsPC={countWinsPC}
        onReload={handleReload}
        className="order-1 xl:order-2"
      />

      {/* Toast notifications */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />

      {/* Game history modal */}
      <GameHistoryTable isVisible={showHistory} onClose={() => setShowHistory(false)} />
    </div>
  )
}

export default App
