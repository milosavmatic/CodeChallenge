// Tutorial-related type definitions

import type { Choice } from './game'

// Props for TutorialMode component
export interface TutorialModeProps {
  choices: Choice[]
  onExitTutorial: () => void
  className?: string
  isFirstTime?: boolean
}

// Individual tutorial step configuration
export interface TutorialStep {
  title: string
  description: string
  highlight?: string
  action?: string
}
