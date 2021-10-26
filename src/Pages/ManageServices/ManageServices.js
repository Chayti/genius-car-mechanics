import React, { useEffect, useState } from "react";
import './ManageServices.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { Link } from "react-router-dom";

const ManageServices = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const handleDelete = (id, name) => {
        const url = `http://localhost:5000/services/${id}`
        // fetch(url, {
        //     method: "DELETE"
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.deletedCount) {
        //             alert(`Deleted ${name}`)
        //             const remaining = services.filter(service => service._id !== id)
        //             setServices(remaining)
        //         }
        //     })
        axios
            .delete(url)
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Deleted')
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                }
            })
    }

    return (
        <div>
            <h2>Manage Services</h2>
            {
                services.map(service => <div key={service._id}>

                    <div className="bg-info d-flex justify-content-between m-4 px-4 py-3 border-2 border-primary rounded-pill w-25 mx-auto">
                        <h5 className="fw-bold text" style={{ display: "inline" }}>{service.name}</h5>
                        <div>
                            <Link to={`/manageServices/${service._id}`}><button className="bg-info border-0"><FontAwesomeIcon className="update-btn text-success" icon={faUserEdit} /></button></Link>
                            <button className="bg-info border-0" onClick={() => handleDelete(service._id, service.name)}><FontAwesomeIcon className="delete-btn text-danger" icon={faTrash} /></button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default ManageServices;