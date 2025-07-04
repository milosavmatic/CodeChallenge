// Auto-dismissing toast notification with type-based styling
import { useEffect } from 'react'
import { getToastStyles, getToastIcon, type ToastType } from '../../utils/toastUtils'

interface ToastProps {
  message: string
  type: ToastType
  isVisible: boolean
  onClose: () => void
  duration?: number
}

export default function Toast({ message, type, isVisible, onClose, duration = 5000 }: ToastProps) {
  // Auto-dismiss timer with cleanup
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  if (!isVisible) return null

  return (
    <div className={getToastStyles(type)}>
      <div className="flex items-center gap-3">
        <span className="text-xl">{getToastIcon(type)}</span>
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
