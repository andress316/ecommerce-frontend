import React from 'react'

export default function Profile() {

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '40px', marginTop: '50px'  }}> 
        <h1>Hola bienvenid@!</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '40px'  }}> 
        <h2>Mensaje para la revisión del bootcamp:</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '40px', marginTop: '50px'  }}> 
        <p>Gracias por las clases de Brian y las asesorías de Yeison!... Lo logre, tarde pero seguro...</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '40px', marginTop: '50px'  }}> 
        <img src="https://i.ibb.co/Z6smqGG/Captura-de-pantalla-2023-02-27-a-la-s-18-42-00.png" width="full" height="300" alt="React Image" />
      </div>

    </>
  )
}