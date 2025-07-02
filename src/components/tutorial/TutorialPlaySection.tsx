import type { Choice } from '../../models/game'
import TutorialChoiceGrid from './TutorialChoiceGrid'
import TutorialGameResult from './TutorialGameResult'

interface TutorialPlaySectionProps {
  showChoices: boolean
  currentStep: number
  selectedChoice: Choice | null
  computerChoice: Choice | null
  gameResult: 'win' | 'lose' | 'tie' | null
  choices: Choice[]
  onChoiceClick: (choiceId: number) => void
  onResetGameResult: () => void
}

// Interactive play section for tutorial
export default function TutorialPlaySection({
  showChoices,
  currentStep,
  selectedChoice,
  computerChoice,
  gameResult,
  choices,
  onChoiceClick,
  onResetGameResult
}: TutorialPlaySectionProps) {
  if (!showChoices || currentStep < 3) {
    return null
  }

  return (
    <div className="mb-6 md:mb-8">
      <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-yellow-400">Try it out:</h4>

      {/* Show game result if choices have been made */}
      {selectedChoice && computerChoice && gameResult && (
        <TutorialGameResult
          selectedChoice={selectedChoice}
          computerChoice={computerChoice}
          gameResult={gameResult}
          onReset={onResetGameResult}
        />
      )}

      {/* Choice grid */}
      <TutorialChoiceGrid
        choices={choices}
        onChoiceClick={onChoiceClick}
        selectedChoice={selectedChoice}
      />
    </div>
  )
}
