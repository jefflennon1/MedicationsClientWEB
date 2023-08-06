import './styles/NotFound.css';
import image from '../layout/assets/not-found.png';
import Navbar from '../layout/Navbar';

export function NotFoundPage() {
    return (
        <>
            <Navbar />
            <div className='containerTomada'>
                <img src={image} className='bounce-in-top' />
                <h1 className='focus-in-expand' >Page requested was not found</h1>
            </div>
        </>
    )
}