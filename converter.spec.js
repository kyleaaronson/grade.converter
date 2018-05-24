// import code to be tested
const gc = require('./converter');

describe('An average grade calculator', () => {
	



	it("can calculate average grade", () => {
		expect(gc.gradeAverage(0, 0, 0)).toBe(0)
		expect(gc.gradeAverage(60, 80, 90)).toBe(81);
		expect(gc.gradeAverage(50, 60, 80)).toBe(68);
	});