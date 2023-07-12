
export const ADD_CONTACT = 'ADD_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';

export const contactListActions = {

    ADD_CONTACT: (data) => ({
        type: ADD_CONTACT,
        data
    }),
    
    EDIT_CONTACT: (data) => ({
        type: EDIT_CONTACT,
        data
    }),

    REMOVE_CONTACT: (data) => ({
        type: EDIT_CONTACT,
        data
    })

}