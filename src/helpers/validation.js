
export const validation = (title, description, charactersLeft, date, duration, isPaidEvent, fee, email ) => {
    
    let formIsValid = true;
    let error = {
        titleError: '',
        descriptionError: '',
        dateError: '',
        feeError: '',
        emailError: '',
        urationError: '',
    };
    if (!title) {
        formIsValid = false;
        error.titleError = 'Cannot be empty.'
    }
    if (!description) {
        formIsValid = false;
        error.descriptionError = 'Cannot be empty.'
    }
    if (charactersLeft < 0) {
        formIsValid = false
        error.descriptionError = 'more than 140 characters!';
    }
    if (!date) {
        formIsValid = false;
        error.dateError = 'Date cannot be empty.'
    }
    if (duration) {
        let isNumber = /^\d+$/.test(duration);
        if (!isNumber) {
            formIsValid = false;
            error.durationError = 'Only digits please.'
        }
    }
    if (isPaidEvent && !fee) {
        formIsValid = false;
        error.feeError = 'Fee cannot be empty in a paid event.'
    }
    if (!email) {
        formIsValid = false;
        error.emailError = 'Email cannot be empty.'
    }
    if (email) {
        let lastAtPos = email.lastIndexOf('@');
        let lastDotPos = email.lastIndexOf('.');

        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
            formIsValid = false;
            error.emailError = 'Email is not valid.';
        }
    }

    return [ 
         error.titleError,
         error.descriptionError,
         error.dateError,
         error.feeError,
         error.emailError,
         error.durationError,
         formIsValid,
     ]
}