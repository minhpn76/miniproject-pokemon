import { Outlet } from 'react-router';
import { Header, Footer } from '../index'

const AppLayout = () => {

  return (
    <div id="main_page">
      <div
        className={'pt-24 bg_landing overflow-hidden'}
      >
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>

    </div>
  );
};

export default AppLayout;