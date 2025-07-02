// ScoreDisplay component tests

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ScoreDisplay from '../ScoreDisplay'

describe('ScoreDisplay', () => {
  it('should render player and computer scores', () => {
    render(<ScoreDisplay countWinsYou={3} countWinsPC={2} />)
    
    expect(screen.getByText('3 - 2')).toBeInTheDocument()
  })

  it('should render zero scores correctly', () => {
    render(<ScoreDisplay countWinsYou={0} countWinsPC={0} />)
    
    expect(screen.getByText('0 - 0')).toBeInTheDocument()
  })

  it('should handle large score numbers', () => {
    render(<ScoreDisplay countWinsYou={999} countWinsPC={888} />)
    
    expect(screen.getByText('999 - 888')).toBeInTheDocument()
  })

  it('should have proper semantic structure with heading', () => {
    render(<ScoreDisplay countWinsYou={5} countWinsPC={3} />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('5 - 3')
  })

  it('should apply correct CSS classes for styling', () => {
    render(<ScoreDisplay countWinsYou={1} countWinsPC={1} />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('text-white')
    expect(heading).toHaveClass('leading-none')
  })

  it('should display scores in correct format with hyphen separator', () => {
    render(<ScoreDisplay countWinsYou={10} countWinsPC={5} />)
    
    expect(screen.getByText('10 - 5')).toBeInTheDocument()
  })

  it('should handle equal scores', () => {
    render(<ScoreDisplay countWinsYou={7} countWinsPC={7} />)
    
    expect(screen.getByText('7 - 7')).toBeInTheDocument()
  })

  it('should handle when computer is winning', () => {
    render(<ScoreDisplay countWinsYou={2} countWinsPC={8} />)
    
    expect(screen.getByText('2 - 8')).toBeInTheDocument()
  })
})
