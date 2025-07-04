// Tutorial mode component for guided game learning
import { useState } from 'react'
import type { Choice } from '../../models/game'
import type { TutorialModeProps } from '../../models/tutorial'
import { tutorialSteps } from '../../data/tutorial'
import { getWelcomeDescription, getWelcomeTitle } from '../../services/tutorialContentService'
import { simulateGameRound } from '../../services/tutorialGameService'
import TutorialHeader from '../tutorial/TutorialHeader'
import TutorialNavigation from '../tutorial/TutorialNavigation'
import TutorialPlaySection from '../tutorial/TutorialPlaySection'

export default function TutorialMode({
  choices,
  onExitTutorial,
  className,
  isFirstTime = false,
}: TutorialModeProps) {
  // Tutorial navigation state
  const [currentStep, setCurrentStep] = useState(0)
  const [showChoices, setShowChoices] = useState(false)
  
  // Game simulation state
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null)
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null)
  const [gameResult, setGameResult] = useState<'win' | 'lose' | 'tie' | null>(null)

  const currentTutorialStep = tutorialSteps[currentStep]
  const isLastStep = currentStep === tutorialSteps.length - 1

  // Get welcome messages using service
  const welcomeTitle = getWelcomeTitle(isFirstTime, currentTutorialStep)
  const welcomeDescription = getWelcomeDescription(isFirstTime, currentStep, currentTutorialStep)

  const handleNext = () => {
    // Show choices at step 3 (play demonstration step)
    if (currentStep === 3) {
      setShowChoices(true)
    }
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      // Keep choices visible when going back from step 4
      if (currentStep === 4) {
        setShowChoices(true)
      }
    }
  }

  const handleChoiceClick = (choiceId: number) => {
    const choice = choices.find(c => c.id === choiceId)
    if (choice) {
      // Simulate game round using extracted game logic
      const { computerChoice, result } = simulateGameRound(choice, choices)
      
      // Update state to show the result
      setSelectedChoice(choice)
      setComputerChoice(computerChoice)
      setGameResult(result)
    }
  }

  const resetGameResult = () => {
    setSelectedChoice(null)
    setComputerChoice(null)
    setGameResult(null)
  }

  return (
    <div
      className={`${className || ''} flex flex-col items-center justify-center min-h-full p-4 md:p-6 bg-black/80 text-white`}
    >
      <div className="max-w-2xl mx-auto text-center w-full">
        <TutorialHeader
          currentStep={currentStep}
          totalSteps={tutorialSteps.length}
          welcomeTitle={welcomeTitle}
          welcomeDescription={welcomeDescription}
          currentTutorialStep={currentTutorialStep}
        />

        <TutorialPlaySection
          showChoices={showChoices}
          currentStep={currentStep}
          selectedChoice={selectedChoice}
          computerChoice={computerChoice}
          gameResult={gameResult}
          choices={choices}
          onChoiceClick={handleChoiceClick}
          onResetGameResult={resetGameResult}
        />

        <TutorialNavigation
          onPrevious={handlePrevious}
          onNext={handleNext}
          onExitTutorial={onExitTutorial}
          currentStep={currentStep}
          isLastStep={isLastStep}
        />
      </div>
    </div>
  )
}
