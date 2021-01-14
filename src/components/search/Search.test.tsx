import { React } from 'react';
import { render, screen,fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button, Search } from '..';

test('input should submit when pressing enter', () => {
    const handleSubmit = jest.fn()
    render(<Search onSubmit={handleSubmit}/>)
    const inputNode = screen.getByPlaceholderText("Search Movies")
    const text = "typing"
    userEvent.type(inputNode, text)
    fireEvent.submit(inputNode)

    expect(inputNode.value).toEqual(text)
    expect(handleSubmit).toHaveBeenCalledTimes(1)
});

