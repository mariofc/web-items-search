import { render, screen} from '@testing-library/react';
import { Router} from 'react-router-dom';
import { NotFound } from '../../pages/NotFound/NotFound'
import {createMemoryHistory} from 'history';

test('Not found render', () => {
  const history = createMemoryHistory();
  const text = 'No existe la página';

  render(
    <Router location={history.location} navigator={history}><NotFound/></Router>
  );
  
  const element = screen.getByText(text);
  expect(element).toHaveTextContent(text)
});