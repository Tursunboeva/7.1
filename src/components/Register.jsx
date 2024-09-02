import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../store';
import './Register.css'; 
import { NavLink } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { email, password, age: parseInt(age) };
        dispatch(addUser(newUser));
        setEmail('');
        setPassword('');
        setAge('');
    };

    return (
        <div className="register-container">
            <h2 className="title">Register</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <button type="submit" className="submit-button"><NavLink to={"/"}>Register</NavLink></button>
            </form>
        </div>
    );
};

export default Register;
