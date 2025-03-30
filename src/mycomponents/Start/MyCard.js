import Card from 'react-bootstrap/Card';
import SimpleTextToSpeech from "../SimpleTextToSpeech";

function MyCard(props) {
  return (
    <>
        <Card style={{ width: '25rem' }}>
        <Card.Img width={300} height={250} variant="top" src={props.img} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
            <SimpleTextToSpeech text={props.text}></SimpleTextToSpeech>
        </Card.Body>
        </Card>
    </>
  );
}

export default MyCard;