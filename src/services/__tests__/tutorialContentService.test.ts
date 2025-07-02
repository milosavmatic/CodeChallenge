// Tutorial content service tests

import { describe, expect, it } from 'vitest'
import { mockTutorialStep } from '../../test/utils'
import { getWelcomeDescription, getWelcomeTitle } from '../tutorialContentService'

describe('tutorialContentService', () => {
  describe('getWelcomeTitle', () => {
    it('should return first-time welcome title when isFirstTime is true', () => {
      const result = getWelcomeTitle(true, mockTutorialStep)
      expect(result).toBe('Welcome! Let\'s learn how to play!')
    })

    it('should return tutorial step title when isFirstTime is false', () => {
      const result = getWelcomeTitle(false, mockTutorialStep)
      expect(result).toBe(mockTutorialStep.title)
    })
  })

  describe('getWelcomeDescription', () => {
    it('should return first-time welcome description when isFirstTime is true and currentStep is 0', () => {
      const result = getWelcomeDescription(true, 0, mockTutorialStep)
      expect(result).toBe('Since this is your first time, let\'s walk through how to play Rock Paper Scissors Spock Lizard. This extended version has 5 choices instead of the traditional 3.')
    })

    it('should return tutorial step description when isFirstTime is true but currentStep is not 0', () => {
      const result = getWelcomeDescription(true, 1, mockTutorialStep)
      expect(result).toBe(mockTutorialStep.description)
    })

    it('should return tutorial step description when isFirstTime is false', () => {
      const result = getWelcomeDescription(false, 0, mockTutorialStep)
      expect(result).toBe(mockTutorialStep.description)
    })

    it('should return tutorial step description when isFirstTime is false and currentStep is not 0', () => {
      const result = getWelcomeDescription(false, 2, mockTutorialStep)
      expect(result).toBe(mockTutorialStep.description)
    })
  })
})
