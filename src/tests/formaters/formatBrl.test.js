import { formatBrl } from '../../utils/formaters/formatBrl';

test('Not number exception', () => {
    expect(formatBrl('123')).toEqual(('R$ 123,00'));
});
test('Null/undefined exception', () => {
    expect(formatBrl()).toEqual(('R$ -'));
    expect(formatBrl('')).toEqual(('R$ -'));
});
test('Formated', () => {
    expect(formatBrl(123)).toEqual(('R$ 123,00'));
}); 