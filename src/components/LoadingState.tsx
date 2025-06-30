interface LoadingStateProps {
  message?: string
}

export default function LoadingState({ message = 'Loading...' }: LoadingStateProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full h-[600px] grid place-items-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
          <p className="text-white text-xl">{message}</p>
        </div>
      </div>
    </div>
  )
}
