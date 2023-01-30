import React from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

export default function ReactSpeechRecognition() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const speechStart = () =>
    SpeechRecognition.startListening({
      continous: true,
      language: 'ko',
    });
  const speechStop = () => SpeechRecognition.stopListening;
  const speechTranscript = () => resetTranscript;
  if (!browserSupportsSpeechRecognition) {
    return <span>speeking</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button type="button" onClick={speechStart}>
        Start
      </button>
      <button type="button" onClick={speechStop}>
        Stop
      </button>
      <button type="button" onClick={speechTranscript}>
        Reset
      </button>
      <p>{transcript}</p>
    </div>
  );
}
