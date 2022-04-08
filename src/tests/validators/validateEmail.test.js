import { validateEmail } from '../../utils/validators/validateEmail';

test('Email not in format', () => {
    expect(validateEmail('email')).toBeFalsy();
    expect(validateEmail('email@email')).toBeFalsy();
    expect(validateEmail('email.com')).toBeFalsy();
    expect(validateEmail('')).toBeFalsy();
});
test('Email OK', () => {
    expect(validateEmail('email@email.com')).toBeTruthy();
}); 