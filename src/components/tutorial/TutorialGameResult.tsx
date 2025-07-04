// Tutorial game result orchestrator component
import type { Choice } from '../../models/game'
import GameComparison from './GameComparison'
import ResetButton from './ResetButton'
import ResultMessage from './ResultMessage'

interface TutorialGameResultProps {
  selectedChoice: Choice
  computerChoice: Choice
  gameResult: 'win' | 'lose' | 'tie'
  onReset: () => void
}

export default function TutorialGameResult({
  selectedChoice,
  computerChoice,
  gameResult,
  onReset
}: TutorialGameResultProps) {
  return (
    // Highlighted result container with yellow border
    <div className="mb-4 md:mb-6 p-3 md:p-4 bg-gray-800/80 rounded-lg border border-yellow-400">
      <GameComparison
        selectedChoice={selectedChoice}
        computerChoice={computerChoice}
      />
      
      {/* Result display with message and reset action */}
      <div className="text-center">
        <ResultMessage gameResult={gameResult} />
        <ResetButton onReset={onReset} />
      </div>
    </div>
  )
}
