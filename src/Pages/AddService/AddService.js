import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://ancient-reef-83687.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()
                }
            })
    };

    return (
        <div className="add-service">
            <h2>Please add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="m-3 p-2" placeholder="Service name" {...register("name", { required: true, maxLength: 20 })} />

                <textarea className="m-3 p-2" placeholder="Description" {...register("description")} />

                <input className="m-3 p-2" placeholder="Price" type="number" {...register("price")} />

                <input className="m-3 p-2" placeholder="Image URL" {...register("img")} />

                <button className="btn border-2 border-success bg-info rounded-pill">Add Service</button>
            </form>
        </div>
    );
}

export default AddService;