// Error state component with optional retry functionality
import RefreshIcon from '../../assets/icons/refresh.svg?react'
import WarningIcon from '../../assets/icons/warning.svg?react'

interface ErrorStateProps {
  title?: string
  message?: string
  onRetry?: () => void
  showRetryButton?: boolean
}

export default function ErrorState({
  title = 'Failed to load game choices',
  message = 'Please check your connection and try again',
  onRetry,
  showRetryButton = true,
}: ErrorStateProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full h-[600px] grid place-items-center">
        <div className="flex flex-col items-center gap-6">
          {/* Warning icon */}
          <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
            <WarningIcon className="w-8 h-8 text-red-500" />
          </div>
          {/* Error message content */}
          <div className="text-center">
            <p className="text-white text-xl font-medium mb-2">{title}</p>
            <p className="text-gray-300 text-sm">{message}</p>
          </div>
          {/* Conditional retry button */}
          {showRetryButton && onRetry && (
            <button
              onClick={onRetry}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105"
            >
              <RefreshIcon className="w-4 h-4 text-white" />
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
