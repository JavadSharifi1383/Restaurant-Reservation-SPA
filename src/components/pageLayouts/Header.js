import { Link, useNavigate } from 'react-router-dom';
import '../../assets/styles/pageLayouts/header.css';
import logo from '../../assets/photos/restaurantLogo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({ name }) {
    const navigate = useNavigate();

    return (
        <div className="container-fluid bg-white sticky-top d-flex justify-content-between align-items-center shadow" style={{ height: '8vh' }}>
            <div>
                <img
                    id='logo-image'
                    onClick={() => navigate('/')}
                    className='ms-5'
                    src={logo}
                    alt="Restaurant Logo"
                />
                <span className='me-4 text-danger'>Reserve Table From Anywhere!</span>
            </div>
            <div>
                <span>Welcome, {name}!</span>
                <Link to='/customer'>
                    <button className="btn btn-danger ms-4 me-5">My Reservation</button>
                </Link>
            </div>
        </div>
    );
}

export default Header;
