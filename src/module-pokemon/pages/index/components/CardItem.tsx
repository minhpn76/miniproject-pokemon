import { IMAGE_URL } from "../../../constants"
import { PokemonListResponse } from "../../../types"

interface CardItemProps {
  data: PokemonListResponse
}

const CardItem = ({ data }: CardItemProps) => {

  return (
    <div className="mx-5 lg:mx-0">
      <div className="p-2 border rounded-lg shadow-xl cursor-pointer bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-green-500 hover:to-yellow-400 group" title="Bulbasaur (#1)">

        <div className="flex justify-between items-center px-4 font-bold font-oswald">
          <div>
            <p className="">{data.name.toUpperCase()}</p>
            {/* <div className="font-sans font-light h-12">Seed Pokémon</div> */}
          </div>
          <div className="flex justify-center items-center rounded-full border w-11 h-11 shadow-md shadow-gray-100">{`#${data.id}`}</div>
        </div>

        <div className="drop-shadow-lg border rounded-full p-5 type-grass">
          <div className="h-full group-hover:scale-125 ease-in-out duration-200 flex items-center">
            <div className="lazyload-wrapper flex">
              <img src={`${IMAGE_URL}/${data.id}.png`} alt="" />
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center items-start gap-1 pt-2">
          <div className="flex justify-center items-center rounded-full border w-11 h-11   type-grass" >
            <div className="h-full w-full">
              <div className="lazyload-wrapper ">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="" />
              </div>
            </div>
          </div>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="rotate-[30deg]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '1.88rem' }}>
            <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg><div className="flex justify-center items-center rounded-full border w-11 h-11  " style={{ marginTop: "0.5rem" }}><div className="h-full w-full"><div className="lazyload-wrapper ">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="" /></div></div></div><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="rotate-[30deg]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '0.94rem' }}>
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
          <div className="flex justify-center items-center rounded-full border w-11 h-11  ">
            <div className="h-full w-full">
              <div className="lazyload-wrapper ">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt="" />
              </div>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default CardItem