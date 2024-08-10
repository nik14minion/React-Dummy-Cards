import React from 'react';

const Card = ({ imageUrl, description, city }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={description} />
            <div className="card-body">
                <p>{description}</p>
                <p><strong>City:</strong> {city}</p>
            </div>
        </div>
    );
}

export default Card;