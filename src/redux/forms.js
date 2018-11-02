import { createForms } from 'react-redux-form';
import { baseUrl } from '../shared/env';
import { handleResponse, handleError } from '../shared/fetch';

const initialFeedback = {
    firstname: '',
    lastname: '',
    tel: '',
    email: '',
    agree: false,
    contactType: 'Tel',
    message: ''
}

export const forms = createForms({ feedback: initialFeedback })

// Thunk actions
export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {
    const newFeedback = { firstname, lastname, telnum, email, agree, contactType, message }
    return fetch(baseUrl + '/feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin'
    })
        .then(handleResponse, handleError)
        .then(response => response.json())
        .then(feedback => alert("Your feedback was successfully submitted: " + JSON.stringify(feedback)))
        .catch(error => alert("Error submitting feedback: " + error.message));
}
