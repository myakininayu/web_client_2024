import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

function Start() {
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
        <Col>
          <Card style={{ width: '25rem' }}>
            <Card.Img width={300} height={250} variant="top" src="img/skidka2.jpg" />
            <Card.Body>
              <Card.Title>Акция 1</Card.Title>
              <Card.Text>
                Новый день - новое блюдо!
                Скидки и подарки ждут вас!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: '25rem' }}>
          <Card.Img width={300} height={250} variant="top" src="img/skidka1.jpg" />
            <Card.Body>
              <Card.Title>Акция 2</Card.Title>
              <Card.Text>
                Скидки на завтраки, выпечку и кофе)
                Только с 8.00 до 10.00
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: '25rem' }}>
          <Card.Img width={300} height={250} variant="top" src="img/skidka.jpg" />
            <Card.Body>
              <Card.Title>Акция 3</Card.Title>
              <Card.Text>
                Новый день - новое блюдо! Теперь в новом формате! Только в ноябре!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>
  
    </>
  );
}

export default Start;