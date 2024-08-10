import React, { useState, useEffect } from 'react';
import Card from './card';

const CardComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://makemytrip-backend-w2d2.onrender.com/cities');
            if (!response.ok) {
                throw new Error('Error');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div className="main">
            {data.map(item => (
                <Card
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    city={item.city}
                    imageUrl={item.image}
                />
            ))}
        </div>
    );
}

export default CardComponent;

