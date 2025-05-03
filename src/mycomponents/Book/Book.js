import TelegramForm from "../TelegramForm";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Book() {
    return (
      <>
       <Row className="justify-content-md-center m-5" >
        <Col>
        <h2>Укажите количество гостей и выберете время визита, а мы подготовим столик для вас!</h2>
        </Col>
      </Row>
       <TelegramForm></TelegramForm>
      </>
    );
  }

  export default Book;