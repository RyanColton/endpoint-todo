import { getTodoBGColor } from "@/app/utils/getTodoBGColor";

describe('getIsBGColorTest', () => {
    test('will return default class if not overdue and not complete', () => {
        expect(getTodoBGColor(false, false)).toBe('bg-todo-base');
    });
    test('will return overdue background if overdue', () => {
        expect(getTodoBGColor(false, true)).toBe('bg-todo-overdue');
    });
    test('will return complete background if complete', () => {
        expect(getTodoBGColor(true, false)).toBe('bg-todo-complete');
    });
    test('will return complete background if complete and past due date', () => {
        expect(getTodoBGColor(true, true)).toBe('bg-todo-complete');
    });
});