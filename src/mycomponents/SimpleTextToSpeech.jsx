import React, { useState } from 'react';

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
    <div style={{ padding: '20px' }}>
      <button 
        onClick={speak}
        style={{ padding: '10px 15px', cursor: 'pointer' }}
      >
        Озвучить
      </button>
    </div>
  );
};

export default SimpleTextToSpeech;