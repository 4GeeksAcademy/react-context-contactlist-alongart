import { useContext, useState } from "react";
import React from "react";

import { Context } from "../context/Provider.jsx";
import { contactListActions } from "../context/actions/contactListActions.js";
import { useNavigate } from "react-router";

export default function EditContactPage() {

    const { state, dispatch } = useContext(Context);

    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
      });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: value
        }));
      };

    const onClickSaveHandler = () => {
        const contactData = { ...formValues };
        dispatch(contactListActions.ADD_CONTACT(contactData));
        alert("Contact added succesfully");
        navigate('/');
    };

    return (
        <>
        <div className="container ms-3 bg-light">
            <h1>edit contact</h1>

            <form>
                <div className="mb-3 col-6">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="name"
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                    
                </div>

                <div className="mb-3 col-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="phoneNumber" className="form-label">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3 col-6">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={formValues.address}
                        onChange={handleInputChange}
                    />
                </div>
            </form>

            <button className="btn btn-primary" onClick={onClickSaveHandler}>Add Contact</button>
        </div>
        </>

    )
}