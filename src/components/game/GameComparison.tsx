// Main game comparison component wrapper

import type { Choice, GameResult } from '../../models/game'
import ComparisonLayout from '../layout/ComparisonLayout'

interface GameComparisonProps {
  choices: Choice[]
  gameResult: GameResult | null
}

export default function GameComparison({ choices, gameResult }: GameComparisonProps) {
  // Delegates to ComparisonLayout for rendering
  return <ComparisonLayout choices={choices} gameResult={gameResult} />
}
