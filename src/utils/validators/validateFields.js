import { validateEmail } from "./validateEmail";

export const validateFields = (email, pass) => {

    if (email === '' || pass === '') {
        return false;
    } else {
        return (validateEmail(email) ? true : false);
    }
}