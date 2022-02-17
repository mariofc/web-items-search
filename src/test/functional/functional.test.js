import { render, screen, fireEvent} from '@testing-library/react';
import { Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import {createMemoryHistory} from 'history';
import Home from '../../pages/Home/Home';
import SearchList from '../../pages/SearchList/SearchList';

test('Dont search if text is empty', () => {
  const history = createMemoryHistory();
  const searchText ='';

  render(
    <Router location={history.location} navigator={history}><Home/></Router>
  );

  const input = screen.getByPlaceholderText('Nunca dejes de buscar')
  const buttonSearch = screen.getByTestId('button-search-testid')
  fireEvent.change(input, {target: {value: searchText}})
  userEvent.click(buttonSearch);

  expect(history.location.pathname).toEqual('/');
});

test('Make search from home', () => {
    const history = createMemoryHistory();
    const searchText ='cama';

    render(
      <Router location={history.location} navigator={history}><Home/></Router>
    );

    const input = screen.getByPlaceholderText('Nunca dejes de buscar')
    const buttonSearch = screen.getByTestId('button-search-testid')
    fireEvent.change(input, {target: {value: searchText}})
    userEvent.click(buttonSearch);

    expect(history.location.pathname).toEqual('/items');
});

test('Make search from list search', () => {
  const history = createMemoryHistory();
  const searchText ='cama';

  render(
    <Router location={history.location} navigator={history}><SearchList/></Router>
  );

  const input = screen.getByPlaceholderText('Nunca dejes de buscar')
  const buttonSearch = screen.getByTestId('button-search-testid')
  fireEvent.change(input, {target: {value: searchText}})
  userEvent.click(buttonSearch);

  expect(history.location.pathname).toEqual('/items');
});




