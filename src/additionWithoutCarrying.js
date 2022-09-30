function solution(param1, param2) {
    let result = 0;
    let i = 1;
    while (param1 > 0 || param2 > 0) {
        result += (((param1 % 10) + (param2 % 10)) % 10) * i;
        param1 = Math.floor(param1 / 10);
        param2 = Math.floor(param2 / 10);
        i *= 10;
    }
    return result;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test additionWithoutCarrying

// alternative solution
