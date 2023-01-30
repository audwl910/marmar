import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactSpeechRecognition from '../../../components/program/ReactSpeechRecognition';
import WordGame from '../../../components/program/WordGame';

export default function WordProgram() {
  const location = useLocation();
  const difficulty = location.state?.difficulty;
  const [cnt, setCnt] = useState(0);
  const cntPlus = () => {
    cnt < 10 && setCnt(cnt + 1);
    console.log(setCnt);
  };
  const data = [111, 222, 333];

  return (
    <div>
      <h1>단어 읽기</h1>
      {difficulty}
      <WordGame dat={data[cnt]} />
      <ReactSpeechRecognition />
      <button type="button" onClick={cntPlus}>
        button
      </button>
    </div>
  );
}
