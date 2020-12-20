import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Details = ({ id }) => {
    const [pet, setPet] = useState({});

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/pets/${id}`)
            .then(res => {
                setPet(res.data)
            });
    }, [id]);

    const removePet = e => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/pets/${id}`).then(res => {
            navigate("/");
        });
    };

    return (
        <div>
            <div className="header-flex">
                <h2>Details about: {pet.name}</h2>
                <button className="adopt-btn" onClick={removePet}>Adopt {pet.name}</button>
            </div>
            <Link to="/" className="right-link"> Back home </Link>
            <div className="content">
                <div className="content-column">
                    <p>Type: {pet.type}</p>
                    <p>Description: {pet.description}</p>
                    <p>Skills: {pet.skills}</p>
                </div>
            </div>
        </div>
    )
};
export default Details;