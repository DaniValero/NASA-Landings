import React, {useEffect, useState} from 'react'
import './global.css'

const Picture = () => {
    const [img, setImg] = useState("")

    useEffect(() => {
      const fetchImg = async () => {
        const resp = await fetch(`https://api.nasa.gov/planetary/apod?api_key=5AT9TM4d7Cidtfyn56aw5To3vsUE1rkZI5yBLOpw`);
        const data = await resp.json();
        setImg(data)
      }
      fetchImg();
    }, [])
    

    return(
        <>
        <div className='container-picture'>
            <h2>Picture of the Day</h2>
              <img  className="potd" src={img.url} alt="Nasa pic of the day"/>
                <h3>{img.title}</h3>
                <p>{img.explanation}</p>
        </div>
        </>
    )
}

export default Picture