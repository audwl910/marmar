import React from 'react';
import ReactSpeechRecognition from '../../../components/program/ReactSpeechRecognition';

export default function ClockProgram() {
  return (
    <div>
      <h1>시계 읽기</h1>
      <ReactSpeechRecognition />
    </div>
  );
}
