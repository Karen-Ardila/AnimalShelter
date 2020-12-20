import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from '@reach/router';


const CreatePet = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [skillOne, setSkillOne] = useState('')
    const [skillTwo, setSkillTwo] = useState('')
    const [skillThree, setSkillThree] = useState('')

    const [error, setError] = useState({})

    const addPet = e => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/pets`, {
            name,
            type,
            description,
            skills: [skillOne, skillTwo, skillThree]
        }).then(res => {
            navigate("/");
        }).catch(err => {
            setError(err.response.data.error.errors)
        });
    }

    return (<div>
        <h2>Know a pet needing a home?</h2>
        <Link to="/" className="right-link"> Back home </Link>
        <form onSubmit={addPet}>
            <div className="content">
                <div className="content-column">
                    <label htmlFor="name">Pet name:</label>
                    <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} />
                    {error?.name ? <p className="error-text">{error.name.message}</p> : null}
                    <label htmlFor="type">Pet type:</label>
                    <input type="text" name="type" id="type" onChange={e => setType(e.target.value)} />
                    {error?.type ? <p className="error-text">{error.type.message}</p> : null}
                    <label htmlFor="description">Pet description:</label>
                    <input type="text" name="description" id="description" onChange={e => setDescription(e.target.value)} />
                    {error?.description ? <p className="error-text">{error.description.message}</p> : null}
                    <input type="submit" value="Add Pet" className="submit-btn" />
                </div>
                <div className="content-column">
                    <p>Skills (optional)</p>
                    <label htmlFor="skillone">Skill 1:</label>
                    <input type="text" name="skillone" id="skillone" onChange={e => setSkillOne(e.target.value)} />
                    <label htmlFor="skilltwo">Skill 2:</label>
                    <input type="text" name="skilltwo" id="skilltwo" onChange={e => setSkillTwo(e.target.value)} />
                    <label htmlFor="skillthree">Skill 3:</label>
                    <input type="text" name="skillthree" id="skillthree" onChange={e => setSkillThree(e.target.value)} />
                </div>
            </div>
        </form>
    </div>
    );
};

export default CreatePet;