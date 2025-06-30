import { useEffect } from 'react'

interface ToastProps {
  message: string
  type: 'error' | 'success' | 'info'
  isVisible: boolean
  onClose: () => void
  duration?: number
}

export default function Toast({ message, type, isVisible, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  if (!isVisible) return null

  const getToastStyles = () => {
    const baseStyles = 'fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out max-w-md'
    
    switch (type) {
      case 'error':
        return `${baseStyles} bg-red-500 text-white border-l-4 border-red-700`
      case 'success':
        return `${baseStyles} bg-green-500 text-white border-l-4 border-green-700`
      case 'info':
        return `${baseStyles} bg-blue-500 text-white border-l-4 border-blue-700`
      default:
        return `${baseStyles} bg-gray-500 text-white`
    }
  }

  const getIcon = () => {
    switch (type) {
      case 'error':
        return '❌'
      case 'success':
        return '✅'
      case 'info':
        return 'ℹ️'
      default:
        return '📢'
    }
  }

  return (
    <div className={getToastStyles()}>
      <div className="flex items-center gap-3">
        <span className="text-xl">{getIcon()}</span>
        <div className="flex-1">
          <p className="font-medium">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white transition-colors ml-2 text-3xl cursor-pointer"
        >
          X
        </button>
      </div>
    </div>
  )
}
