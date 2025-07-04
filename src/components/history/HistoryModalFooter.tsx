// History modal footer with action buttons
interface HistoryModalFooterProps {
  onClearHistory: () => void
  onClose: () => void
  hasHistory: boolean
}

export default function HistoryModalFooter({ onClearHistory, onClose, hasHistory }: HistoryModalFooterProps) {
  return (
    <div className="p-4 border-t border-gray-200 flex justify-between">
      {/* Clear button - disabled when no history exists */}
      <button
        onClick={onClearHistory}
        className="px-4 py-2 text-sm text-red-600 hover:text-red-800 disabled:opacity-50"
        disabled={!hasHistory}
      >
        Clear History
      </button>
      <button
        onClick={onClose}
        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
      >
        Close
      </button>
    </div>
  )
}
