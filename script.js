// Get the elements from HTML
const form = document.querySelector(".form");
const courseUnits = form.querySelectorAll(".course-unit");
const courseUnitsArr = Array.from(courseUnits);
const grade = form.querySelectorAll(".grade");
const gradeArr = Array.from(grade);
const point = form.querySelectorAll(".point");
const pointEmptyArr = Array.from(point);
const displayGPA = document.querySelector(".display-GPA");
const button = document.querySelector(".submit");

// Assign these elements to nothing because we'll use their values later
let unitValues, grades;

// This function collects the unit values and returns the sum.
const unitToNumbers = function (arr) {
  unitValues = arr.map((unit) => (unit ? parseInt(+unit.value) : ""));
  console.log(unitValues);

  return unitValues.reduce((acc, courseunit) => acc + courseunit);
};

// This function converts the grades to numbers
const convertGradeToNumbers = function (arr) {
  if (!arr) return;
  const arrValue = arr.map((eachGrade) => eachGrade.value);

  grades = arrValue.map((grade) => {
    if (grade === "A" || grade === "a") return 5;
    if (grade === "B" || grade === "b") return 4;
    if (grade === "C" || grade === "c") return 3;
    if (grade === "D" || grade === "d") return 2;
    if (grade === "E" || grade === "e") return 1;
    if (grade === "F" || grade === "f") return 0;
    else return "";
  });
  console.log(grades);
};

// This function calculate the points and returns the total
const calculatePoint = function () {
  const pointArr = unitValues.map((unitValue, index) =>
    unitValue ? unitValue * grades[index] : ""
  );
  console.log(pointArr);
  console.log(pointEmptyArr);
  pointEmptyArr.forEach(
    (eachPoint, index) => (eachPoint.value = pointArr ? pointArr[index] : "")
  );

  return pointArr.reduce((acc, point) => acc + point);
};

// This function calculates the GPA
const calculateGPA = function (points, units) {
  return (points / units).toFixed(2);
};

// This is the event listener for the button.
button.addEventListener("click", function (e) {
  e.preventDefault();

  const unitTotalNo = unitToNumbers(courseUnitsArr);
  console.log(unitTotalNo);
  convertGradeToNumbers(gradeArr);
  const pointTotalNo = calculatePoint();
  console.log(pointTotalNo);

  const GPA = calculateGPA(pointTotalNo, unitTotalNo);
  displayGPA.value = GPA;
});
