// Tutorial game service tests

import { describe, expect, it } from 'vitest'
import { mockChoices } from '../../test/utils'
import { determineWinner, generateComputerChoice, simulateGameRound } from '../tutorialGameService'

describe('tutorialGameService', () => {
  describe('determineWinner', () => {
    it('should return tie when both choices are the same', () => {
      const result = determineWinner(mockChoices[0], mockChoices[0])
      expect(result).toBe('tie')
    })

    it('should return win when rock beats lizard', () => {
      const rock = mockChoices[0] // rock
      const lizard = mockChoices[3] // lizard
      const result = determineWinner(rock, lizard)
      expect(result).toBe('win')
    })

    it('should return win when rock beats scissors', () => {
      const rock = mockChoices[0] // rock
      const scissors = mockChoices[2] // scissors
      const result = determineWinner(rock, scissors)
      expect(result).toBe('win')
    })

    it('should return lose when rock loses to paper', () => {
      const rock = mockChoices[0] // rock
      const paper = mockChoices[1] // paper
      const result = determineWinner(rock, paper)
      expect(result).toBe('lose')
    })

    it('should return lose when rock loses to spock', () => {
      const rock = mockChoices[0] // rock
      const spock = mockChoices[4] // spock
      const result = determineWinner(rock, spock)
      expect(result).toBe('lose')
    })
  })

  describe('generateComputerChoice', () => {
    it('should return a choice from the provided choices array', () => {
      const result = generateComputerChoice(mockChoices)
      expect(mockChoices).toContain(result)
    })

    it('should return a valid choice object with id and name', () => {
      const result = generateComputerChoice(mockChoices)
      expect(result).toHaveProperty('id')
      expect(result).toHaveProperty('name')
      expect(typeof result.id).toBe('number')
      expect(typeof result.name).toBe('string')
    })
  })

  describe('simulateGameRound', () => {
    it('should return computer choice and game result', () => {
      const playerChoice = mockChoices[0]
      const result = simulateGameRound(playerChoice, mockChoices)
      
      expect(result).toHaveProperty('computerChoice')
      expect(result).toHaveProperty('result')
      expect(mockChoices).toContain(result.computerChoice)
      expect(['win', 'lose', 'tie']).toContain(result.result)
    })

    it('should return consistent results for same inputs', () => {
      // Mock Math.random to return consistent results
      const originalRandom = Math.random
      Math.random = () => 0.5 // Always return middle choice
      
      const playerChoice = mockChoices[0]
      const result1 = simulateGameRound(playerChoice, mockChoices)
      const result2 = simulateGameRound(playerChoice, mockChoices)
      
      expect(result1.computerChoice).toEqual(result2.computerChoice)
      expect(result1.result).toBe(result2.result)
      
      // Restore original Math.random
      Math.random = originalRandom
    })
  })
})
