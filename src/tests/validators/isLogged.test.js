import { isLogged } from "../../utils/validators/isLogged";

test('Not logged', () => {
    expect(isLogged('')).toBeFalsy();
    expect(isLogged(0)).toBeFalsy();
    expect(isLogged('0')).toBeFalsy();
    expect(isLogged(null)).toBeFalsy();
    expect(isLogged(undefined)).toBeFalsy();
});
test('Is logged', () => {
    expect(isLogged(1)).toBeTruthy();
}); 