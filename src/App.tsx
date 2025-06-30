import { useEffect, useState } from 'react'
import type { Choice, GameResult } from './models/game'
import GameBoard from './components/GameBoard'
import GameHistoryTable from './components/GameHistoryTable'
import GameResults from './components/GameResults'
import HistoryButton from './components/HistoryButton'
import Toast from './components/Toast'
import { getChoices, playGame } from './services/api'
import { saveGameToHistory } from './services/gameHistory'
import './App.css'

function App() {
  const [choices, setChoices] = useState<Choice[]>([])
  const [gameResult, setGameResult] = useState<GameResult | null>(null)
  const [countWinsPC, setCountWinsPC] = useState(0)
  const [countWinsYou, setCountWinsYou] = useState(0)
  const [isLoadingChoices, setIsLoadingChoices] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [toast, setToast] = useState<{
    message: string
    type: 'error' | 'success' | 'info'
    isVisible: boolean
  }>({
    message: '',
    type: 'error',
    isVisible: false
  })

  const showToast = (message: string, type: 'error' | 'success' | 'info' = 'error') => {
    setToast({
      message,
      type,
      isVisible: true
    })
  }

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }))
  }

  const loadChoices = async() => {
    try {
      setIsLoadingChoices(true)
      const choicesData = await getChoices()
      setChoices(choicesData)
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Failed to load game choices. Please try again.', 'error')
    } finally {
      console.log('Choices loaded:')
      setIsLoadingChoices(false)
    }
  }

  useEffect(() => {
    loadChoices()
  }, [])

  const handlePlayGame = async(choiceId: number) => {
    try {
      setIsPlaying(true)
      const result = await playGame(choiceId)
      console.log('Game Result:', result)
      setGameResult(result)
      
      // Update scores
      let newCountWinsYou = countWinsYou
      let newCountWinsPC = countWinsPC
      
      if (result.results === 'win') {
        newCountWinsYou = countWinsYou + 1
        setCountWinsYou(newCountWinsYou)
      } else if (result.results === 'lose') {
        newCountWinsPC = countWinsPC + 1
        setCountWinsPC(newCountWinsPC)
      }
      
      // Save to history
      const playerChoice = choices.find(choice => choice.id === result.player)
      const computerChoice = choices.find(choice => choice.id === result.computer)
      
      if (playerChoice && computerChoice) {
        saveGameToHistory({
          timestamp: new Date(),
          playerChoice,
          computerChoice,
          result: result.results,
          playerScore: newCountWinsYou,
          computerScore: newCountWinsPC
        })
      }
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Failed to play game. Please try again.', 'error')
    } finally {
      console.log('Game finished')
      setIsPlaying(false)
    }
  }

  const handleReload = () => {
    setGameResult(null)
    setCountWinsPC(0)
    setCountWinsYou(0)
  }

  return (
    <div className="min-h-screen grid xl:grid-cols-2 grid-cols-1 gap-y-5 md:gap-y-0 bg-mobile-bg md:bg-desktop-bg bg-cover bg-center bg-no-repeat px-4 md:px-0 pb-10 md:pb-20 relative">
      <div className="absolute top-4 left-4 z-10">
        <HistoryButton onClick={() => setShowHistory(true)} />
      </div>
      
      <GameBoard
        choices={choices}
        playGame={handlePlayGame}
        isLoading={isLoadingChoices}
        isPlaying={isPlaying}
        onRetry={loadChoices}
        className="order-2 xl:order-1"
      />
      <GameResults
        choices={choices}
        gameResult={gameResult}
        countWinsYou={countWinsYou}
        countWinsPC={countWinsPC}
        onReload={handleReload}
        className="order-1 xl:order-2"
      />
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
      
      <GameHistoryTable
        isVisible={showHistory}
        onClose={() => setShowHistory(false)}
      />
    </div>
  )
}

export default App
