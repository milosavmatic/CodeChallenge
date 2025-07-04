// Player result component displaying chosen option
import type { Choice } from '../../models/game'
import { getChoiceImage } from '../../utils/gameUtils'

interface PlayerResultProps {
  choice: Choice
  label: string
}

export default function PlayerResult({ choice, label }: PlayerResultProps) {
  return (
    <div className="text-center">
      <div className="mt-1 md:mb-4 h-[100px] w-[100px] md:w-[182px] md:h-[188px]">
        <img
          src={getChoiceImage(choice.name)}
          alt={choice.name || `${label} choice`}
          className="mx-auto"
        />
      </div>
      <p className="text-[40px] md:text-[72px] text-white">{label}</p>
    </div>
  )
}
