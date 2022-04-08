import { regexEmail } from "../../utils/validators/validateEmail";

test('Email not in format', () => {
    expect(regexEmail('email')).toBeFalsy();
    expect(regexEmail('email@email')).toBeFalsy();
    expect(regexEmail('email.com')).toBeFalsy();
    expect(regexEmail('')).toBeFalsy();
});
test('Email OK', () => {
    expect(regexEmail('email@email.com')).toBeTruthy();
}); 