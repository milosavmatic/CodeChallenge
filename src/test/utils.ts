// Test utilities following project architecture

import { vi } from 'vitest'
import type { Choice } from '../models/game'
import type { GameHistory } from '../models/history'
import type { TutorialStep } from '../models/tutorial'

// Mock data for tests
export const mockChoices: Choice[] = [
  { id: 1, name: 'rock' },
  { id: 2, name: 'paper' },
  { id: 3, name: 'scissors' },
  { id: 4, name: 'lizard' },
  { id: 5, name: 'spock' },
]

export const mockGameHistory: GameHistory[] = [
  {
    id: '1',
    timestamp: new Date('2025-01-01T10:00:00Z'),
    playerChoice: mockChoices[0],
    computerChoice: mockChoices[1],
    result: 'lose',
    playerScore: 0,
    computerScore: 1,
  },
  {
    id: '2',
    timestamp: new Date('2025-01-01T10:01:00Z'),
    playerChoice: mockChoices[1],
    computerChoice: mockChoices[2],
    result: 'lose',
    playerScore: 0,
    computerScore: 2,
  },
]

export const mockTutorialStep: TutorialStep = {
  title: 'Test Tutorial Step',
  description: 'This is a test tutorial step description',
  highlight: 'Test highlight message',
  action: 'Test action instruction',
}

// Test helper functions
export const createMockGameResult = (
  playerChoice: Choice,
  computerChoice: Choice,
  result: 'win' | 'lose' | 'tie'
): GameHistory => ({
  id: Math.random().toString(),
  timestamp: new Date(),
  playerChoice,
  computerChoice,
  result,
  playerScore: result === 'win' ? 1 : 0,
  computerScore: result === 'lose' ? 1 : 0,
})

// Mock service responses
export const mockLocalStorage = {
  getItem: (key: string) => {
    if (key === 'gameHistory') {
      return JSON.stringify(mockGameHistory)
    }
    return null
  },
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
