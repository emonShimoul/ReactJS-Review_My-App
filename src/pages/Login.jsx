import React, { useState } from 'react';
import useAuth from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        login(name);
        navigate("/posts");
    }

    return (
        <form onSubmit={handleLogin} className="text-center mt-10">
            <input
                type="text"
                placeholder="Enter your name"
                className="border p-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button className="ml-2 bg-blue-500 text-white px-4 py-2">
                Login
            </button>
        </form>
    );
};

export default Login;