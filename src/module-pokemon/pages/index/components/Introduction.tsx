import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

const Introduction = () => {
  const { isAnimate } = useSelector((state: RootState) => ({
    isAnimate: state.pokemon.data.isAnimate,
  }));

  return (
    <div id="about" className={`duration-700  ${!isAnimate ? 'opacity-100' : 'opacity-25'}`}>
      <div className="flex flex-col relative text-center mx-auto w-full width_840 px-6 py-4 mt-5">
        <h1 className="w-760 text-8xl smS:text-[4rem] font-bold my-12 heading_gradient self-center leading-100">
          The World Pokemon's
        </h1>
      </div>
    </div>
  );
};

export default Introduction;
