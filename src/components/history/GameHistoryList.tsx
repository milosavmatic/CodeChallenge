// Game history list component with table or empty state
import type { GameHistory } from '../../models/history'
import GameHistoryRow from './GameHistoryRow'

interface GameHistoryListProps {
  history: GameHistory[]
}

export default function GameHistoryList({ history }: GameHistoryListProps) {
  return (
    // Scrollable container with fixed height
    <div className="overflow-auto max-h-[30vh]">
      {history.length === 0 ? (
        // Empty state when no games have been played
        <div className="p-8 text-center text-gray-500">
          No games played yet. Start playing to see your history!
        </div>
      ) : (
        // Game history table with sticky header
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                #
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Your Choice
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Computer Choice
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Result
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Score
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {history.map((game, index) => (
              <GameHistoryRow key={game.id} game={game} index={index} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
