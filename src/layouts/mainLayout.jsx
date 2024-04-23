import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer.jsx';
import Header from '../components/Header/Header.jsx';
import './Root.css'; 

const Root = () => {
  return (
    <div className='layout'>
      <Header />
      <div className='content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
