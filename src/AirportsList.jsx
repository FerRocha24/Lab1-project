import airports from './assets/airports.js'

function AirportsList() {
    return (
      <div style={{ textAlign: 'left' }}>
        <h2 style={{ textAlign: 'left' }}>Lista de Aeropuertos</h2>
        <ul style={{ 
          paddingLeft: 0, 
          margin: 0, 
          textAlign: 'left',
          listStyle: 'none'
        }}>
          {airports.map(a => (
            <li key={a.id} style={{ textAlign: 'left' }}>
              {a.nombre} - {a.localizacion.ciudad}, {a.localizacion.pais}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default AirportsList
