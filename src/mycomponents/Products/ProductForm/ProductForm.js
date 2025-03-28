import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import useStore from "../../../store";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

function ProductForm() {
  const { addProduct, getProduct, products, updateProduct } =
    useStore();

  const params = useParams();
  const navigate = useNavigate();

  let editedProduct = products.filter(
    (product) => product.id === params.id
  )[0];


  const [item, setItem] = useState({
    id: editedProduct?.id,
    name: editedProduct?.name,
    category: editedProduct?.category,
    photo: editedProduct?.photo,
    price: editedProduct?.price,
  });

  function addItem() {
    if (editedProduct) {
      updateProduct(item);
    } else {
      addProduct(item);
    }
    navigate("/dishes");
    setTimeout(() => getProduct(), 100);
  }

  return (
    <Form className="m-3">
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          №
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue=""/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Название
        </Form.Label>
        <Col sm="10">
          <Form.Control value={item?.name} onChange={(e) => setItem({ ...item, name: e.target.value })}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Категория
        </Form.Label>
        <Col sm="10">
          <Form.Control value={item?.category} onChange={(e) => setItem({ ...item, category: e.target.value })}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Фото
        </Form.Label>
        <Col sm="10">
          <Form.Control value={item?.photo} onChange={(e) => setItem({ ...item, photo: e.target.value })}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Цена
        </Form.Label>
        <Col sm="10">
          <Form.Control value={item?.price} onChange={(e) => setItem({ ...item, price: e.target.value })}/>
        </Col>
      </Form.Group>

      <Button variant="primary" onClick={addItem}>Сохранить</Button>
    </Form>
  );
}

export default ProductForm;
