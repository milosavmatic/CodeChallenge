// Game grid component with choice selection

import type { Choice } from '../../models/game'
import { getChoiceImage, getChoicePosition } from '../../utils/gameUtils'
import GameConnections from './GameConnections'
import PlayingOverlay from './PlayingOverlay'

interface GameGridProps {
  choices: Choice[]
  onChoiceClick: (choiceId: number) => void
  isPlaying: boolean
}

// Game grid component with choice selection
export default function GameGrid({ choices, onChoiceClick, isPlaying }: GameGridProps) {
  return (
    <div className="w-full">
      <div className="relative w-[300px] h-[420px] md:w-[640px] md:h-[640px] grid place-items-center mx-auto">
        <div className="grid grid-cols-3 grid-rows-3 w-full h-full relative my-auto">
          <PlayingOverlay isVisible={isPlaying} />
          {choices.map(choice => (
            <button
              // Disable clicks during game processing
              onClick={() => onChoiceClick(choice.id)}
              disabled={isPlaying}
              key={choice.id}
              className={`${getChoicePosition(choice.name)} flex justify-center items-center bg-transparent border-none p-0 ${
                isPlaying ? 'opacity-60' : 'hover:scale-110'
              } transition-all duration-200 disabled:cursor-not-allowed`}
            >
              <img src={getChoiceImage(choice.name)} alt={choice.name} id={choice.name} />
            </button>
          ))}
        </div>
        <GameConnections />
      </div>
    </div>
  )
}
