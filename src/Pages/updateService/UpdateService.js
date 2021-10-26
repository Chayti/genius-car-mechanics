import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from "axios";

const UpdateService = () => {
    const [service, setService] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const handleNameChange = e => {
        const updatedName = e.target.value
        const updatedService = { ...service }
        updatedService.name = updatedName
        setService(updatedService)
    }

    const handleDescriptionChange = e => {
        const updatedDescription = e.target.value
        const updatedService = { ...service }
        updatedService.description = updatedDescription
        setService(updatedService)
    }

    const handlePriceChange = e => {
        const updatedPrice = e.target.value
        const updatedService = { ...service }
        updatedService.price = updatedPrice
        setService(updatedService)
    }

    const handleImageChange = e => {
        const updatedImage = e.target.value
        const updatedService = { ...service }
        updatedService.img = updatedImage
        setService(updatedService)
    }


    // const onSubmit = data => {
    //     console.log(data);
    //     axios.post('http://localhost:5000/services', data)
    //         .then(res => {
    //             if (res.data.insertedId) {
    //                 alert('added successfully')
    //                 reset()
    //             }
    //         })
    // };

    const handleUpdateService = e => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully')
                    setService({})
                }
            })

        e.preventDefault()
    }

    return (
        <div>
            <h2 className="fw-bold text-success mt-4">Update</h2>
            <div className="update-service">
                <form onSubmit={handleUpdateService}>
                    <input className="m-3 p-2" onChange={handleNameChange} value={service.name || ''} placeholder="Service name" />

                    <textarea onChange={handleDescriptionChange} value={service.description || ''} className="m-3 p-2" placeholder="Description" />

                    <input onChange={handlePriceChange} value={service.price || ''} className="m-3 p-2" placeholder="Price" type="number" />

                    <input onChange={handleImageChange} value={service.img || ''} className="m-3 p-2" placeholder="Image URL" />

                    <button className="btn border-2 border-success bg-info rounded-pill">Update Service</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateService;