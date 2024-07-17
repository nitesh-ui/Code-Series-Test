import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuestionForm from '../components/QuestionForm';
import '@testing-library/jest-dom';


describe('QuestionForm', () => {
  test('renders questions and captures responses', () => {
    const mockOnResponse = jest.fn();
    const mockOnSubmit = jest.fn();

    render(
      <QuestionForm
        questions={["Is this a test?"]}
        onResponse={mockOnResponse}
        onSubmit={mockOnSubmit}
      />
    );

    expect(screen.getByText(/Is this a test?/)).toBeInTheDocument();

    fireEvent.click(screen.getByText("Yes"));
    expect(mockOnResponse).toHaveBeenCalledWith(true);
    
    fireEvent.click(screen.getByText("Submit"));
    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
