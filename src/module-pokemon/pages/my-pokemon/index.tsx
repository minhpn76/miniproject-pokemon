import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { IMAGE_URL, ROUTES } from '../../constants';
import { useNavigate, useParams } from 'react-router';
import { NotFound } from '../../../components';
import { releasePokemon } from '../../services/redux';
import { useState } from 'react';
import ModalConfirm from './components/ModalConfirm';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useSearchParams } from 'react-router-dom';

const MyPokemon = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const releasePokemonAllParam = searchParams.get('releaseAll');

  const [openModal, setOpenModal] = useState(false);
  const [pokemonRelease, setPokemonRelease] = useState<string>();

  const { pokemonCaught } = useSelector((state: RootState) => ({
    pokemonCaught: state?.pokemon?.data.pokemonCaught,
  }));

  const navigateDetail = (name: string) => {
    navigate(`/${ROUTES.DETAIL}/${name}`);
  };

  const handleReleasePokemon = (isAll = false, pokeName: string) => {
    dispatch(releasePokemon({ isAll: isAll, name: pokeName }));
    setOpenModal(false);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                {pokemonCaught && pokemonCaught.length > 0 ? (
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          #
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left"></th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left"></th>
                        {releasePokemonAllParam && (
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            <button
                              onClick={() => {
                                setOpenModal(true);
                              }}
                              className="flex items-center justify-center border border-transparent rounded-md bg-rose-600 p-2 smS:p-[3px] text-base font-medium text-white hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                          </th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {pokemonCaught.map((item, idx) => (
                        <tr className="border-b cursor-pointer" key={JSON.stringify(item)}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{idx + 1}</td>
                          <td
                            className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap w-[20%] smS:w-full"
                            onClick={() => navigateDetail(item.generalInformation.name)}
                          >
                            <div className="lazyload-wrapper flex">
                              <LazyLoadImage
                                src={`${IMAGE_URL}/${item.id}.png`}
                                alt={`${item.generalInformation.name}`}
                              />
                            </div>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="font-sans font-light ">{item.generalInformation.name}</div>
                              <p className="font-bold font-oswald text-xl">{item.nameOwner}</p>
                            </div>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <button
                              onClick={() => {
                                setOpenModal(true);
                                setPokemonRelease(item.generalInformation.name);
                              }}
                              className="flex items-center justify-center border border-transparent rounded-md bg-rose-600 p-2 smS:p-[3px] text-base font-medium text-white hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <NotFound />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalConfirm
        openModal={openModal}
        setModal={setOpenModal}
        pokemonRelease={pokemonRelease}
        handleReleasePokemon={handleReleasePokemon}
      />
    </div>
  );
};

export default MyPokemon;
