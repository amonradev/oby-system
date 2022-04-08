import { validateFields } from "../../utils/validators/validateFields";

test('Not null fields', () => {
    expect(validateFields('', 'yes')).toBeFalsy();
    expect(validateFields('', '')).toBeFalsy();
});
test('All fields OK', () => {
    expect(validateFields('email@email.com', '123')).toBeTruthy();
});