import React, {useState, useEffect} from 'react'
import Map from '../components/Map'
import '../components/global.css'
import {Link} from 'react-router-dom'


const Landing = () => {

    const [input, setInput] = useState("")
    const [landings, setLandings] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        const getData = async () =>{
            const resp = await fetch(`http://localhost:3000/api/astronomy/landings?${query}`);
            const data = await resp.json();
            setLandings(data)
    
        }
        getData();
      }, [query])


    const findLanding = (e) => {
        
        e.preventDefault(e);
        const select = document.getElementById('filter')

        if(select.value === "masa"){
        let query = "minimum_mass=" + input
        setQuery(query)
        setInput("")
        } else if (select.value === "clase") {
        let query = "recclass=" + input.toUpperCase()
        setQuery(query)
        setInput("")
        }
        
    }

    if( !landings) return <div class="lds-ripple"><div></div><div></div></div>
    
    return (
        <>
        <div className='wrapper-landings'>
            <h2>Buscar asteroides</h2>
            <form className='buscar'>
                <input type= "text" value={input} onChange={(event) => setInput(event.target.value)}/>
                    
                    <select id="filter" name="filter" onSubmit={(event) => console.log(event.target.value)}>
                        <option value ="null" disabled>Filtrar por:</option>
                        <option value="masa">Peso</option>
                        <option value="clase">Clase</option>
                    </select>
                    
                    
                <button onClick={(e) => findLanding(e)}>Buscar</button>
            </form>

            <Link to={`/landing/list`} className='control-panel-link'>Panel de control</Link>
        </div>

    
        <Map landings={landings}/>
        
        </>
    )
}

export default Landing