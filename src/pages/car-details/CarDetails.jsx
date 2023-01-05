import React from 'react';
import './CarDetails.css';
import carsInfo from '../../components/CarsInfo';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
    const params = useParams();
    return (
        <section>
            <div className="details">
                <h2>{carsInfo[params.id - 1].CarMake}</h2>
                <h2>{carsInfo[params.id - 1].carModel}</h2>
                <h2>{carsInfo[params.id - 1].CarYear}</h2>
            </div>
        </section>
    );
};

export default CarDetails;
