// History-related type definitions

import type { Choice } from './game'

// Individual game record for localStorage
export interface GameHistory {
  id: string
  timestamp: Date
  playerChoice: Choice
  computerChoice: Choice
  result: 'win' | 'lose' | 'tie'
  playerScore: number
  computerScore: number
}

// Aggregated game statistics
export interface GameStats {
  totalGames: number
  wins: number
  losses: number
  ties: number
  winRate: number
}
