import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/restaurantPage/rating.css';

import Stars from '../homePage/stars';

function Rating({ id, restaurants }) {
    const restaurant = restaurants.find(restaurant => restaurant.id == id);

    return (
        <div className='position-relative rating-box d-flex justify-content-between mb-4 mt-5 p-3 rounded pe-5'>
            <div>
                <span className='fs-5'> What {restaurant.totalReviews} people are saying</span>
                <div className='d-flex gap-3'>
                    <span><Stars starCount={restaurant.starCount} customClass="rating-stars" /></span>
                    &emsp;&emsp;&emsp;&emsp;&emsp;
                    <span className='pp opacity-75'>{restaurant.starCount} based on recent ratings</span>
                </div>
            </div>
            <div className='items d-flex'>
                <div className='d-flex flex-column gap-0'>
                    <span>Food</span>
                    <span className='text-center fw-bold fs-5'>{restaurant.averageRating.food}</span>
                </div>
                <div className='d-flex flex-column gap-0'>
                    <span>Service</span>
                    <span className='text-center fw-bold fs-5'>{restaurant.averageRating.service}</span>
                </div>
                <div className='d-flex flex-column gap-0'>
                    <span>Ambiance</span>
                    <span className='text-center fw-bold fs-5'>{restaurant.averageRating.ambiance}</span>
                </div>
                <div className='d-flex flex-column gap-0'>
                    <span>Overall</span>
                    <span className='text-center fw-bold fs-5'>{restaurant.averageRating.overall}</span>
                </div>
            </div>
        </div>
    );
}

export default Rating;