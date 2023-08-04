
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
      <p>Footer</p>
    </div>
  );
}

export default App;
