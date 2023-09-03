import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';

const BotonDetalles = ({elementoActual}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [nombrePokemon, setNombrePokemon] = useState([])

  useEffect(() => {
    llamadaAPI2()
  }, [])
  
  const llamadaAPI2 = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${elementoActual.name}`
    const llamada = await fetch(url);
    const datos = await llamada.json();
    setNombrePokemon(datos)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Detalles" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <img src={nombrePokemon.sprites?.front_default}></img>
        <p>{nombrePokemon.abilities?.[0].ability.name}</p>
      </Modal>
    </>
  );
};
export default BotonDetalles;