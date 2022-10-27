import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import OrderPage from './components/OrderPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/order' element={<OrderPage />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
