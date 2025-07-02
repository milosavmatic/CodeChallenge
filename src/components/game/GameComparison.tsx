import type { Choice, GameResult } from '../../models/game'
import { getChoiceImage } from '../../utils/gameUtils'

interface GameComparisonProps {
  choices: Choice[]
  gameResult: GameResult | null
}

export default function GameComparison({ choices, gameResult }: GameComparisonProps) {
  if (gameResult) {
    return (
      <div className="flex justify-center items-center gap-7 md:gap-10">
        <div className="text-center">
          <div className="mt-1 md:mb-4 h-[100px] w-[100px] md:w-[182px] md:h-[188px]">
            <img
              src={getChoiceImage(
                choices.find(choice => choice.id === gameResult.player)?.name || ''
              )}
              alt={choices.find(choice => choice.id === gameResult.player)?.name || 'Player choice'}
              className="mx-auto"
            />
          </div>
          <p className="text-[40px] md:text-[72px] text-white">You</p>
        </div>
        <p className="text-[40px] md:text-[72px] text-white">VS</p>
        <div className="text-center">
          <div className="mt-1 md:mb-4 h-[100px] w-[100px] md:w-[182px] md:h-[188px]">
            <img
              src={getChoiceImage(
                choices.find(choice => choice.id === gameResult.computer)?.name || ''
              )}
              alt={
                choices.find(choice => choice.id === gameResult.computer)?.name || 'Computer choice'
              }
              className="mx-auto"
            />
          </div>
          <p className="text-[40px] md:text-[72px] text-white">PC</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center gap-7 md:gap-10">
      <div className="text-center">
        <div className="h-[100px] w-[100px] md:w-[182px] md:h-[188px] border-4 border-dashed border-white/50 rounded-full flex items-center justify-center mb-4 mx-auto">
          <p className="text-white/50 text-5xl md:text-7xl">?</p>
        </div>
        <p className="text-[31px] md:text-[72px] text-white">You</p>
      </div>
      <p className="text-[31px] md:text-[72px] text-white">VS</p>
      <div className="text-center">
        <div className="h-[100px] w-[100px] md:w-[182px] md:h-[188px] border-4 border-dashed border-white/50 rounded-full flex items-center justify-center mb-4 mx-auto">
          <p className="text-white/50 text-5xl md:text-7xl">?</p>
        </div>
        <p className="text-[31px] md:text-[72px] text-white">PC</p>
      </div>
    </div>
  )
}
