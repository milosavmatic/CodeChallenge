// Result message component for game outcome display
import type { GameResult } from '../../models/game'
import { getResultMessage } from '../../utils/gameUtils'

interface ResultMessageProps {
  gameResult: GameResult | null
}

export default function ResultMessage({ gameResult }: ResultMessageProps) {
  return (
    // Desktop-only result banner with responsive sizing
    <div className="text-4xl md:text-[72px] bg-white py-2 md:py-10 px-4 items-center justify-center w-10/12 md:min-w-[600px] whitespace-nowrap hidden md:flex">
      {getResultMessage(gameResult)}
    </div>
  )
}
