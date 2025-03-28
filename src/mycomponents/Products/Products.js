import Table from 'react-bootstrap/Table';
import Product from './Product/Product';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useStore from '../../store';
import { useState, useEffect } from 'react';

function Products() {

  const products = useStore((state) => state.products);
  const { getProduct } = useStore();
  
  useEffect(() => {
    getProduct();
}, [products]);

  return (
    <div className='m-3'>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Категория</th>
            <th>Фото</th>
            <th>Цена</th>
            <th>Настройки</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => { return <Product key={prod.id} dish={prod}></Product> })}
        </tbody>
      </Table>  
      <Link to={`/dishes_form/`}><Button variant="primary" >Создать</Button></Link>
    </div>
  );
}

export default Products;