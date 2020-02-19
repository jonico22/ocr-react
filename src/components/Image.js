import React, { useCallback, useState } from 'react';
import Ocr from '../components/Ocr'
import ImgCrop from './ImgCrop'
import  getCroppedImg from '../utils'

const Image = ()=>{
    const [imageCrop, setImageCrop] = useState('')
    const [imageOcr, setImageOcr] = useState('')
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
 
    const handleChange = (e) => {
        setImageOcr("")
        setImageCrop(URL.createObjectURL(e.target.files[0]))
    }
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(imageCrop,croppedAreaPixels)
            setImageCrop("")
            setImageOcr(croppedImage)
        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels])

    return(
        <>
        <input type="file" id="upload-button"  onChange={handleChange}/>
         <br />
        <div className="container mx-auto">
            { imageCrop !== "" && <ImgCrop imageCrop={imageCrop} event={onCropComplete} 
                        showCroppedImage={showCroppedImage}/> }      
            { imageOcr !== "" && <Ocr image={imageOcr} />  }
        </div> 
        
        
        </>
    )
}

export default Image