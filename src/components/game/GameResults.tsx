import type { Choice, GameResult } from '../../models/game'
import ReloadButton from '../ui/ReloadButton'
import GameComparison from './GameComparison'
import ResultMessage from './ResultMessage'
import ScoreDisplay from './ScoreDisplay'

interface GameResultsProps {
  choices: Choice[]
  gameResult: GameResult | null
  countWinsYou: number
  countWinsPC: number
  onReload?: () => void
  className?: string
}

export default function GameResults({
  choices,
  gameResult,
  countWinsYou,
  countWinsPC,
  onReload,
  className,
}: GameResultsProps) {
  return (
    <div
      className={`flex flex-col md:gap-20 items-center justify-center w-full h-full relative ${className || ''}`}
    >
      <ReloadButton onReload={onReload} />
      <div className="text-center mt-12 md:mt-0">
        <ScoreDisplay countWinsYou={countWinsYou} countWinsPC={countWinsPC} />
        <GameComparison choices={choices} gameResult={gameResult} />
      </div>
      <ResultMessage gameResult={gameResult} />
    </div>
  )
}
