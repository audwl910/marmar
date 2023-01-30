/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactSpeechRecognition from '../../../components/program/ReactSpeechRecognition';
// import { getClockApi } from '../../../api/programApi';
import ClockGame from '../../../components/program/ClcokGame';

export default function ClockProgram() {
  const location = useLocation();
  const difficulty = location.state?.difficulty;
  // const [clockData, setClockData] = useState([]);
  const getClockData = async () => {
    console.log(difficulty);
    // const response = await getClockApi(difficulty);
  };
  useEffect(() => {
    getClockData();
  }, []);

  const clockData = [
    { clock: '111', answer: 'aaa' },
    { clock: '222', answer: 'bbb' },
  ];

  return (
    <div>
      <h1>시계 읽기</h1>
      <ClockGame data={clockData} />
      <ReactSpeechRecognition />
    </div>
  );
}
