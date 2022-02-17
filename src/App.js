import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import SearchList from './pages/SearchList/SearchList';
import { NotFound } from './pages/NotFound/NotFound';

function App() {
    return (
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/items/:itemId' element={<Detail/>} />
          <Route path='/items' element={<SearchList/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
    );
}

export default App;
