// Body scroll management for modal overlays

// Disable body scrolling when modal is open
export const lockBodyScroll = (): void => {
  document.body.classList.add('overflow-hidden')
}

// Re-enable body scrolling when modal is closed
export const unlockBodyScroll = (): void => {
  document.body.classList.remove('overflow-hidden')
}

// Manage body scroll state based on modal visibility
export const useBodyScrollLock = (isLocked: boolean): void => {
  if (typeof window === 'undefined') return // SSR safety

  if (isLocked) {
    lockBodyScroll()
  } else {
    unlockBodyScroll()
  }
}

// Cleanup function to ensure scroll is restored
export const cleanupBodyScrollLock = (): void => {
  unlockBodyScroll()
}
