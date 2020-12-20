import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const Home = () => {

    const [pets, setPets] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/pets`)
            .then(res => setPets(res.data.pets.sort((a, b) => {
                if (a.type < b.type) return -1;
                if (a.type > b.type) return 1;
                return 0;
              })))
    }, [])

    return (
        <div>
            <h2>Pets looking for a home</h2>
            <Link to="/pets/new" className="right-link"> Add a new pet </Link>
            <table>
                <thead>
                    <tr className="table-head">
                        <td>Name</td>
                        <td>Type</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet, i) => <tr key={i} className={i % 2 === 0 ? 'table-row': 'table-row-odd'}>
                        <td>{pet.name}</td>
                        <td>{pet.type}</td>
                        <td><Link to={`/pets/${pet._id}`}>details</Link> | <Link to={`/pets/${pet._id}/edit`}>edit</Link></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default Home