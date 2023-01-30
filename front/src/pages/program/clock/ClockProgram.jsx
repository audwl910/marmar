/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactSpeechRecognition from '../../../components/program/ReactSpeechRecognition';
import { getClockApi } from '../../../api/programApi';
import ClockGame from '../../../components/program/ClcokGame';

export default function ClockProgram() {
  const location = useLocation();
  const difficulty = location.state?.difficulty;
  const [clockData, setClockData] = useState([]);
  const [cnt, setCnt] = useState(0);

  const getClockData = async () => {
    console.log(difficulty);
    const response = await getClockApi(difficulty);
  };
  useEffect(() => {
    getClockData();
  }, [difficulty]);

  const cntPlus = () => {
    cnt < 10 && setCnt(cnt + 1);
    console.log(setCnt);
  };
  const data = [111, 222, 333];
  return (
    <div>
      <h1>시계 읽기</h1>
      {difficulty}
      <ClockGame dat={data[cnt]} />
      <ReactSpeechRecognition />
      <button type="button" onClick={cntPlus}>
        button
      </button>
    </div>
  );
}
