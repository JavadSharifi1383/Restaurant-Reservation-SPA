import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/homePage/stars.css';

function Stars({ starCount, customClass = '', onStarClick }) {
    const totalStars = 5;

    const handleStarClick = (index) => {
        if (onStarClick) {
            onStarClick(index + 1);
        }
    };

    return (
        <div id='stars-container' className={`${customClass} stars-container d-flex p-2 position-absolute`}>
            {[...Array(totalStars)].map((_, index) => (
                <span
                    key={index}
                    className={`star-icon ${index < starCount ? 'fas fa-star' : 'far fa-star'}`}
                    style={{ color: 'red' }}
                    onClick={() => handleStarClick(index)}
                ></span>
            ))}
        </div>
    );
}

export default Stars;
