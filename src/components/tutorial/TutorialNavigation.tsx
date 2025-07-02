interface TutorialNavigationProps {
  onPrevious: () => void
  onNext: () => void
  onExitTutorial: () => void
  currentStep: number
  isLastStep: boolean
}

// Navigation buttons for tutorial
export default function TutorialNavigation({
  onPrevious,
  onNext,
  onExitTutorial,
  currentStep,
  isLastStep
}: TutorialNavigationProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
      {/* Previous button */}
      <button
        onClick={onPrevious}
        disabled={currentStep === 0}
        className="w-full sm:w-auto order-2 sm:order-1 px-4 py-2 md:px-6 md:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm md:text-base"
      >
        Previous
      </button>

      {/* Next/Finish and Skip buttons */}
      <div className="flex gap-2 md:gap-4 order-1 sm:order-2 w-full sm:w-auto">
        {!isLastStep ? (
          <button
            onClick={onNext}
            className="flex-1 sm:flex-none px-4 py-2 md:px-6 md:py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500 transition-colors text-sm md:text-base"
          >
            Next
          </button>
        ) : (
          <button
            onClick={onExitTutorial}
            className="flex-1 sm:flex-none px-4 py-2 md:px-8 md:py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors font-semibold text-sm md:text-base"
          >
            Start Playing!
          </button>
        )}

        <button
          onClick={onExitTutorial}
          className="flex-1 sm:flex-none px-4 py-2 md:px-6 md:py-3 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors text-sm md:text-base"
        >
          Skip Tutorial
        </button>
      </div>
    </div>
  )
}
