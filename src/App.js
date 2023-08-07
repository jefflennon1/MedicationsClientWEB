
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
