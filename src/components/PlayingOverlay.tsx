interface PlayingOverlayProps {
  isVisible: boolean
  message?: string
}

export default function PlayingOverlay({ isVisible, message = 'Playing...' }: PlayingOverlayProps) {
  if (!isVisible) return null

  return (
    <div className="absolute inset-0 -bottom-5 bg-black bg-opacity-50 z-10 flex items-center justify-center rounded-lg">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        <p className="text-white text-lg">{message}</p>
      </div>
    </div>
  )
}
