import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { IMAGE_URL, ROUTES } from '../../constants';
import { useNavigate } from 'react-router';

const MyPokemon = () => {
  const navigate = useNavigate();
  const { pokemonCaught } = useSelector((state: RootState) => ({
    pokemonCaught: state.pokemon.data.pokemonCaught,
  }));

  const navigateDetail = (name: string) => {
    navigate(`/${ROUTES.DETAIL}/${name}`);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        #
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left"></th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left"></th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {pokemonCaught.map((item, idx) => (
                      <tr
                        className="border-b cursor-pointer"
                        key={JSON.stringify(item)}
                        onClick={() => navigateDetail(item.generalInformation.name)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{idx + 1}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" width={'20%'}>
                          <div className="lazyload-wrapper flex">
                            <img src={`${IMAGE_URL}/${item.id}.png`} alt={`${item.generalInformation.name}`} />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="font-sans font-light ">{item.generalInformation.name}</div>
                            <p className="font-bold font-oswald text-xl">{item.nameOwner}</p>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button className="w-2/4 flex items-center justify-center border border-transparent rounded-md bg-rose-600 py-2 px-5 text-base font-medium text-white hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Release
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPokemon;
