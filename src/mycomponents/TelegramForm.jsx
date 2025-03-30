import { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function TelegramForm() {
  const [isSent, setIsSent] = useState(false);
  const [guestsNumber, setGuestsNumber] = useState(""); 
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const sendToTelegram = async () => {
    try {
      await fetch(
        `https://api.telegram.org/bot7866269824:AAETbTcG8hlGYX-woxtpgRx5_EOW8Ag4v2E/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: 835795557,
            text: `Новое сообщение: Бронь стола на ${guestsNumber} гостей, день: ${date},  время: ${time}`,
          }),
        }
      );
      setIsSent(true);
      setDate("");
      setTime("");
      setGuestsNumber("");
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  return (
    <Form className="m-3">
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Количество гостей
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="number"
            value={guestsNumber}
            onChange={(e) => {
              setGuestsNumber(e.target.value);
              setIsSent(false);
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Дата
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setIsSent(false);
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Время
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
              setIsSent(false);
            }}
          />
        </Col>
      </Form.Group>

      <Button variant="primary" onClick={sendToTelegram}>
        Сохранить
      </Button>
      {isSent && <h2>Спасибо, заявка принята</h2>}
    </Form>
  );
}
