import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/restaurantPage/reviews.css';
import Stars from '../homePage/stars';

function Reviews({ reviews }) {
    return (
        <div className='review-container'>
            {reviews.map((review) => (
                <div className='shadow p-2 mb-3 d-flex position-relative justify-content-between' key={review.id}>
                    <div className='d-flex'>
                        <div className='circle me-3'>
                            {review.user.username.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <div className='fs-5 fw-bold'>{review.user.username}</div>
                            <div className='d-flex gap-2'>
                                <div> <span className='opacity-75'>Food</span> <span className='rate'>{review.rating.food}</span> </div>
                                &middot;
                                <div> <span className='opacity-75'>Service</span> <span className='rate'>{review.rating.service}</span> </div>
                                &middot;
                                <div> <span className='opacity-75'>Ambiance</span> <span className='rate'>{review.rating.ambiance}</span> </div>
                                &middot;
                                <div> <span className='opacity-75'>Overall</span> <span className='rate'>{review.rating.overall}</span> </div>
                            </div>
                            <p className='mt-1'>{review.comment}</p>
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <div><Stars starCount={review.starCount} customClass='review-stars' /></div>
                        <p className='date mt-1 opacity-75'>Dined on {review.datetime}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Reviews;
