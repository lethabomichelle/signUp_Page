import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myImage from './images/sideimage.jpeg';
import logo from './images/logo.png';
import glogo from './images/glogo.png';

export default function Register() {
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
                            <input type="text" name="name" placeholder="Name" required />
                            <input type="email" name="email" placeholder="Email" required />
                            <input type="password" name="password" placeholder="Password" required />
                            <label>
                                <input type="checkbox" name="remember-me" /> Remember Me
                            </label>
                            <button type="submit">Register</button>
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