


// PasswordInput.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PasswordInput from './PasswordInput';  // Make sure to update the path based on your project structure

// Describe the suite of tests for the PasswordInput component
describe('PasswordInput Component', () => {
  
  // Test if the component renders correctly
  it('renders the PasswordInput component', () => {
    render(<PasswordInput />);
    expect(screen.getByText('Password in Input Field')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter password')).toBeInTheDocument();
    expect(screen.getByText('Show')).toBeInTheDocument();
  });

  // Test if the password field initially hides the text (type='password')
  it('initially hides the password', () => {
    render(<PasswordInput />);
    const inputElement = screen.getByPlaceholderText('Enter password');
    expect(inputElement).toHaveAttribute('type', 'password');
  });

  // Test if clicking the button changes the input type to text (show password)
  it('shows the password when the Show button is clicked', () => {
    render(<PasswordInput />);
    const buttonElement = screen.getByText('Show');
    fireEvent.click(buttonElement);
    const inputElement = screen.getByPlaceholderText('Enter password');
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(screen.getByText('Hide')).toBeInTheDocument();
  });

  // Test if clicking the button again hides the password (type='password')
  it('hides the password when the Hide button is clicked', () => {
    render(<PasswordInput />);
    const buttonElement = screen.getByText('Show');
    fireEvent.click(buttonElement);  // Show the password
    fireEvent.click(buttonElement);  // Hide the password again
    const inputElement = screen.getByPlaceholderText('Enter password');
    expect(inputElement).toHaveAttribute('type', 'password');
    expect(screen.getByText('Show')).toBeInTheDocument();
  });
});
