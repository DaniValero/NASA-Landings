import React, {useState, useEffect} from 'react'
import Card from '../components/Card'
import '../components/global.css'
import {Link} from 'react-router-dom'


const Neas = () => {

    const [neas,setNeas] = useState([])

    useEffect(() => {
        const getData = async () =>{
            const resp = await fetch(`http://localhost:3000/api/astronomy/neas`);
            const data = await resp.json();
            setNeas(data)
            console.log(neas)
        }
        getData();
    }, [])
    
    if(!neas.length) return <div class="lds-ripple"><div></div><div></div></div>


    return (
        <>
        <div className='wrapper-landings'>
        <h2>NEAs descubiertos</h2>
        <Link to={`/neas/list`} className='control-panel-link'>Panel de control</Link>
        <Card neas={neas}/>
        </div>
        </>
    )
}

export default Neas