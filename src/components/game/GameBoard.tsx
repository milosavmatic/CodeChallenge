import type { Choice } from '../../models/game'
import ErrorState from '../layout/ErrorState'
import LoadingState from '../layout/LoadingState'
import GameGrid from './GameGrid'
import TutorialMode from './TutorialMode'

interface GameBoardProps {
  choices: Choice[]
  playGame: (choiceId: number) => void
  isLoading?: boolean
  isPlaying?: boolean
  onRetry?: () => void
  className?: string
  gameMode?: 'normal' | 'tutorial'
  onExitTutorial?: () => void
  isFirstTime?: boolean
}

export default function GameBoard({
  choices,
  playGame,
  isLoading = false,
  isPlaying = false,
  onRetry,
  className,
  gameMode = 'normal',
  onExitTutorial,
  isFirstTime = false,
}: GameBoardProps) {
  // Loading state - Shows spinner/loading message while fetching choices
  if (isLoading) {
    return (
      <div className={`${className || ''} flex items-center justify-center h-full`}>
        <LoadingState message="Loading choices..." />
      </div>
    )
  }

  // Error state - Shows error message when no choices are available
  if (choices.length === 0) {
    return (
      <div className={`${className || ''} flex items-center justify-center h-full`}>
        <ErrorState onRetry={onRetry} />
      </div>
    )
  }

  // Tutorial mode - Shows tutorial when gameMode is set to 'tutorial'
  if (gameMode === 'tutorial') {
    return (
      <TutorialMode
        choices={choices}
        onExitTutorial={onExitTutorial || (() => {})}
        className={className}
        isFirstTime={isFirstTime}
      />
    )
  }

  // Main game state - Renders the game grid with choices
  return (
    <div className={`${className || ''} flex items-center justify-center h-full`}>
      <GameGrid choices={choices} onChoiceClick={playGame} isPlaying={isPlaying} />
    </div>
  )
}
