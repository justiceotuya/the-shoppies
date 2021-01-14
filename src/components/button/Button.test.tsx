import { React } from 'react';
import { render, fireEvent } from '@testing-library/react'
import { Button } from '..';

test('button should have text value', () => {
    const { container } = render(
    <Button
    children="My Mother"
    />);
    const button = container.firstChild
    expect(button?.textContent).toBe('My Mother')
});
