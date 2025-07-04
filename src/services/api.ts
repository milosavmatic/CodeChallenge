// API service for game operations with error handling
import type { GameResult, Choice } from '../models/game'
import { config, createApiUrl, getApiHeaders } from '../config/appConfig'

// Fetch available game choices from API
export const getChoices = async(): Promise<Choice[]> => {
  const url = createApiUrl('/choices')

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: getApiHeaders(),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    return result as Choice[]
  } catch (error) {
    // Debug logging controlled by config
    if (config.app.debugMode) {
      console.error('Choices API Error:', error)
    }
    throw error
  }
}

// Submit player choice and get game result
export const playGame = async(choiceId: number): Promise<GameResult> => {
  const url = createApiUrl('/play')

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: getApiHeaders(),
      body: JSON.stringify({ player: choiceId }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result: GameResult = await response.json()

    // Validate API response
    if (!result) {
      throw new Error('API request failed')
    }

    return result
  } catch (error) {
    // Debug logging controlled by config
    if (config.app.debugMode) {
      console.error('Play Game API Error:', error)
    }
    throw error
  }
}
