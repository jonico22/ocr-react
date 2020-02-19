import React , {useState} from 'react'
import Cropper from 'react-easy-crop'

const ImgCrop = ({imageCrop,event,showCroppedImage})=>{
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const minZoom = 0.7

    return(
        <>
            <div className="relative" style={{height:'400px',width:'100%'}}>
                <Cropper
                    image={imageCrop}
                    minZoom={minZoom}
                    crop={crop}
                    aspect={4 /4}
                    onCropChange={setCrop}
                    onCropComplete={event}
                /> 
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={showCroppedImage}>PROCESAR CORTE</button>
        </>
    )
}

export default ImgCrop