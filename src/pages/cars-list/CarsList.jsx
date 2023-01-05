import React from 'react';
import './CarsList.css';
import carsInfo from '../../components/CarsInfo';
import { Link } from 'react-router-dom';

const CarsList = () => {
    return (
        <section className="grid">
            {carsInfo.map((car) => {
                return (
                    <div className="grid-item" key={car.id}>
                        <p>{car.CarMake}</p>
                        <Link to={`/details/${car.id}`}>Read more</Link>
                    </div>
                );
            })}
        </section>
    );
};

export default CarsList;
