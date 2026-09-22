import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/restaurantPage/information.css'
import { is_open } from '../homePage/Cards';
import location from '../../assets/photos/location.png';
import clock from '../../assets/photos/clock.png';
import comment from '../../assets/photos/comment.png';
import spoon from '../../assets/photos/spoon.png';

function Information({ id, restaurants }) {
    const restaurant = restaurants.find(restaurant => restaurant.id == id);
    return (
        <div className='info d-flex flex-column mb-4 mt-5'>
            <div className='photo d-flex flex-column rounded position-relative'>
                <img src={restaurant.image} className='restauravnt-image rounded-top' />
                <div className='d-flex justify-content-between align-items-center p-2'>
                    <strong className='fs-3'>{restaurant.name}</strong>
                    <span className='tag badge'>
                        {
                            is_open({ openTime: restaurant.startTime, closeTime: restaurant.endTime })
                                ?
                                <span className='text-success text-white p-2 px-3 bg-success rounded'>Open!</span>
                                :
                                <span className='text-danger text-white p-2 px-3 bg-danger rounded'>Closed!</span>
                        }
                    </span>
                </div>
            </div>

            <div className='mt-1 mb-2 d-flex justify-content-between'>
                <div>
                    <img src={clock} style={{ width: '20px' }} />
                    <span> From {restaurant.startTime} to {restaurant.endTime}</span>
                </div>
                <div>
                    <img src={comment} style={{ width: '30px' }} />
                    <span>{restaurant.totalReviews} Reviews</span>
                </div>
                <div>
                    <img src={spoon} style={{ width: '30px' }} />
                    <span>{restaurant.type}</span>
                </div>
            </div>

            <p className='opacity-75 mt-0'> <img src={location} style={{ width: '20px' }} /> {restaurant.address.country}, {restaurant.address.city}, {restaurant.address.street}</p>
            <p className='description'>The {restaurant.name} is a charming restaurant located in the vibrant city of {restaurant.address.city}
                , {restaurant.address.country}, on {restaurant.address.street}. Known for its quick service and delicious offerings
                , the restaurant operates from {restaurant.startTime} AM to {restaurant.endTime} PM, providing a perfect spot for breakfast, lunch, and
                dinner. With a cozy ambiance and a focus on customer satisfaction, The {restaurant.name} has garnered positive reviews
                , particularly for its welcoming atmosphere and friendly service. The restaurant features a modern and comfortable setting
                , ideal for casual dining with family and friends. Whether you're in the mood for a quick bite or a relaxed meal
                , The {restaurant.name} promises a delightful culinary experience in a warm and inviting environment.</p>
        </div>
    );
}


export default Information;