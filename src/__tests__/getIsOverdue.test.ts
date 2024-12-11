import { getIsOverdue } from "../app/utils/getIsOverdue";

describe('getIsOverdue', () => {
    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date('2024-12-10'))
    })
    it('will return true if past current date', () => {
        expect(getIsOverdue('2024-03-21T13:30:00.000Z')).toBe(true);
    })
    it('will return false if in the future', () => {
        expect(getIsOverdue('2025-01-21T12:00:00.000Z')).toBe(false);
    })
    it('will return false if passed undefined', () => {
        expect(getIsOverdue(undefined)).toBe(false);
    })
});