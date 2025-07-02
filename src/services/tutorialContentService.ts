// Tutorial content generation service

import type { TutorialStep } from '../models/tutorial'

// First-time user welcome messages
const FIRST_TIME_MESSAGES = {
  title: 'Welcome! Let\'s learn how to play!',
  description: 'Since this is your first time, let\'s walk through how to play Rock Paper Scissors Spock Lizard. This extended version has 5 choices instead of the traditional 3.'
}

/**
 * Get welcome title based on user status and tutorial step
 */
export const getWelcomeTitle = (isFirstTime: boolean, tutorialStep: TutorialStep): string => {
  return isFirstTime ? FIRST_TIME_MESSAGES.title : tutorialStep.title
}

/**
 * Get welcome description based on user status, current step, and tutorial step
 */
export const getWelcomeDescription = (
  isFirstTime: boolean,
  currentStep: number,
  tutorialStep: TutorialStep
): string => {
  return isFirstTime && currentStep === 0
    ? FIRST_TIME_MESSAGES.description
    : tutorialStep.description
}
