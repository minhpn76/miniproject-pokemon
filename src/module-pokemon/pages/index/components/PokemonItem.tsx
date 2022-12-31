import { NavLink } from 'react-router-dom';
import { IMAGE_URL, ROUTES } from '../../../constants';
import { PokemonListResponse } from '../../../types';

interface PokemonItemProps {
  data: PokemonListResponse;
}

const PokemonItem = ({ data }: PokemonItemProps) => {
  return (
    <div className="mx-5 lg:mx-0">
      <div
        className="p-2 border rounded-lg shadow-xl cursor-pointer bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-green-500 hover:to-yellow-400 group"
        title={data.name}
      >
        <div className="flex justify-between items-center px-4 font-bold font-oswald">
          <div>
            <p className="">{data.name.toUpperCase()}</p>
          </div>
          <div className="flex justify-center items-center rounded-full border w-11 h-11 shadow-md shadow-gray-100">
            #0
          </div>
        </div>

        <div className="drop-shadow-lg border rounded-full p-5 type-grass">
          <div className="h-full group-hover:scale-125 ease-in-out duration-200 flex items-center">
            <div className="lazyload-wrapper flex">
              <NavLink to={`/${ROUTES.DETAIL}/${data.name}`}>
                <img src={`${IMAGE_URL}/${data.id}.png`} alt={`${data.name}`} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonItem;
