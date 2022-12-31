import { useDispatch } from 'react-redux';
import { Introduction, PokemonItem } from './components/';
import { useEffect, useState } from 'react';
import { getListPokemon } from '../../services/redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { PokemonListResponse } from '../../types';
import { NotFound, DataLoading, Pagination } from '../../../components';
import { ReduxStateType } from '../../../redux/types';
import { useSearchParameters } from '../../../hooks';

const PokemonList = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState<number>(0);
  const { debouncedSearchText, searchText } = useSearchParameters();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(
      getListPokemon({
        pageNumber: page,
        search: debouncedSearchText,
      })
    );
  }, [page, searchText]);

  const { listPokemonData, isLoading } = useSelector((state: RootState) => ({
    listPokemonData: state.pokemon.data.listPokemonData,
    isLoading: [ReduxStateType.LOADING, ReduxStateType.INIT].includes(state.pokemon.status),
  }));

  return (
    <>
      <Introduction />
      <div className="dark-space mx-auto p-0">
        <div className="width_1300 mx-auto dark-space-black py-16 bg-blue-2 rounded-xl">
          <DataLoading isLoading={isLoading}>
            <div className="flex flex-col justify-center content-center lg:grid lg:grid-cols-3 lg:gap-8 lg:mx-20 mt-12 font-semibold">
              {listPokemonData?.totalRecords ? (
                <>
                  {listPokemonData?.data.map((item: PokemonListResponse) => (
                    <PokemonItem data={item} />
                  ))}
                </>
              ) : (
                <NotFound />
              )}
            </div>
            <Pagination page={page} handleChangePage={setPage} />
          </DataLoading>
        </div>
      </div>
    </>
  );
};

export default PokemonList;
