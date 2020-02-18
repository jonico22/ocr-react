import React, { useEffect, useState } from 'react';
import Ocr from '../components/Ocr'

const Image = ()=>{
    const [image, setImage] = useState({preview: '', raw: ''})
    const [imageOcr, setImageOcr] = useState('')
    const handleChange = (e) => {
        setImage({
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        })
        setImageOcr(URL.createObjectURL(e.target.files[0]))
      }

    return(
        <>
        <input type="file" id="upload-button"  onChange={handleChange}/>
         <br />
        <div className="container mx-auto">
            <div className="flex flex-wrap">
                <div className="w-full  md:w-1/2 lg:w-1/2  mb-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">PROCESAR CORTE</button>
                {
                    image.preview ? <img src={ image.preview } width="300" style={{ margin: 'auto'}} /> : null
                }
                </div>
                <div className="w-full  md:w-1/2 lg:w-1/2  mb-4" >
                    <Ocr image={imageOcr}/>
                </div>
            </div> 
        </div> 
        
        
        </>
    )
}

export default Image