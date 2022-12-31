import { useRoutes } from 'react-router';
import { initRoutes } from './app-routes';
import "./styles/main.scss";
// import "antd/dist/antd.css";
import 'antd/dist/reset.css';
import './index.css'


function App() {
  return useRoutes(initRoutes());
}

export default App;