import { render, screen} from '@testing-library/react';
import { Router} from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { data } from '../data/itemListData';
import {createMemoryHistory} from 'history';

test('Breadcrumb component render', () => {
  const history = createMemoryHistory();
  const text = 'Ropa y Accesorios > Calzado > Sandalias y Ojotas';

  render(
    <Router location={history.location} navigator={history}><Breadcrumb values={data.categories}/></Router>
  );

  const element = screen.getByText(text)
  expect(element).toHaveTextContent(text)
});