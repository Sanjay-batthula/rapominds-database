import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Display = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/employees')
            .then(result => setUser(result.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Data from Database</h1>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr style={{ backgroundColor: 'blue', color: 'white' }}>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((item, index) => (
                        <tr key={item.id} className={index % 2 === 0 ? 'table-light' : 'table-secondary'}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Display;
