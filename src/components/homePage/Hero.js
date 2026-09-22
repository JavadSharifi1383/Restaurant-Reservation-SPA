import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/homePage/hero.css';
import logo from '../../assets/photos/restaurantLogo.jpg';

function Background() {
    return (
        <div className="d-flex justify-content-end align-items-center background-container">
            <div className="text-center text-white logo-container">
                <img
                    src={logo}
                    alt="Restaurant Logo"
                    className="mb-2 rounded logo-image"
                />
                <p className="mt-3 welcome-text">Welcome!</p>
            </div>
        </div>
    );
}

export default Background;
