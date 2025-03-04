import { useState } from "react";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation checks
        if (!name || !email || !password) {
            alert("All fields are required.");
            return;
        }

        axios.post('http://localhost:3001/register', { name, email, password })
        .then(result => console.log(result))
        .catch(err => console.error(err));
        navigate('/login'); // Navigate to login page
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
                <div className="mt-3 text-center">
                    <p>Already have an account?</p>
                    <Link to="/login" className="btn btn-secondary w-100">Login</Link> {/* Updated Link */}
                </div>
            </div>
        </div>
    );
}

export default Signup;