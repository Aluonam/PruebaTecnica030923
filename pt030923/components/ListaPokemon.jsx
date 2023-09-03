import React, { useEffect, useState } from 'react'

const ListaPokemon = () => {


    const [datosAPI, setDatosAPI] = useState([])

    useEffect(() => {
        llamadaAPI()
    }, [])

    const llamadaAPI = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`;
        const llamada = await fetch(url);
        const datos = await llamada.json();
        console.log(datos.results)
    }
    

  return (
    <div>ListaPokemon</div>
  )
}

export default ListaPokemon