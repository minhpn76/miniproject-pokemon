import { Modal } from '../../../../components';
import { Dialog } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { formatUpperCaseFirstLetter } from '../../../../helpers/utils';

interface ModalConfirmProps {
  openModal: boolean;
  setModal: (open: boolean) => void;
  pokemonRelease?: string;
  handleReleasePokemon: (isAll: boolean, name: string) => void;
}

const ModalConfirm = ({ openModal, setModal, pokemonRelease = '', handleReleasePokemon }: ModalConfirmProps) => {
  return (
    <Modal openModal={openModal} onClose={() => setModal(false)}>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
              Release {formatUpperCaseFirstLetter(pokemonRelease)}
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                {pokemonRelease ? (
                  <>Are you sure you want to release this pokemon? It will be lost in the My pokemon</>
                ) : (
                  <>Are you sure you want to release ALL the pokemon? It will be lost in the My pokemon</>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => handleReleasePokemon(!pokemonRelease ? true : false, pokemonRelease)}
        >
          OK
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => setModal(false)}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
