import React, { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';
import img from "../img.jpeg"

const Ocr =  ()=>{
    const [ocr, setOcr] = useState('Recognizing...');
    const [list,setList] = useState([])
    
    useEffect(() => {
        const worker = createWorker({
            logger: m => console.log(m),
          });
        const doOCR = async () => {
            await worker.load();
            await worker.loadLanguage('eng');
            await worker.initialize('eng');
            const { data: { text } } =await worker.recognize(img);
            let arr = text.split(" ")
            setList(arr)
            console.log(arr)
            await worker.terminate();
            setOcr(text);
        };
        doOCR();
      },[]);
    return(
        <>
            <p>{ocr}</p>
            {
                list.map((item,id)=>{
                    return <ul key={id}>
                        <li>{item}</li>
                    </ul>
                })
            }
        </>
    )
}

export default Ocr