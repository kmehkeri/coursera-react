import { createForms } from 'react-redux-form';

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