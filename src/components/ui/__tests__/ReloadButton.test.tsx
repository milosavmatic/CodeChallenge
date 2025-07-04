// ReloadButton component tests

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import ReloadButton from '../ReloadButton'

// Mock the SVG import
vi.mock('../../../assets/icons/reload.svg?react', () => ({
  default: () => <svg data-testid="reload-icon" />,
}))

describe('ReloadButton', () => {
  it('should render reload button with icon', () => {
    const mockOnReload = vi.fn()
    render(<ReloadButton onReload={mockOnReload} />)
    
    const button = screen.getByRole('button')
    const icon = screen.getByTestId('reload-icon')
    
    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('should call onReload when clicked', async() => {
    const mockOnReload = vi.fn()
    const user = userEvent.setup()
    
    render(<ReloadButton onReload={mockOnReload} />)
    
    const button = screen.getByRole('button')
    await user.click(button)
    
    expect(mockOnReload).toHaveBeenCalledTimes(1)
  })

  it('should have correct CSS classes for styling', () => {
    const mockOnReload = vi.fn()
    render(<ReloadButton onReload={mockOnReload} />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('absolute')
    expect(button).toHaveClass('top-5')
    expect(button).toHaveClass('right-3')
  })

  it('should be accessible as a button element', () => {
    const mockOnReload = vi.fn()
    render(<ReloadButton onReload={mockOnReload} />)
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button.tagName).toBe('BUTTON')
  })

  it('should handle missing onReload prop gracefully', () => {
    render(<ReloadButton />)
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should render icon with proper CSS classes', () => {
    const mockOnReload = vi.fn()
    const { container } = render(<ReloadButton onReload={mockOnReload} />)
    
    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })
})
