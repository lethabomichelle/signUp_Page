import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Succesful() {

    //get id from url (useparams)
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let message = "undefined";

    // fetch - url /api/profile (send all details)
    const url = 'http://localhost:3500/api/users/profile/'
    useEffect(() => {
        fetch(url).then(async res => {
            if (res.ok) {
                message = await res.json().message;
            } else {
                message = "not allowed"
            }
        }).catch(e => console.log(e))
    }, [id]);

    return (
        <div className="container my-5">
            <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
                <h1 className="text-body-emphasis">"Welcome"</h1>
                <p className="col-lg-6 mx-auto mb-4">
                </p>
            </div>
        </div>
    )
}