// Toast styling and icon utilities
export type ToastType = 'error' | 'success' | 'info'

// Base styles for all toast notifications
const BASE_TOAST_STYLES = 'fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out max-w-md'

// Dynamic styling based on toast type
export const getToastStyles = (type: ToastType): string => {
  switch (type) {
    case 'error':
      return `${BASE_TOAST_STYLES} bg-red-500 text-white border-l-4 border-red-700`
    case 'success':
      return `${BASE_TOAST_STYLES} bg-green-500 text-white border-l-4 border-green-700`
    case 'info':
      return `${BASE_TOAST_STYLES} bg-blue-500 text-white border-l-4 border-blue-700`
    default:
      return `${BASE_TOAST_STYLES} bg-gray-500 text-white`
  }
}

// Icon mapping for different toast types
export const getToastIcon = (type: ToastType): string => {
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
