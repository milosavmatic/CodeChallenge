// Player display orchestrator component for choice states
import type { Choice } from '../../models/game'
import PlayerPlaceholder from './PlayerPlaceholder'
import PlayerResult from './PlayerResult'

interface PlayerDisplayProps {
  playerId: number | null
  choices: Choice[]
  label: string
  isResult?: boolean
}

export default function PlayerDisplay({ playerId, choices, label, isResult = false }: PlayerDisplayProps) {
  // Find the selected choice by player ID
  const choice = choices.find(choice => choice.id === playerId)
  
  // Show result state if game is complete and choice exists
  if (isResult && choice) {
    return <PlayerResult choice={choice} label={label} />
  }

  // Show placeholder state when no choice or game in progress
  return <PlayerPlaceholder label={label} />
}
