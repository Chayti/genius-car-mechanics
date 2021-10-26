import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`https://ancient-reef-83687.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2 className="fw-bold text-success mt-4">Details of : {service.name}</h2>
            <h5 className="text-muted m-3">Service Id: {serviceId}</h5>
            <img src={service.img} alt={service.name} />
            <p className="w-25 mx-auto">{service.description}</p>
            <p className="w-25 mx-auto">Price: ${service.price}</p>
        </div>
    );
};

export default Booking;