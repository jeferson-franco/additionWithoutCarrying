const solution = require('./additionWithoutCarrying.js');

test('test 1', () => {
    expect(solution(456, 1734)).toBe(1180);
});

test('test 2', () => {
    expect(solution(99999, 0)).toBe(99999);
});

test('test 3', () => {
    expect(solution(999, 999)).toBe(888);
});

test('test 4', () => {
    expect(solution(0, 0)).toBe(0);
});

test('test 5', () => {
    expect(solution(54321, 54321)).toBe(8642);
});

test('test 6', () => {
    expect(solution(54321, 56789)).toBe(0);
});
