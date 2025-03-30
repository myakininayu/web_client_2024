import React from 'react';
import Button from 'react-bootstrap/Button';

const SimpleTextToSpeech = (props) => {
  const speak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(props.text);
      utterance.lang = 'ru-RU';
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Ваш браузер не поддерживает синтез речи!');
    }
  };

  return (
    <div><Button variant="primary" onClick={speak}>Озвучить</Button></div>
  );
};

export default SimpleTextToSpeech;