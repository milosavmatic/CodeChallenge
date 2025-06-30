import type { GameResult } from '../models/game'
import { getResultMessage } from '../utils/gameUtils'

interface ResultMessageProps {
  gameResult: GameResult | null
}

export default function ResultMessage({ gameResult }: ResultMessageProps) {
  return (
    <div className="text-4xl md:text-[72px] bg-white py-2 md:py-10 px-4 flex items-center justify-center w-10/12 md:min-w-[600px] whitespace-nowrap">
      {getResultMessage(gameResult)}
    </div>
  )
}
