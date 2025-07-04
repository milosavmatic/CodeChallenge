// History button component with semi-transparent styling
interface HistoryButtonProps {
  onClick: () => void
}

export default function HistoryButton({ onClick }: HistoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors duration-200 text-sm font-medium"
    >
      📊 History
    </button>
  )
}
