// Player vs Computer comparison display
import type { Choice } from '../../models/game'
import ChoiceDisplay from './ChoiceDisplay'

interface GameComparisonProps {
  selectedChoice: Choice
  computerChoice: Choice
}

export default function GameComparison({ selectedChoice, computerChoice }: GameComparisonProps) {
  return (
    <div className="flex justify-center items-center gap-4 md:gap-8 mb-3 md:mb-4">
      <ChoiceDisplay choice={selectedChoice} label="You" />
      <div className="text-lg md:text-2xl text-white font-bold">VS</div>
      <ChoiceDisplay choice={computerChoice} label="Computer" />
    </div>
  )
}
