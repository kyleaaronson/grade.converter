// Calculates average grade 
// based on quiz, test, and final scores
const gradeAverage = (quiz, test, final) => {
	return (quiz * 0.2 + test * 0.3 + final * 0.5);
};

// converts grade average to letter grade
const convertNumbertoGrade = (n) => {
		if (n >= 90) {
			return "A";
	}	if (n >= 80) {
			return "B"
	}	if (n >= 70) {
			return "C"
	}	if (n >= 60) {
			return "D"
	}	return "F"
};

// outputs a message to student with grade avaerage and letter grade earned
const getMessage = (avg, grade) => {
	return "the student's average is " + avg + " They will recieve a " + grade + " in the class."
}

let avg = gradeAverage(98,77,84);
let g = convertNumbertoGrade(avg);
console.log(getMessage(avg, g));

module.exports = {
	gradeAverage
};

