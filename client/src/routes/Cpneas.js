import React, {useState, useEffect} from 'react'
import '../components/global.css'
import List from '../components/commons/List'

const Cpneas = () => {

    const [neas, setNeas] = useState([])
    const [list, setList] = useState([])

    const getData = async () =>{
        const resp = await fetch(`https://nasa-landings.onrender.com/api/astronomy/neas`);
        const data = await resp.json();
        setNeas(data)
    }

    useEffect(() => {getData()}, [])

    const showNeas = () => {
        setList(neas)
    }

    const handleRemoveNeas = (nea) => {
        const list = neas.filter((item) => item !== nea)
        setList(list)
        setNeas(list)
    }

    if (neas.length === 0) return <div class="lds-ripple"><div></div><div></div></div>
    
    return (
        <>
        <div className='cp-wrapper'>
        <h2>Panel de Control de NEAs</h2>

        <button className='button' onClick={() => showNeas()}>Mostrar NEAs</button>
        <List neas={neas} list={list} onRemoveNeas={(nea) => handleRemoveNeas(nea)}/>
        </div>
        </>
    )
}

export default Cpneas
