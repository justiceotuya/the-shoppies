import { React } from 'react';
import { render, fireEvent,screen } from '@testing-library/react'
import { Button } from '..';

test('button should have text value', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick} >Testing</Button>)
    const button = screen.getByText("Testing")
    fireEvent.click(button)

    expect(button?.textContent).toBe('Testing')
    expect(handleClick).toHaveBeenCalledTimes(1)
});

test('button should not be able to be clicked when it is disabled', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick} disabled={true}>Testing</Button>)
    const button = screen.getByText("Testing")
    fireEvent.click(button)

    expect(button).toHaveAttribute('disabled')
    expect(handleClick).toHaveBeenCalledTimes(0)
});
