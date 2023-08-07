import './Error.css';
import image from '../../../assets/not-found.png';
import Navbar from '../../Navbars/Navbar';
import { Footer } from '../../Footer/Footer';

export function NotFoundPage() {
    return (
        <>
            <div className='fixed'>
                <Navbar />
            </div>
            <div className='containerTomada'>
                <img src={image} className='bounce-in-top' />
                <h1 className='focus-in-expand' >Page requested was not found</h1>
            </div>
            <Footer />
        </>
    )
}