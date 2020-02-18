import React, { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';

const Ocr = ({image})=>{
    const [ocr, setOcr] = useState('');
    const [list,setList] = useState([])
    
    useEffect(() => {
        const worker = createWorker({
            logger: m => console.log(m),
          });
          if (image != "") {
            const doOCR = async () => {
                setOcr('PROCESANDO ...');
                await worker.load();
                await worker.loadLanguage('eng');
                await worker.initialize('eng');
                const { data: { text } } =await worker.recognize(image);
                let arr = text.split(" ")
                setList(arr)
                console.log(text)
                await worker.terminate();
                setOcr('');
            };
            doOCR();
          }
        
      },[image]);
    return(
        <>
            <p>{ocr}</p>
            <ul style={{ height: '500px'}}
            className="overflow-y-scroll bg-gray-400 text-gray-700 p-2">
            {
                list.map((item,id)=>{
                    return <li key={id}>{item}</li>
                })
            }
             </ul>
        </>
    )
}

export default Ocr