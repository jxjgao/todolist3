import React from 'react';
import { render } from '@testing-library/react';
import ToDoListContainer from './ToDoListContainer';

test('renders learn react link', () => {
  const { getByText } = render(<ToDoListContainer />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
