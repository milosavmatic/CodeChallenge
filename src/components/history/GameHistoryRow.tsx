// Individual game history row component
import type { GameHistory } from '../../models/history'
import { getChoiceImage } from '../../utils/gameUtils'
import { formatDate, getResultColor, getResultText } from '../../utils/historyUtils'

interface GameHistoryRowProps {
  game: GameHistory
  index: number
}

export default function GameHistoryRow({ game, index }: GameHistoryRowProps) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-3 text-sm text-gray-500 font-medium">{index + 1}</td>
      <td className="px-4 py-3 text-sm text-gray-900">
        {formatDate(game.timestamp)}
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center space-x-3">
          <img
            src={getChoiceImage(game.playerChoice.name)}
            alt={game.playerChoice.name}
            className="w-8 h-8"
          />
          <span className="text-sm text-gray-900 capitalize">
            {game.playerChoice.name}
          </span>
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center space-x-3">
          <img
            src={getChoiceImage(game.computerChoice.name)}
            alt={game.computerChoice.name}
            className="w-8 h-8"
          />
          <span className="text-sm text-gray-900 capitalize">
            {game.computerChoice.name}
          </span>
        </div>
      </td>
      {/* Dynamic color based on win/lose/tie result */}
      <td className={`px-4 py-3 text-sm font-medium ${getResultColor(game.result)}`}>
        {getResultText(game.result)}
      </td>
      <td className="px-4 py-3 text-sm text-gray-900">
        {game.playerScore} - {game.computerScore}
      </td>
    </tr>
  )
}
