import 'bootstrap/dist/css/bootstrap.min.css';
import location from '../../assets/photos/location.png';
import Stars from './stars';
import '../../assets/styles/homePage/cards.css';
import { useNavigate } from 'react-router-dom';

function is_open({ openTime, closeTime }) {
    const now = new Date();
    const [nowHours, nowMinutes] = [now.getHours(), now.getMinutes()];

    const [openHours, openMinutes] = openTime.split(':').map(Number);
    const [closeHours, closeMinutes] = closeTime.split(':').map(Number);

    const nowInMinutes = nowHours * 60 + nowMinutes;
    const openInMinutes = openHours * 60 + openMinutes;
    const closeInMinutes = closeHours * 60 + closeMinutes;

    return nowInMinutes >= openInMinutes && nowInMinutes <= closeInMinutes;
}

function Cards({ restaurants }) {
    const navigate = useNavigate();

    return (
        <div className="container mt-5 mb-5">
            <p className='fs-4 text-dark'><b>Top Restaurants in Tagline</b></p>
            <div className="row gx-4">
                {restaurants.map((restaurant) => (
                    <div key={restaurant.id} className="col-md-3">
                        <div id='card' className="position-relative card shadow mb-5" onClick={() => navigate(`restaurant/${restaurant.id}`)}>
                            <Stars starCount={restaurant.starCount} customClass='home-stars' />
                            <img
                                id='restaurant-photo'
                                src={restaurant.image}
                                className="card-img-top"
                                alt={restaurant.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{restaurant.name}</h5>
                                <p className="card-text mb-1 opacity-75">
                                    {restaurant.totalReviews} reviews
                                </p>
                                <p className="card-text mb-1">
                                    {restaurant.type}
                                </p>
                                <p className="card-text">
                                    <img src={location} style={{ width: '25px' }} />
                                    <span>&ensp;</span>
                                    <span>{restaurant.address.city}</span>
                                </p>
                                <p className="card-text">
                                    {is_open({ openTime: restaurant.startTime, closeTime: restaurant.endTime }) ?
                                        <span>
                                            <span className='text-success'>Open </span>
                                            <strong>&middot;</strong>
                                            <span> Closed at {restaurant.endTime}</span>
                                        </span>
                                        : <span>
                                            <span className='text-danger'>Closed </span>
                                            <strong>&middot;</strong>
                                            <span> Opens at {restaurant.startTime}</span>
                                        </span>
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <p className='mt-5 text-center text-secondary fs-5 mb-5'>Thank you for using our services.</p>
        </div>
    );
}

export { Cards, is_open };
