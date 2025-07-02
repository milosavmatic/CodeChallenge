import { beforeEach, vi } from 'vitest'
import '@testing-library/jest-dom'

// Mock localStorage for tests
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

// Reset mocks before each test
beforeEach(() => {
  vi.clearAllMocks()
})
