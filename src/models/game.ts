// Game-related type definitions

// API response from playing a game
export interface GameResult {
  results: 'win' | 'lose' | 'tie'
  player: number
  computer: number
}

// Available game choice (Rock, Paper, Scissors, Spock, Lizard)
export interface Choice {
  id: number
  name: string
}
