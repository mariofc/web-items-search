import { render, screen} from '@testing-library/react';
import { Router} from 'react-router-dom';
import { BackToHome } from '../../components/BackToHome/BackToHome'
import {createMemoryHistory} from 'history';

test('Back to home render', () => {
  const history = createMemoryHistory();
  const text = 'Volver a home';

  render(
    <Router location={history.location} navigator={history}><BackToHome/></Router>
  );
  
  const element = screen.getByText(text);
  expect(element).toHaveTextContent(text)
});