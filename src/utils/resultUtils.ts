// Game result styling and messaging utilities
export type GameResult = 'win' | 'lose' | 'tie'

// Dynamic color mapping for game results
export const getResultColor = (gameResult: GameResult): string => {
  switch (gameResult) {
    case 'win': return 'text-green-400'
    case 'lose': return 'text-red-400'
    case 'tie': return 'text-yellow-400'
  }
}

// Dynamic message and emoji mapping for game results
export const getResultMessage = (gameResult: GameResult): string => {
  switch (gameResult) {
    case 'win': return '🎉 You Win!'
    case 'lose': return '😔 You Lose!'
    case 'tie': return '🤝 It\'s a Tie!'
  }
}
