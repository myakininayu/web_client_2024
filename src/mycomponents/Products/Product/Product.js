import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import style from './Product.module.css';
import useStore from '../../../store';

function Product(props) {

  const delProduct = useStore((state) => state.delProduct);

  return (
    <tr>
        <td>{props.dish.id}</td>
        <td>{props.dish.name}</td>
        <td>{props.dish.category}</td>
        <td><img className={style.table_img} src={props.dish.photo}/></td>
        <td>{props.dish.price}₽</td>
        <td min-height="200px">
          <div className="d-flex flex-row justify-content-center">
                <Link className='m-1' to={`/dishes_form/${props.dish.id}`}><Button variant="primary">Редактировать</Button></Link>
                <Button className='m-1' variant="danger" onClick={() => delProduct(props.dish.id)}>Удалить</Button>
          </div>
        </td>
    </tr>
  );
}

export default Product;