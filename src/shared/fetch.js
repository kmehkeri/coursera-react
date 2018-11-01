export const handleResponse = (response) => {
    if (response.ok) {
        return response;
    } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
    }
}

export const handleError = (error) => {
    var errmess = new Error(error.message);
    throw errmess;
}