import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Succesful() {

    //get id from url (useparams)
    const { id } = useParams();
    const [message, setMessage] = useState("undefined");

    // fetch - url /api/profile (send all details)
    // const url = 'http://localhost:3500/api/users/profile/'
    const url = 'https://signup-backend-0d4p.onrender.com/api/users/profile/'
    useEffect(() => {
        fetch(url).then(async res => {
            if (res.ok) {
                setMessage(await res.json().message);
            } else {
                setMessage("Welcome")
            }
        }).catch(e => console.log(e))
    }, [id]);

    return (
        <div className="container my-5">
            <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
                <h1 className="text-body-emphasis">{message}</h1>
                <p className="col-lg-6 mx-auto mb-4">
                </p>
            </div>
        </div>
    )
}