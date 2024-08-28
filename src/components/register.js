import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myImage from './images/sideimage.jpeg';
import logo from './images/logo.png';
import glogo from './images/glogo.png';
import { useNavigate } from "react-router-dom";
import validator from 'validator'

export default function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');

    // Email Validation
    const validateEmail = () => {
        if (!validator.isEmail(email)) {
            setMessage('Invalid Email :(');
            return false;
        }
        return true;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!validateEmail())
            return;

        const user = { name, email, password }

        const url = 'http://localhost:3500/api/users/'
        // const url = 'https://signup-backend-0d4p.onrender.com/api/users/'
        return fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
            // credentials: 'include'
        }).then(async res => {
            const response = await res.json();
            console.log("res", res.cookies);
            navigate("/welcome");
        });

    }

    return (
        <div className="register">
            <Row>
                <Col className="form">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="details">
                        <div className="heading">
                            <h2>SIGN UP</h2>
                            <p>Create an account to get started.</p>
                        </div>
                        <button id="g-btn">
                            <img src={glogo} alt="google logo" />Continue With Google
                        </button>
                        <div className="separation">Or</div>
                        <form>
                            <input type="text" name="name" placeholder="Name" required value={name} onChange={(e) => setName(e.nativeEvent.target.value)} />
                            <input type="email" name="email" placeholder="Email" required onChange={(e) => setEmail(e.nativeEvent.target.value)} />
                            <span style={{ fontWeight: 'bold', color: 'red' }}>{message}</span>
                            <input type="password" name="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.nativeEvent.target.value)} />
                            <label>
                                <input type="checkbox" name="remember-me" /> Remember Me
                            </label>
                            <button type="submit" onClick={handleSubmit}>Register</button>
                        </form>
                        <p>Already have an account? <a href="/">Log in</a></p>
                    </div>
                </Col>
                <Col>
                    <div className="image">
                        <img src={myImage} alt="" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}