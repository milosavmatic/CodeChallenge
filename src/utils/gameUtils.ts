import type { GameResult } from '../models/game'
import lizard from '../assets/lizard.png'
import paper from '../assets/paper.png'
import rock from '../assets/rock.png'
import scissors from '../assets/scissors.png'
import spock from '../assets/spock.png'

export const getChoiceImage = (choiceName: string) => {
  const imageMap: { [key: string]: string } = {
    rock,
    paper,
    scissors,
    lizard,
    spock
  }
  return imageMap[choiceName.toLowerCase()] || rock
}

// Define the layout positions for each choice in the game board grid
export const getChoicePosition = (choiceName: string) => {
  const positions: { [key: string]: string } = {
    rock: 'col-start-2 row-start-1',
    spock: 'col-start-1 row-start-2',
    paper: 'col-start-3 row-start-2',
    lizard: 'md:col-start-2 col-start-1 row-start-3 justify-self-start self-center md:ml-[-120px] mt-10',
    scissors: 'md:col-start-2 col-start-3 row-start-3 justify-self-end self-center md:mr-[-120px] mt-10'
  }
  return positions[choiceName.toLowerCase()] || 'col-start-2 row-start-1'
}

// Get the result message for display
export const getResultMessage = (gameResult: GameResult | null): string => {
  if (!gameResult) return 'No game played'
  
  const messages = {
    win: 'You win!',
    lose: 'You lose!',
    tie: 'It\'s a tie!'
  }
  
  return messages[gameResult.results] || 'Unknown result'
}
