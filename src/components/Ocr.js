import React, { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';
import processor  from '../utils/processor.js'

export default ({image})=>{
    const [ocr, setOcr] = useState('');
    const [list,setList] = useState([]);

    useEffect(() => {
        const worker = createWorker({
            logger: m => console.log(m),
          });
          if (image !== "") {
            const doOCR = async () => {
                setOcr('PROCESANDO ...');
                await worker.load();
                await worker.loadLanguage('eng');
                await worker.initialize('eng');
                const { data: { text } } =await worker.recognize(image);
                let arr = text.split(" ")
                setList(arr)
                await worker.terminate();
                setOcr(text);
            };
            doOCR();
          }

      },[image]);
    return( processor(list, 1) ||
        <>
         <div className="flex flex-wrap">
            <div className="w-full  md:w-1/2 lg:w-1/2  mb-4">
                <img src={ image } width="300" style={{ margin: 'auto'}} alt="imagen" />
            </div>
            <div className="w-full  md:w-1/2 lg:w-1/2  mb-4">
                <p>{ocr}</p>

                <ul style={{ height: '500px'}}
                    className="overflow-y-scroll bg-gray-400 text-gray-700 p-2">
                    {
                        list.map((item,id)=>{
                            return <li key={id}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
        </>
    )
};
