export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export const getResultColor = (result: string) => {
  switch (result) {
    case 'win':
      return 'text-green-600'
    case 'lose':
      return 'text-red-600'
    case 'tie':
      return 'text-yellow-600'
    default:
      return 'text-gray-600'
  }
}

export const getResultText = (result: string) => {
  switch (result) {
    case 'win':
      return 'Win'
    case 'lose':
      return 'Loss'
    case 'tie':
      return 'Tie'
    default:
      return result
  }
}
