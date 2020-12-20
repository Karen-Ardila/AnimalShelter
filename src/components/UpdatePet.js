import React, { useEffect, useState } from "react";
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import { prettyDOM } from "@testing-library/react";

const UpdatePet = ({ id }) => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [skillOne, setSkillOne] = useState('')
    const [skillTwo, setSkillTwo] = useState('')
    const [skillThree, setSkillThree] = useState('')

    const [error, setError] = useState({})

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/pets/${id}`)
            .then(pet => {
                console.log(pet)
                setName(pet.data.name);
                setType(pet.data.type);
                setDescription(pet.data.description);
                pet.data.skills.forEach((skill, i) => {
                    if (i === 0) setSkillOne(skill)
                    if (i === 1) setSkillTwo(skill)
                    if (i === 2) setSkillThree(skill)
                });
            });
    }, [id])

    const updatePet = e => {
        e.preventDefault();
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/pets/${id}`, {
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

    return (
        <div>
            <h2>Edit {name}</h2>
            <Link to="/" className="right-link"> Back home </Link>
            <form onSubmit={updatePet}>
                <div className="content">
                    <div className="content-column">
                        <label htmlFor="name">Pet name:</label>
                        <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} value={name} />
                        {error?.name ? <p className="error-text">{error.name.message}</p> : null}
                        <label htmlFor="type">Pet type:</label>
                        <input type="text" name="type" id="type" onChange={e => setType(e.target.value)} value={type} />
                        {error?.type ? <p className="error-text">{error.type.message}</p> : null}
                        <label htmlFor="description">Pet description:</label>
                        <input type="text" name="description" id="description" onChange={e => setDescription(e.target.value)} value={description} />
                        {error?.description ? <p className="error-text">{error.description.message}</p> : null}
                        <input type="submit" value="Update Pet" className="submit-btn" />
                    </div>
                    <div className="content-column">
                        <p>Skills (optional)</p>
                        <label htmlFor="skillone">Skill 1:</label>
                        <input type="text" name="skillone" id="skillone" onChange={e => setSkillOne(e.target.value)} value={skillOne} />
                        <label htmlFor="skilltwo">Skill 2:</label>
                        <input type="text" name="skilltwo" id="skilltwo" onChange={e => setSkillTwo(e.target.value)} value={skillTwo} />
                        <label htmlFor="skillthree">Skill 3:</label>
                        <input type="text" name="skillthree" id="skillthree" onChange={e => setSkillThree(e.target.value)} value={skillThree} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdatePet;