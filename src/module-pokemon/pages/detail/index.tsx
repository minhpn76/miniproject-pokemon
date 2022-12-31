import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { catchUpPokemon, getDetailPokemon } from '../../services/redux';
import { RootState } from '../../../redux/store';
import { ReduxStateType } from '../../../redux/types';
import { formatUpperCaseFirstLetter } from '../../../helpers/utils';
import { getEntitiesPokemonData } from '../../services';
import { IMAGE_URL } from '../../constants';
import ModalCatchup from './components/ModalCatchup';
import imgPokeThrow from '../../images/poke-throw.gif';
import imgPokeCatchStop from '../../images/poke-catch-stop.jpg';
import ModalRename from './components/ModalRename';
import { DataLoading } from '../../../components';

const PokemonDetail = () => {
  const { name: namePokemonParam } = useParams();

  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [pokeAdmin, setPokeAdmin] = useState(imgPokeThrow);
  const [canCatchUp, setCanCatchUp] = useState(false);

  const { pokemonData, isLoading } = useSelector((state: RootState) => ({
    pokemonData: state.pokemon.data.pokemonData,
    isLoading: [ReduxStateType.LOADING, ReduxStateType.INIT].includes(state.pokemon.status),
  }));

  const [openModalRename, setOpenModalRename] = useState<boolean>(false);

  useEffect(() => {
    if (namePokemonParam) {
      dispatch(getDetailPokemon(namePokemonParam));
    }
  }, [namePokemonParam]);

  const pokemonInformation = getEntitiesPokemonData(pokemonData);

  const savePokemon = (name: string) => {
    const payload = {
      ...pokemonData,
      nameOwner: name,
    };
    dispatch(catchUpPokemon(payload));
    setOpenModalRename(false);
  };

  const handleCatchUp = () => {
    setOpenModal(true);
    setCanCatchUp(false);
    setTimeout(() => {
      setPokeAdmin(imgPokeCatchStop);
      // setCanCatchUp(Math.random() <= 0.5);
      setCanCatchUp(true);
    }, 4000);
  };

  const resetState = () => {
    setCanCatchUp(false);
    setPokeAdmin(imgPokeThrow);
  };

  useEffect(() => {
    if (canCatchUp) {
      setTimeout(() => {
        setOpenModal(false);
        setOpenModalRename(true);
      }, 2000);
    }
  }, [canCatchUp]);

  return (
    <>
      <div className="bg-white py-24">
        <DataLoading isLoading={isLoading}>
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 px-4 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {formatUpperCaseFirstLetter(pokemonData.generalInformation.name)}
              </h2>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {pokemonInformation.map(feature => (
                  <div key={feature.name} className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                    {feature.description && <dd className="mt-2 text-lg text-gray-500">{feature.description}</dd>}
                    {feature.tags && (
                      <dt className={feature.name === 'Moves' ? '' : 'flex'}>
                        {feature.tags.map((i, idx) => (
                          <dd key={idx} className="mt-2 text-lg rounded-md bg-blue-2 text-white px-4 py-1 mr-3">
                            {i}
                          </dd>
                        ))}
                      </dt>
                    )}
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex flex-col items-center">
              <div className="grid flex justify-items-center">
                <div className="p-2 border rounded-lg shadow-xl cursor-pointer bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-green-500 hover:to-yellow-400 group">
                  <div className="h-full group-hover:scale-110 ease-in-out duration-200 flex items-center">
                    <div className="lazyload-wrapper flex">
                      <img src={`${IMAGE_URL}/${pokemonData.id}.png`} alt={`${pokemonData.generalInformation.name}`} />
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handleCatchUp}
                className="mt-10 w-2/4 flex items-center justify-center border border-transparent rounded-md bg-blue-2 py-3 px-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Catch Pokemon
              </button>
            </div>
          </div>
        </DataLoading>
      </div>

      {openModal && (
        <ModalCatchup
          key={JSON.stringify(pokemonData)}
          openModal={openModal}
          setOpenModal={setOpenModal}
          pokeAdmin={pokeAdmin}
          setPokeAdmin={setPokeAdmin}
          canCatchUp={canCatchUp}
          pokemonData={pokemonData}
          resetState={resetState}
        />
      )}
      {openModalRename && (
        <ModalRename
          key={JSON.stringify(pokemonData)}
          openModal={openModalRename}
          setOpenModal={setOpenModalRename}
          savePokemon={savePokemon}
          pokemonData={pokemonData}
        />
      )}
    </>
  );
};

export default PokemonDetail;
