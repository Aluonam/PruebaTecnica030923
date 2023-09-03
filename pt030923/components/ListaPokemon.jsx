import React, { useEffect, useState } from 'react'
import BotonDetalles from './BotonDetalles'

const ListaPokemon = () => {


    const [datosAPI, setDatosAPI] = useState([])

    useEffect(() => {
        llamadaAPI()
    }, [])

    const llamadaAPI = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`;
        const llamada = await fetch(url);
        const datos = await llamada.json();
        setDatosAPI(datos.results)
    }
    
    const datosTablaPokemon = datosAPI.map((elementoActual)=>{
        return(
            <tr>
                <td>{elementoActual.name}</td>
                <td><BotonDetalles elementoActual={elementoActual}></BotonDetalles></td>
                
            </tr>
            
        )
    })

  return (
    <>

    {/* {datosTablaPokemon} */}
    <table>
    <thead>
        <tr>
          <th>Nombre Pokemon</th>
          <th>Boton detalles</th>
        </tr>
      </thead>
    <tbody>
          {datosTablaPokemon}
    </tbody>
    </table>
    </>
  )
}

export default ListaPokemon