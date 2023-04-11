import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './global.css'

const Map = ({landings}) => {

    const landing = landings.filter(landing => landing.geolocation)
    console.log(landing)
    
    return(
        <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {landing.map((item) => (
        <>
        <Marker key={item.id} position={[parseInt(item.geolocation.latitude, 10), parseInt(item.geolocation.longitude, 10)]}>
            <Popup key={item.id}> 
                Nombre: {item.name} <br/> Masa:{item.mass}
            </Popup>
        </Marker>
        </>
        ))}

        </MapContainer>

        
    )
}

export default Map

