import type { GameHistory } from '../models/game'

const HISTORY_KEY = 'rps-game-history'
const MAX_HISTORY_ITEMS = 10

export const saveGameToHistory = (gameHistory: Omit<GameHistory, 'id'>): void => {
  try {
    const existingHistory = getGameHistory()
    const newGame: GameHistory = {
      ...gameHistory,
      id: crypto.randomUUID(),
    }
    
    const updatedHistory = [newGame, ...existingHistory].slice(0, MAX_HISTORY_ITEMS)
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory))
  } catch (error) {
    console.error('Failed to save game to history:', error)
  }
}

export const getGameHistory = (): GameHistory[] => {
  try {
    const historyJson = localStorage.getItem(HISTORY_KEY)
    if (!historyJson) return []
    
    const history = JSON.parse(historyJson)
    return history.map((game: any) => ({
      ...game,
      timestamp: new Date(game.timestamp)
    }))
  } catch (error) {
    console.error('Failed to load game history:', error)
    return []
  }
}

export const clearGameHistory = (): void => {
  try {
    localStorage.removeItem(HISTORY_KEY)
  } catch (error) {
    console.error('Failed to clear game history:', error)
  }
}

export const getGameStats = () => {
  const history = getGameHistory()
  const totalGames = history.length
  const wins = history.filter(game => game.result === 'win').length
  const losses = history.filter(game => game.result === 'lose').length
  const ties = history.filter(game => game.result === 'tie').length
  
  return {
    totalGames,
    wins,
    losses,
    ties,
    winRate: totalGames > 0 ? Math.round((wins / totalGames) * 100) : 0
  }
}
