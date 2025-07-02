import type { Choice } from '../../models/game'
import { getChoiceImage } from '../../utils/gameUtils'

interface TutorialChoiceGridProps {
  choices: Choice[]
  onChoiceClick: (choiceId: number) => void
  selectedChoice: Choice | null
}

// Choice grid for tutorial practice
export default function TutorialChoiceGrid({
  choices,
  onChoiceClick,
  selectedChoice
}: TutorialChoiceGridProps) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 md:gap-4 max-w-sm sm:max-w-lg mx-auto">
      {choices.map(choice => (
        <button
          key={choice.id}
          onClick={() => onChoiceClick(choice.id)}
          className="flex flex-col items-center p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 active:scale-95"
          disabled={!!selectedChoice}
        >
          <img
            src={getChoiceImage(choice.name)}
            alt={choice.name}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 md:mb-2"
          />
          <span className="text-xs md:text-sm capitalize text-white">{choice.name}</span>
        </button>
      ))}
    </div>
  )
}
