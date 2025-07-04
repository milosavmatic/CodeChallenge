// Game result message with dynamic styling
import { getResultColor, getResultMessage, type GameResult } from '../../utils/resultUtils'

interface ResultMessageProps {
  gameResult: GameResult
}

export default function ResultMessage({ gameResult }: ResultMessageProps) {
  return (
    <p className={`text-lg md:text-xl font-bold mb-3 ${getResultColor(gameResult)}`}>
      {getResultMessage(gameResult)}
    </p>
  )
}
