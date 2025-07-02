import type { Choice } from '../../models/game'
import { getChoiceImage } from '../../utils/gameUtils'

interface TutorialGameResultProps {
  selectedChoice: Choice
  computerChoice: Choice
  gameResult: 'win' | 'lose' | 'tie'
  onReset: () => void
}

// Game result display for tutorial
export default function TutorialGameResult({
  selectedChoice,
  computerChoice,
  gameResult,
  onReset
}: TutorialGameResultProps) {
  return (
    <div className="mb-4 md:mb-6 p-3 md:p-4 bg-gray-800/80 rounded-lg border border-yellow-400">
      {/* Player vs Computer display */}
      <div className="flex justify-center items-center gap-4 md:gap-8 mb-3 md:mb-4">
        <div className="text-center">
          <img
            src={getChoiceImage(selectedChoice.name)}
            alt={selectedChoice.name}
            className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2"
          />
          <p className="text-white font-medium text-sm md:text-base">You: {selectedChoice.name}</p>
        </div>
        <div className="text-lg md:text-2xl text-white font-bold">VS</div>
        <div className="text-center">
          <img
            src={getChoiceImage(computerChoice.name)}
            alt={computerChoice.name}
            className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2"
          />
          <p className="text-white font-medium text-sm md:text-base">Computer: {computerChoice.name}</p>
        </div>
      </div>
      
      {/* Result and reset button */}
      <div className="text-center">
        <p
          className={`text-lg md:text-xl font-bold mb-3 ${
            gameResult === 'win'
              ? 'text-green-400'
              : gameResult === 'lose'
                ? 'text-red-400'
                : 'text-yellow-400'
          }`}
        >
          {gameResult === 'win'
            ? '🎉 You Win!'
            : gameResult === 'lose'
              ? '😔 You Lose!'
              : '🤝 It\'s a Tie!'}
        </p>
        <button
          onClick={onReset}
          className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors text-sm md:text-base"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
