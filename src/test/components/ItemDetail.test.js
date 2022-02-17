import { render, screen} from '@testing-library/react';
import { Router} from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { data } from '../data/itemListData';
import {createMemoryHistory} from 'history';

test('Verify items detail render', () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}><ItemDetail items={data.items}/></Router>
  );

  const items = screen.getAllByTestId('item-testid')
  expect(items).toHaveLength(1)
});