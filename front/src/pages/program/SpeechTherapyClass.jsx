import React from 'react';
import ReactSpeechRecognition from '../../components/program/ReactSpeechRecognition';
import ReactHookSpeechToText from '../../components/program/ReactHookSpeechToText';

export default function SpeechTherapyClass() {
  return (
    <div>
      <div>
        <ReactSpeechRecognition />
      </div>
      <div>
        <ReactHookSpeechToText />
      </div>
    </div>
  );
}
