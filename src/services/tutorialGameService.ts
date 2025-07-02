// Tutorial game simulation service

import type { Choice } from '../models/game'

// Determine winner between player and computer choices
export const determineWinner = (player: Choice, computer: Choice): 'win' | 'lose' | 'tie' => {
  if (player.id === computer.id) return 'tie'

  // Check if player choice beats computer choice
  const playerBeats = player.name.toLowerCase()
  const computerName = computer.name.toLowerCase()

  const winConditions: Record<string, string[]> = {
    rock: ['lizard', 'scissors'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock'],
  }

  return winConditions[playerBeats]?.includes(computerName) ? 'win' : 'lose'
}

// Generate random computer choice
export const generateComputerChoice = (choices: Choice[]): Choice => {
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

// Simulate complete game round
export const simulateGameRound = (
  playerChoice: Choice,
  choices: Choice[]
): { computerChoice: Choice; result: 'win' | 'lose' | 'tie' } => {
  const computerChoice = generateComputerChoice(choices)
  const result = determineWinner(playerChoice, computerChoice)
  
  return { computerChoice, result }
}
