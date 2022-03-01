import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import BookstoreContainer from './components/BookstoreContainer';
import Header from './components/Header';
import Categories from './redux/categories/categories';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<BookstoreContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Provider>
);

export default App;
