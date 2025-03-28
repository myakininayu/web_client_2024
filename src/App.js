import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './mycomponents/Header/Header';
import Products from './mycomponents/Products/Products';
import Start from './mycomponents/Start/Start'
import Workers from './mycomponents/Workers/Workers'
import ProductForm from './mycomponents/Products/ProductForm/ProductForm';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/dishes" element={<Products/>}/>
        <Route path="/workers" element={<Workers/>}/>
        <Route path="/dishes_form/" element={<ProductForm/>}/>
        <Route path="/dishes_form/:id" element={<ProductForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
