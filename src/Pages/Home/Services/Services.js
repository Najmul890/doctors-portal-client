import React from 'react';
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from './Service/Service';

const Services = () => {
    const services=[
        {
            id:101,
            name: "Fluoride Treatment",
            description: "Good Service",
            img:fluoride
        },
        {
            id:102,
            name: "Cavity Feeling",
            description: "Good Service",
            img:cavity
        },
        {
            id:103,
            name: "Teeth Whitening",
            description: "Good Service",
            img:whitening
        },
        
    ]
    return (
        <div className='my-28' >
            <h3 className='text-4xl text-accent text-center font-bold' >Services We Provide</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
                {
                    services.map(service=> <Service key={service.id} service={service} ></Service> )
                }
            </div>
        </div>
    );
};

export default Services;