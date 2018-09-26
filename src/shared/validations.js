export const required = (val) => val && val.length;
export const maxLength = (len) => (val) => !val || val.length <= len;
export const minLength = (len) => (val) => !val || val.length >= len;
export const isNumber = (val) => !val || !isNaN(Number(val));
export const isValidEmail = (val) => !val || /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/i.test(val);

export const messages = {
    required: 'Required',
    minLength: 'Too short',
    maxLength: 'Too long',
    isNumber: 'Must be a valid number',
    isValidEmail: 'Must be a valid email'
}