import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';
import { contactListActions } from "../context/actions/contactListActions.js";



import { Context } from "../context/Provider.jsx";


export default function ContactListPage( { formValues }) {

    const { state, dispatch } = useContext(Context);
    
    const editContactHandler = () => {
        const contactData = { ...formValues };
        dispatch(contactListActions.EDIT_CONTACT(contactData));
    }

    const removeContactHandler = () => {

    }

    return (
        <>
        <div className="container">
            <h1>Contact list Page</h1>
            
            
            {state.contacts.map((contact, index) => (
                <div className="contact row" key={index}>
                    <div className="contactDetails col-10">
                        <p>{contact.name}</p>
                        <p>{contact.email}</p>
                        <p>{contact.phone}</p>
                        <p>{contact.address}</p>
                    </div>
                    <div className="contactActions col-2">
                        <FontAwesomeIcon icon={faPen} className="editContact" onClick={editContactHandler}/>
                        <FontAwesomeIcon icon={faTrashCan} className="removeContact" onClick={removeContactHandler}/>

                    </div>
                </div>
            ))}
        </div>
        </>
    )
}