import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { makeAnimate } from '../../module-pokemon/services/redux';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../module-pokemon/constants';
import SearchInput from '../SearchInput';
import { useSearchParameters } from '../../hooks';

const Header = () => {
  const header = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const { handleSearchTextChange, searchText } = useSearchParameters();

  const handleScroll = (offset: any) => {
    if (offset > 10 || offset > 10) {
      header?.current?.classList.add('active');
    } else {
      header?.current?.classList.remove('active');
    }

    if ((document.body.scrollTop > 200 && document.body.scrollTop < 1000) || (offset > 200 && offset < 1000)) {
      dispatch(makeAnimate(true));
    } else {
      dispatch(makeAnimate(false));
    }
  };

  useEffect(() => {
    const onScroll = () => handleScroll(window.pageYOffset);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={header} className="fixed top-0 left-0 right-0 z-40 nav-smooth text-white">
      <div className="mx-8">
        <div id="header" className="flex relative mx-auto py-4 px-5 shadow-xl width_1300 bg_landing">
          <div className="font-inter font-medium mr-6 ml-4 cursor-pointer self-center">
            <NavLink to="/">
              <img src="../assets/img/logo.png" className="" width={70} alt="logo" />
            </NavLink>
          </div>

          <div className="flex flex-grow flex-row-reverse items-center">
            <NavLink
              to={`/${ROUTES.MY_POKEMON}`}
              className="bg-blue-2 text-white font-inter sign_up_btn font-medium text-base cursor-pointer rounded-full py-2 px-6 dashboard_tour"
            >
              My Pokemon
            </NavLink>
            {/* <SearchInput searchText={searchText} handleChangeText={handleSearchTextChange} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
