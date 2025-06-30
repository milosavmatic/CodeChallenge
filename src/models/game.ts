// Game-related type definitions

export interface GameResult {
  results: 'win' | 'lose' | 'tie'
  player: number
  computer: number
}

export interface Choice {
  id: number
  name: string
}

export interface GameHistory {
  id: string
  timestamp: Date
  playerChoice: Choice
  computerChoice: Choice
  result: 'win' | 'lose' | 'tie'
  playerScore: number
  computerScore: number
}
