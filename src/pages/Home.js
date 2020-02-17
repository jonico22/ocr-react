import React from 'react'
import Ocr from '../components/Ocr'
import Header from '../components/Header'
import Filter from '../components/Filter'

const Home = ()=>{
    return(
        <>
            <Header />
            <Filter />
            <Ocr />
        </>
    )
}

export default Home