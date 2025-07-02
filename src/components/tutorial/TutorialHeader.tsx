import type { TutorialStep } from '../../models/tutorial'

interface TutorialHeaderProps {
  currentStep: number
  totalSteps: number
  welcomeTitle: string
  welcomeDescription: string
  currentTutorialStep: TutorialStep
}

// Tutorial header with progress and content
export default function TutorialHeader({
  currentStep,
  totalSteps,
  welcomeTitle,
  welcomeDescription,
  currentTutorialStep
}: TutorialHeaderProps) {
  return (
    <div className="mb-6 md:mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-yellow-400">Tutorial Mode</h2>
      <div className="text-sm text-gray-300 mb-3 md:mb-4">
        Step {currentStep + 1} of {totalSteps}
      </div>
      
      {/* Progress bar */}
      <div className="w-full bg-gray-700 rounded-full h-2 mb-4 md:mb-6">
        <div
          className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        ></div>
      </div>

      {/* Content section */}
      <div className="mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white">{welcomeTitle}</h3>
        <p className="text-base md:text-lg text-gray-200 mb-3 md:mb-4 leading-relaxed">{welcomeDescription}</p>

        {/* Highlight box */}
        {currentTutorialStep.highlight && (
          <div className="bg-blue-900/50 border border-blue-400 rounded-lg p-3 md:p-4 mb-3 md:mb-4">
            <p className="text-blue-200 font-medium text-sm md:text-base">💡 {currentTutorialStep.highlight}</p>
          </div>
        )}

        {/* Action instruction */}
        {currentTutorialStep.action && (
          <p className="text-yellow-300 font-medium text-sm md:text-base">👉 {currentTutorialStep.action}</p>
        )}
      </div>
    </div>
  )
}
