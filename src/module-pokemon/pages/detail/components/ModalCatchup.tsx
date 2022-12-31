import { useEffect, useRef, useState } from 'react';
import { IMAGE_URL } from '../../../constants';
import imgPokeCatchStop from '../../../images/poke-catch-stop.jpg';
import { PokemonResponse } from '../../../types';
import { Modal } from '../../../../components';

interface ModalCatchupProps {
  pokemonData: PokemonResponse;
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  pokeAdmin: any;
  setPokeAdmin: (value: any) => void;
  canCatchUp: boolean;
  resetState: () => void;
}

const ModalCatchup = ({
  pokemonData,
  openModal,
  setOpenModal,
  canCatchUp,
  pokeAdmin,
  resetState,
}: ModalCatchupProps) => {
  const onCloseCatchUp = () => {
    !canCatchUp && setOpenModal(false);
  };

  // useEffect(() => {
  //   if (canCatchUp === false) {
  //     resetState();
  //   }
  // }, [canCatchUp]);

  return (
    <Modal openModal={openModal} onClose={onCloseCatchUp}>
      <div className="bg-white">
        <div className="sm:flex sm:items-start relative flex">
          <img src={pokeAdmin} width="100%" />

          <img
            src={`${IMAGE_URL}/${pokemonData.id}.png`}
            style={{
              display: canCatchUp && pokeAdmin == imgPokeCatchStop ? 'block' : 'none',
              bottom: '29%',
              left: '44%',
            }}
            className="absolute"
            width="13%"
          />
          <div className="absolute text-center w-full bottom-0 ">
            <h2
              className="text-3xl font-bold tracking-tight text-rose-600 sm:text-4xl"
              style={{
                display: pokeAdmin == imgPokeCatchStop ? 'block' : 'none',
              }}
            >
              {canCatchUp ? 'Caught' : "Can't catch"}
            </h2>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCatchup;
