// TutorialHeader component tests

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { mockTutorialStep } from '../../../test/utils'
import TutorialHeader from '../TutorialHeader'

describe('TutorialHeader', () => {
  const defaultProps = {
    currentStep: 0,
    totalSteps: 5,
    welcomeTitle: 'Test Title',
    welcomeDescription: 'Test Description',
    currentTutorialStep: mockTutorialStep,
  }

  it('should render tutorial header with title and description', () => {
    render(<TutorialHeader {...defaultProps} />)
    
    expect(screen.getByText('Tutorial Mode')).toBeInTheDocument()
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('should display correct step progress', () => {
    render(<TutorialHeader {...defaultProps} />)
    
    expect(screen.getByText('Step 1 of 5')).toBeInTheDocument()
  })

  it('should render progress bar with correct width', () => {
    const { container } = render(<TutorialHeader {...defaultProps} />)
    
    const progressBar = container.querySelector('.bg-yellow-400')
    expect(progressBar).toHaveStyle({ width: '20%' }) // (1/5) * 100%
  })

  it('should render highlight box when highlight is provided', () => {
    render(<TutorialHeader {...defaultProps} />)
    
    expect(screen.getByText(`💡 ${mockTutorialStep.highlight}`)).toBeInTheDocument()
  })

  it('should render action instruction when action is provided', () => {
    render(<TutorialHeader {...defaultProps} />)
    
    expect(screen.getByText(`👉 ${mockTutorialStep.action}`)).toBeInTheDocument()
  })

  it('should not render highlight box when highlight is not provided', () => {
    const stepWithoutHighlight = { ...mockTutorialStep, highlight: undefined }
    render(
      <TutorialHeader {...defaultProps} currentTutorialStep={stepWithoutHighlight} />
    )
    
    expect(screen.queryByText(/💡/)).not.toBeInTheDocument()
  })

  it('should not render action instruction when action is not provided', () => {
    const stepWithoutAction = { ...mockTutorialStep, action: undefined }
    render(
      <TutorialHeader {...defaultProps} currentTutorialStep={stepWithoutAction} />
    )
    
    expect(screen.queryByText(/👉/)).not.toBeInTheDocument()
  })

  it('should calculate progress correctly for different steps', () => {
    const { rerender } = render(<TutorialHeader {...defaultProps} currentStep={2} />)
    expect(screen.getByText('Step 3 of 5')).toBeInTheDocument()
    
    rerender(<TutorialHeader {...defaultProps} currentStep={4} />)
    expect(screen.getByText('Step 5 of 5')).toBeInTheDocument()
  })
})
