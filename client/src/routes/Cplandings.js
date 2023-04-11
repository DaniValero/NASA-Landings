import React, {useState, useEffect} from 'react'
import '../components/global.css'
import List from '../components/commons/List'
import { v4 as uuidv4 } from "uuid";
import axios from 'axios'

const Cplandings = () => {

    const [landings, setLandings] = useState([])
    const [list, setList] = useState([])
    const [nombre, setNombre] = useState("")
    const [clase, setClase] = useState("")
    const [year, setYear] = useState("")
    const [masa, setMasa] = useState("")
    const [latitud, setLatitud] = useState("")
    const [longitud, setLongitud] = useState("")

    const [newPost, setNewPost] = useState({})

    const getData = async () =>{
        const resp = await fetch(`http://localhost:3000/api/astronomy/landings`);
        const data = await resp.json();
        setLandings(data)
    }

    useEffect(() => {getData()}, [newPost])

    const showLandings = () => {
        setList(landings)
    }

    const handleForm = (e) => {
        e.preventDefault()

        setNewPost({
            id: uuidv4(),
            name: nombre,
            recclass: clase,
            mass: masa,
            year: year,
            geolocation: {
                latitude: latitud,
                longitude: longitud
            }
        })

        // Backend deployment on render no longer working
        // axios({
        //     method: 'post',
        //     url: `https://nasa-api-lsnw.onrender.com/api/astronomy/landings/create`,
        //     data: newPost
        // })
        // .then(function () {
        //     setLandings(newPost, ...landings)
        //     console.log(landings);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });

        axios
            .post("/create", newPost)
            .then((res) => {
            console.log(res);
            })
            .catch((err) => {
            console.log(err);
            });

    }

    const handleRemoveLanding = (landing) => {
        const list = landings.filter((item) => item !== landing)
        setList(list)
        setLandings(list)
    }

    if (landings.length === 0) return <div class="lds-ripple"><div></div><div></div></div>
    
    return (
        <>
        <div className='cp-wrapper'>
            <h2>Panel de Control de asteroides</h2>
            
            <form className='new-landing'>   
                <h5>Registrar un asteroide</h5> 
                <label>Nombre</label> <input type="text" id="landing-name" name="landing-name" onChange={(e) => setNombre(e.currentTarget.value)}/>
                <label>Clase</label> <input type="text" id="landing-class" name="landing-class" onChange={(e) => setClase(e.currentTarget.value)}/>
                <label>Año</label> <input type="text" id="landing-year" name="landing-year" onChange={(e) => setYear(e.currentTarget.value)}/>
                <label>Masa (en toneladas)</label> <input type="number" id="landing-mass" name="landing-mass" onChange={(e) => setMasa(e.currentTarget.value)}/>
                <label>Latitud</label> <input type="text" id="landing-latitude" name="landing-latitude" onChange={(e) => setLatitud(e.currentTarget.value)}/>
                <label>Longitud</label> <input type="text" id="landing-longitude" name="landing-longitude" onChange={(e) => setLongitud(e.currentTarget.value)}/>
                <button className='form-button' onSubmit={(e) => handleForm(e)}>Registrar</button>
            </form>

            <button className='button'onClick={() => showLandings()}>Mostrar todos los asteroides</button>
            <List landings={landings} list={list} onRemoveLanding={(landing) => handleRemoveLanding(landing)}/>
        </div>
        </>
    )
}

export default Cplandings
