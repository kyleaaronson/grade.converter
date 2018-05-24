// Calculates average grade 
// based on quiz, test, and final scores
const gradeAverage = (quiz, test, final) => {
	return quiz * 0.2 + test * 0.3 + final * 0.5;
};

if (0<= gradeAverage < 60) {
	console.log("The students grade average is " + grade + "they will recieve a F in the class")
} else if (60 <= gradeAverage < 70) {
	console.log("The students grade average is " + grade + "they will recieve a D in the class")
} else if (70 <= gradeAverage < 80) {
	console.log("The students grade average is " + grade + "they will recieve a C in the class")
} else if (80 <= gradeAverage < 90) {
	console.log("The students grade average is " + grade + "they will recieve a B in the class")
} else (90 <= gradeAverage < 100) {
	console.log("The students grade average is " + grade + "they will recieve a A in the class")
};

module.exports ={
	gradeAverage
};





