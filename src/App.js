import React, { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';
import './App.css';
import img from "./img.jpeg"

function App() {
  const worker = createWorker({
    logger: m => console.log(m),
  });
  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } =await worker.recognize(img);
    let arr = text.split(" ")
    console.log(arr)
    setOcr(text);
    await worker.terminate();
  };
  
  const [ocr, setOcr] = useState('Recognizing...');
  useEffect(() => {
    doOCR();
  });
  return (
    <div className="App">
      <p>{ocr}</p>
    </div>
  );
}

export default App;

