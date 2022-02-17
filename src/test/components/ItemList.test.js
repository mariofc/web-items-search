import { render, screen} from '@testing-library/react';
import { Router} from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import { data } from '../data/itemListData';
import {createMemoryHistory} from 'history';

test('Verify items list quantity render', () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}><ItemList items={data.items}/></Router>
  );

  const items = screen.getAllByTestId('item-link-testid')
  expect(items).toHaveLength(4)
});