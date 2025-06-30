import type { Choice } from '../models/game'
import { getChoiceImage, getChoicePosition } from '../utils/gameUtils'
import PlayingOverlay from './PlayingOverlay'

interface GameGridProps {
  choices: Choice[]
  onChoiceClick: (choiceId: number) => void
  isPlaying: boolean
}

export default function GameGrid({ choices, onChoiceClick, isPlaying }: GameGridProps) {
  return (
    <div className="w-full">
      <div className="relative w-[300px] h-[420px] md:w-[640px] md:h-[640px] grid place-items-center mx-auto">
        <div className="grid grid-cols-3 grid-rows-3 w-full h-full relative my-auto">
          <PlayingOverlay isVisible={isPlaying} />
          
          {choices.map((choice) => (
            <div
              onClick={() => !isPlaying && onChoiceClick(choice.id)}
              key={choice.id}
              className={`${getChoicePosition(choice.name)} flex justify-center items-center ${
                isPlaying ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:scale-110'
              } transition-all duration-200`}
            >
              <img src={getChoiceImage(choice.name)} alt={choice.name} id={choice.name} />
            </div>
          ))}
          
        </div>
        <div className="connection spock--rock">
          <span className="stem">
            <span className="head"></span>
          </span>
        </div>
        <div className="connection paper--rock">
          <span className="stem">
            <span className="head"></span>
          </span>
        </div>
        <div className="connection scissors--paper">
          <span className="stem">
            <span className="head"></span>
          </span>
        </div>
        <div className="connection lizard--spock">
          <span className="stem">
            <span className="head"></span>
          </span>
        </div>
        <div className="connection scissors--lizard">
          <span className="stem">
            <span className="head"></span>
          </span>
        </div>
        <div className="connection rock--lizard">
          <span className="stem">
            <span className="head"></span>
          </span>
        </div>
        <div className="connection rock--scissors">
          <span className="stem">
            <span className="head"></span>
          </span>
        </div>
        <div className="connection paper--spock">
          <span className="stem">
            <span className="head"></span>
          </span>
        </div>
        <div className="connection spock--scissors">
          <span className="stem">
            <span className="head"></span>
          </span>
        </div>
        <div className="connection lizard--paper">
          <span className="stem">
            <span className="head"></span>
          </span>
        </div>
      </div>
    </div>

  )
}
