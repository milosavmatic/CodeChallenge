// Game history management with localStorage persistence
import type { GameHistory } from '../models/history'

const HISTORY_KEY = 'rps-game-history'
const FIRST_TIME_KEY = 'rps-first-time-player'
const MAX_HISTORY_ITEMS = 10

// Save game result to history with auto-generated ID and size limit
export const saveGameToHistory = (gameHistory: Omit<GameHistory, 'id'>): void => {
  try {
    const existingHistory = getGameHistory()
    const newGame: GameHistory = {
      ...gameHistory,
      id: crypto.randomUUID(),
    }

    // Keep only latest 10 games
    const updatedHistory = [newGame, ...existingHistory].slice(0, MAX_HISTORY_ITEMS)
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory))
  } catch (error) {
    console.error('Failed to save game to history:', error)
  }
}

// Retrieve game history with date parsing
export const getGameHistory = (): GameHistory[] => {
  try {
    const historyJson = localStorage.getItem(HISTORY_KEY)
    if (!historyJson) return []

    const history = JSON.parse(historyJson)
    // Convert timestamp strings back to Date objects
    return history.map((game: GameHistory) => ({
      ...game,
      timestamp: new Date(game.timestamp),
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

// Calculate game statistics from history
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
    winRate: totalGames > 0 ? Math.round((wins / totalGames) * 100) : 0,
  }
}

// Check if this is the user's first visit
export const isFirstTimePlayer = (): boolean => {
  try {
    return localStorage.getItem(FIRST_TIME_KEY) === null
  } catch (error) {
    console.error('Failed to check first-time player status:', error)
    return false
  }
}

// Mark user as returning player
export const markPlayerAsReturning = (): void => {
  try {
    localStorage.setItem(FIRST_TIME_KEY, 'false')
  } catch (error) {
    console.error('Failed to mark player as returning:', error)
  }
}
