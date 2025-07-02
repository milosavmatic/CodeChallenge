import RefreshIcon from '../../assets/refresh.svg?react'

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
          <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-white text-xl font-medium mb-2">{title}</p>
            <p className="text-gray-300 text-sm">{message}</p>
          </div>
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
