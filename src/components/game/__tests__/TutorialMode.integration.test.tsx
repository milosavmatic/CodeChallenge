// Integration tests for tutorial system

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { mockChoices } from '../../../test/utils'
import TutorialMode from '../TutorialMode'

// Mock the tutorial service
vi.mock('../../../services/tutorialGameService', () => ({
  simulateGameRound: vi.fn(() => ({
    computerChoice: { id: 2, name: 'paper' },
    result: 'lose',
  })),
}))

// Mock the content service
vi.mock('../../../services/tutorialContentService', () => ({
  getWelcomeTitle: vi.fn(() => 'Welcome! Let\'s learn how to play!'),
  getWelcomeDescription: vi.fn(() => 'Test description'),
}))

// Mock tutorial data
vi.mock('../../../data/tutorial', () => ({
  tutorialSteps: [
    {
      title: 'Step 1',
      description: 'First step description',
      highlight: 'Important info',
      action: 'Click to continue',
    },
    {
      title: 'Step 2',
      description: 'Second step description',
    },
  ],
}))

describe('TutorialMode Integration', () => {
  const defaultProps = {
    choices: mockChoices,
    onExitTutorial: vi.fn(),
    className: 'test-class',
    isFirstTime: true,
  }

  it('should render complete tutorial with all components', () => {
    render(<TutorialMode {...defaultProps} />)
    
    // Check header components
    expect(screen.getByText('Tutorial Mode')).toBeInTheDocument()
    expect(screen.getByText('Step 1 of 2')).toBeInTheDocument()
    
    // Check navigation
    expect(screen.getByText('Previous')).toBeInTheDocument()
    expect(screen.getByText('Next')).toBeInTheDocument()
    expect(screen.getByText('Skip Tutorial')).toBeInTheDocument()
  })

  it('should handle navigation between tutorial steps', async() => {
    const user = userEvent.setup()
    render(<TutorialMode {...defaultProps} />)
    
    // Initially on step 1
    expect(screen.getByText('Step 1 of 2')).toBeInTheDocument()
    
    // Click next
    const nextButton = screen.getByText('Next')
    await user.click(nextButton)
    
    // Should be on step 2
    expect(screen.getByText('Step 2 of 2')).toBeInTheDocument()
  })

  it('should call onExitTutorial when skip is clicked', async() => {
    const mockOnExit = vi.fn()
    const user = userEvent.setup()
    
    render(<TutorialMode {...defaultProps} onExitTutorial={mockOnExit} />)
    
    const skipButton = screen.getByText('Skip Tutorial')
    await user.click(skipButton)
    
    expect(mockOnExit).toHaveBeenCalledTimes(1)
  })

  it('should integrate with services properly', () => {
    render(<TutorialMode {...defaultProps} />)
    
    // Should use content service for welcome message
    expect(screen.getByText('Welcome! Let\'s learn how to play!')).toBeInTheDocument()
  })

  it('should handle first-time user flow', () => {
    render(<TutorialMode {...defaultProps} isFirstTime={true} />)
    
    expect(screen.getByText('Tutorial Mode')).toBeInTheDocument()
    expect(screen.getByText('Welcome! Let\'s learn how to play!')).toBeInTheDocument()
  })

  it('should handle returning user flow', () => {
    render(<TutorialMode {...defaultProps} isFirstTime={false} />)
    
    expect(screen.getByText('Tutorial Mode')).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { container } = render(<TutorialMode {...defaultProps} className="custom-class" />)
    
    const tutorialContainer = container.firstChild as HTMLElement
    expect(tutorialContainer).toHaveClass('custom-class')
  })
})
