// Game utilities tests

import { describe, expect, it } from 'vitest'
import { mockChoices } from '../../test/utils'
import { getChoiceImage } from '../gameUtils'

describe('gameUtils', () => {
  describe('getChoiceImage', () => {
    it('should return correct image path for rock', () => {
      const result = getChoiceImage('rock')
      expect(result).toBe('/src/assets/rock.png')
    })

    it('should return correct image path for paper', () => {
      const result = getChoiceImage('paper')
      expect(result).toBe('/src/assets/paper.png')
    })

    it('should return correct image path for scissors', () => {
      const result = getChoiceImage('scissors')
      expect(result).toBe('/src/assets/scissors.png')
    })

    it('should return correct image path for lizard', () => {
      const result = getChoiceImage('lizard')
      expect(result).toBe('/src/assets/lizard.png')
    })

    it('should return correct image path for spock', () => {
      const result = getChoiceImage('spock')
      expect(result).toBe('/src/assets/spock.png')
    })

    it('should handle all valid choice names from mockChoices', () => {
      mockChoices.forEach(choice => {
        const result = getChoiceImage(choice.name)
        expect(result).toBe(`/src/assets/${choice.name}.png`)
      })
    })

    it('should return a string path for any input', () => {
      const result = getChoiceImage('unknown')
      expect(typeof result).toBe('string')
      expect(result).toContain('/src/assets/')
      expect(result).toContain('.png')
    })
  })
})
