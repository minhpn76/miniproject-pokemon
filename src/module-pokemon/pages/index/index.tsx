import { useDispatch } from "react-redux"
import { Introduction, CardItem } from "./components/"
import { useEffect } from "react"
import { getListPokemon } from "../../services/redux"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store";
import { PokemonListResponse } from "../../types"
import { NotFound } from '../../../components'

const PokemonList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getListPokemon({
      pageNumber: 1,
      search: ''
    }))
  }, [])

  const { listPokemonData } = useSelector((state: RootState) => ({
    listPokemonData: state.pokemon.data.listPokemonData
  }))

  return (
    <>
      <Introduction />
      <div
        className="dark-space mx-auto p-0"
      >
        <div className="width_1300 mx-auto dark-space-black py-16 bg-blue-2 rounded-xl">
          <div className="flex flex-col justify-center content-center lg:grid lg:grid-cols-3 lg:gap-8 lg:mx-20 mt-12 font-semibold">
            {
              listPokemonData?.totalRecords ? listPokemonData?.data.map((item: PokemonListResponse) => (
                <CardItem data={item} />
              )) : <NotFound />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonList