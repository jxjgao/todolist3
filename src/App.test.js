import React from 'react';
import { render } from '@testing-library/react';
import ToDoList from './components/ToDoList';

test('renders learn react link', () => {
  const { getByText } = render(<ToDoList />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
