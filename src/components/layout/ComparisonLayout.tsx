// Comparison layout component for game result display

import type { Choice, GameResult } from '../../models/game'
import PlayerDisplay from '../game/PlayerDisplay'

interface ComparisonLayoutProps {
  choices: Choice[]
  gameResult: GameResult | null
}

export default function ComparisonLayout({ choices, gameResult }: ComparisonLayoutProps) {
  // Determine if we're showing results or placeholder state
  const isResult = !!gameResult

  return (
    <div className="flex justify-center items-center gap-7 md:gap-10">
      {/* Player display */}
      <PlayerDisplay
        playerId={gameResult?.player || null}
        choices={choices}
        label="You"
        isResult={isResult}
      />

      {/* VS text */}
      <p className={`${isResult ? 'text-[40px] md:text-[72px]' : 'text-[31px] md:text-[72px]'} text-white`}>
        VS
      </p>
      
      {/* Computer display */}
      <PlayerDisplay
        playerId={gameResult?.computer || null}
        choices={choices}
        label="PC"
        isResult={isResult}
      />
    </div>
  )
}
