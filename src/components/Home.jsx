import React from 'react';
import { useSelector } from 'react-redux';
import './Home.css'; // CSS faylni import qilish

const Home = () => {
    const users = useSelector((state) => state.users);

    return (
        <div className="home-container">
            <h2 className="title">Registered Users</h2>
            <ul className="user-list">
                {users.map((user, index) => (
                    <li key={index} className="user-item">
                        <p>Email: {user.email}</p>
                        <p>Age: {user.age}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
