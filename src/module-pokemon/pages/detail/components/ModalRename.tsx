import { useEffect, useRef, useState } from 'react';
import { PokemonResponse } from '../../../types';
import { Modal } from '../../../../components';

import { IMAGE_URL } from '../../../constants';

interface ModalRenameProps {
  pokemonData: PokemonResponse;
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  savePokemon: (name: string) => void;
}

const ModalRename = ({ openModal, setOpenModal, savePokemon, pokemonData }: ModalRenameProps) => {
  const [nameOwner, setNameOwner] = useState<string>(pokemonData?.generalInformation.name);

  const handleSavePokemon = () => {
    savePokemon(nameOwner);
  };

  return (
    <Modal openModal={openModal} onClose={() => setOpenModal(false)}>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="flex flex-col items-center">
          <div className="lazyload-wrapper flex justify-center">
            <img src={`${IMAGE_URL}/${pokemonData.id}.png`} width="20%" />
          </div>
          <div className="flex justify-center mt-6">
            <input
              type="text"
              defaultValue={nameOwner}
              onChange={event => setNameOwner(event.target.value)}
              id="nameOwner"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nick name"
              required
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="button"
          onClick={handleSavePokemon}
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
        >
          OK
        </button>
      </div>
    </Modal>
  );
};

export default ModalRename;
