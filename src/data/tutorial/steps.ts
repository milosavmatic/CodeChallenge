// Tutorial steps configuration

import type { TutorialStep } from '../../models/tutorial'

export const tutorialSteps: TutorialStep[] = [
  {
    title: 'Welcome to Rock Paper Scissors Spock Lizard!',
    description:
      'This is an extended version of the classic Rock Paper Scissors game with 5 choices instead of 3.',
    action: 'Click Next to learn the rules',
  },
  {
    title: 'Game Rules',
    description: 'Each choice beats 2 others and loses to 2 others:',
    highlight: 'Rock crushes Lizard and crushes Scissors',
  },
  {
    title: 'More Rules',
    description:
      'Paper covers Rock and disproves Spock. Scissors cuts Paper and decapitates Lizard.',
    highlight: 'Lizard poisons Spock and eats Paper. Spock smashes Scissors and vaporizes Rock.',
  },
  {
    title: 'How to Play',
    description:
      'Simply click on your choice from the game board. The computer will make its choice, and the winner will be determined based on the rules.',
    action: 'Try selecting a choice below to see a real game result!',
  },
  {
    title: 'Scoring',
    description:
      'Your score and the computer score are tracked. You can view your game history by clicking the history button.',
    action: 'You are ready to play! Click Start Playing to begin.',
  },
]
