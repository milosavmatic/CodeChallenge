// Body scroll lock utility functions

/**
 * Prevents body from scrolling by adding overflow-hidden class
 */
export const lockBodyScroll = (): void => {
  document.body.classList.add('overflow-hidden')
}

/**
 * Restores body scrolling by removing overflow-hidden class
 */
export const unlockBodyScroll = (): void => {
  document.body.classList.remove('overflow-hidden')
}

/**
 * Custom hook for managing body scroll lock in modals
 * @param isLocked - Whether the body scroll should be locked
 */
export const useBodyScrollLock = (isLocked: boolean): void => {
  if (typeof window === 'undefined') return // SSR safety

  if (isLocked) {
    lockBodyScroll()
  } else {
    unlockBodyScroll()
  }
}

/**
 * Helper function to ensure body scroll is unlocked on cleanup
 * Use this in useEffect cleanup functions
 */
export const cleanupBodyScrollLock = (): void => {
  unlockBodyScroll()
}
