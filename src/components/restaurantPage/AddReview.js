import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stars from '../homePage/stars';
import '../../assets/styles/restaurantPage/addReview.css';

function AddReview({ reviews, restaurants, id }) {
    const restaurant = restaurants.find(restaurant => restaurant.id == id);

    const [showModal, setShowModal] = useState(false);
    const [ratings, setRatings] = useState({
        food: 0,
        service: 0,
        ambiance: 0,
        overall: 0
    });
    const [comment, setComment] = useState('');

    const handleRatingChange = (category, rating) => {
        setRatings({ ...ratings, [category]: rating });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(false);
    };

    const handleCancel = () => {
        setRatings({
            food: 0,
            service: 0,
            ambiance: 0,
            overall: 0
        });
        setComment('');
        setShowModal(false);
    };

    const isButtonDisabled = !ratings.food || !ratings.service || !ratings.ambiance || !ratings.overall;

    return (
        <div>
            <div className='d-flex justify-content-between mb-4 mt-5 align-items-center'>
                <p className='my-0'>{reviews.length} Reviews</p>
                <button className='btn btn-danger px-4' onClick={() => setShowModal(true)}>
                    Add Review
                </button>
            </div>

            {showModal && (
                <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title fw-bold fs-4">Add Review for <span className='text-danger'>{restaurant.name}</span> </h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <p className='opacity-75'>Note: Reviews can only be made by diners who have eaten at this restaurant.</p>
                                <form onSubmit={handleSubmit}>
                                    {['food', 'service', 'ambiance', 'overall'].map((category, index) => (
                                        <div key={index} className="mb-3 d-flex justify-content-between align-items-center">
                                            <label className='fs-5'>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
                                            <Stars
                                                starCount={ratings[category]}
                                                customClass="modal-stars"
                                                onStarClick={(count) => handleRatingChange(category, count)}
                                            />
                                        </div>
                                    ))}
                                    <div className="mb-3">
                                        <label className='fs-5' htmlFor="comment">Comment</label>
                                        <textarea
                                            className="form-control mt-1"
                                            id="comment"
                                            rows="3"
                                            value={comment}
                                            placeholder='Hmm...'
                                            onChange={(e) => setComment(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <div className="d-flex flex-column gap-3">
                                        <button
                                            type="submit"
                                            className="btn ptn-danger text-white p-2"
                                            style={{ backgroundColor: isButtonDisabled ? '#6c757d' : '#dc3545', border: 'none', width: '100%' }}
                                            disabled={isButtonDisabled}
                                        >
                                            Submit Review
                                        </button>
                                        <button type="button" className="cancle btn p-2" onClick={handleCancel} style={{ width: '100%' }}>
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddReview;