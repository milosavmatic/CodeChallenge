// Reusable reset/try again button
interface ResetButtonProps {
  onReset: () => void
  label?: string
}

export default function ResetButton({ onReset, label = 'Try Again' }: ResetButtonProps) {
  return (
    <button
      onClick={onReset}
      className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors text-sm md:text-base"
    >
      {label}
    </button>
  )
}
