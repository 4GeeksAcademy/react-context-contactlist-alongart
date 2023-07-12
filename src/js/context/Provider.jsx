import React, { createContext, useReducer } from "react";

import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from "./actions/contactListActions.js";

export const Context = createContext();

const reducer = (state, action) => {

    switch(action.type) {

        case ADD_CONTACT: {

            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    action.data
                ]
            }
        }
        
        case 'EDIT_CONTACT': {

            return {
                
            }
        }

        case 'REMOVE_CONTACT': {

            return {
                
            }
        }

    }

}

const initialState = {
    contacts: [
        {
            name: 'Alon Gartenhaus',
            email: 'email@gmail.com',
            phone: '123-456-7890',
            address: 'address',
        }
    ]
}

export default function Provider(props) {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {props.children}
        </Context.Provider>
    )
}