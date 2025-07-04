// Reusable choice display component with image and label
import type { Choice } from '../../models/game'
import { getChoiceImage } from '../../utils/gameUtils'

interface ChoiceDisplayProps {
  choice: Choice
  label: string
}

export default function ChoiceDisplay({ choice, label }: ChoiceDisplayProps) {
  return (
    <div className="text-center">
      <img
        src={getChoiceImage(choice.name)}
        alt={choice.name}
        className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2"
      />
      <p className="text-white font-medium text-sm md:text-base">
        {label}: {choice.name}
      </p>
    </div>
  )
}
