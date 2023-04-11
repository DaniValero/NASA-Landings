import React from 'react'
import './global.css'

export default function Card({neas}) {

  return (
    <div className='card-container'>
        {neas.map((item) => (
            <div key={item.id} className="neas">

                <h3>{item.designation}</h3>
                <ul key={item.designation}>
                    <li>Fecha: {item.discovery_date}</li>
                    <li>Órbita: {item.orbit_class}</li>
                    <li>Pha: {item.pha}</li>
                </ul>

            </div>

        ))}
    </div>
    
  )
}
