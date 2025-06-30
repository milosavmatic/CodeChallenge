import type { Choice } from '../models/game'
import ErrorState from './ErrorState'
import GameGrid from './GameGrid'
import LoadingState from './LoadingState'

interface GameBoardProps {
  choices: Choice[]
  playGame: (choiceId: number) => void
  isLoading?: boolean
  isPlaying?: boolean
  onRetry?: () => void
  className?: string
}

export default function GameBoard({ choices, playGame, isLoading = false, isPlaying = false, onRetry, className }: GameBoardProps) {

  if (isLoading) {
    return <div className={`${className || ''} flex items-center justify-center h-full`}><LoadingState message="Loading choices..." /></div>
  }

  if (choices.length === 0) {
    return <div className={`${className || ''} flex items-center justify-center h-full`}><ErrorState onRetry={onRetry} /></div>
  }

  return <div className={`${className || ''} flex items-center justify-center h-full`}><GameGrid choices={choices} onChoiceClick={playGame} isPlaying={isPlaying} /></div>
}
