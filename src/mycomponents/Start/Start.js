import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import MyCard from './MyCard';

function Start() {
  const texts = [
    {
      title:"Акция 1",
      img:"img/skidka.jpg",
      text:"Новый день - новое блюдо! Скидки и подарки ждут вас!"
    },
    {
      title:"Акция 2",
      img:"img/skidka1.jpg",
      text:"Скидки на завтраки, выпечку и кофе) Только с 8.00 до 10.00"
    },
    {
      title:"Акция 3",
      img:"img/skidka2.jpg",
      text:"Новый день - новое блюдо! Теперь в новом формате! Только в ноябре!"
    },
  ]
  return (
    <>
    <Container>
      <Row className="justify-content-md-center" >
        <Col>
        <h2>Добро пожаловать на <Badge bg="dark">главную страницу!</Badge></h2>
        <h2>Здесь вы найдете самые актуальные <Badge bg="dark">новости</Badge> и <Badge bg="danger">акции</Badge></h2>
        </Col>
      </Row>
      <Row>
        {texts.map((t) => { return <Col><MyCard title={t.title} img={t.img} text={t.text}/></Col> })}
      </Row>
    </Container>
  
    </>
  );
}

export default Start;