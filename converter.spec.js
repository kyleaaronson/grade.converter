// smoke test
const gc = require('./converter');
const lc = require('./converter');

describe("smoke test", () => {
	it("can blow smoke",() => {
		expect(true).toBe(true);
	});
});

//test conversion of grade averages
describe("A grade average calculator", () => {

	it("can average multiple grades", () => {
		expect(gc.gradeAverage(0,0,0)).toBe(0);
		expect(gc.gradeAverage(60, 80, 90)).toBe(81);
		expect(gc.gradeAverage(50, 60, 80)).toBe(68);
	});
});

// test convert number to grade
describe("A letter grade converter", () => {

	it("can convert average grade to letter grade", () => {
		expect(lc.convertNumberToGrade(90)).toBe(A);
		expect(lc.convertNumberToGrade(84)).toBe(B);
	});
});