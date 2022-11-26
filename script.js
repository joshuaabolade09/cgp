// @ts-nocheck

/* ====================================================== 
                          Constants
   ====================================================== */

//Points of Each grade//
let A = 5;
let B = 4;
let C = 3;
let D = 2;
let E = 1;
let F = 0;

let $totalUnit = document.querySelector("#su");
let $totalScore = document.querySelector("#wem");
let $totalPoints = document.querySelector("#mee");

let $gpa = document.querySelector(".display-GPA");

/* ====================================================== 
                            State
   ====================================================== */

let cumulativeUnit = 0;
let cumulativePoints = 0;

/* ====================================================== 
              Interactions / Event Handlers
   ====================================================== */

/**
 * This function is called when the user enters data in a score <input />
 *
 * @param {KeyboardEvent} event
 */
function onScoreInserted(event) {
  /* This is the <input /> element that the user is currently interacting with */
  let $scoreInput = event.target;
  /* Find the table row this input is in */
  let $course = findParent($scoreInput, ".course");
  /* Within this row look for the current grade */
  let $gradeInput = $course.querySelector(".grade");

  let score = parseInt($scoreInput.value);

  /* score might be "Not a Number" (NaN) when the user inputs non-numeric characters */
  if (isNaN(score)) {
    $gradeInput.value = "";
  } else {
    $gradeInput.value = getGrade(score);
  }

  calculatePoint($course);
  calculateTotals();
  calculateGPA();
}

/**
 * This function is called when the user enters data in a unit <input />
 *
 * @param {KeyboardEvent} event
 */
function onUnitInserted(event) {
  let $unitInput = event.target;
  let $course = findParent($unitInput, ".course");

  calculatePoint($course);
  calculateTotals();
  calculateGPA();
}

/**
 * This function is called when the user clicks the "Next Semester" <button />
 *
 * @param {MouseEvent} event
 */
function onNextSemesterClicked(event) {
  /* Normally the button would submit the form, we don't want this */
  event.preventDefault();

  const totalUnit = parseInt($totalUnit.value);
  const totalPoints = parseInt($totalPoints.value);

  if (!isNaN(totalUnit)) {
    cumulativeUnit += totalUnit;
  }
  if (!isNaN(totalPoints)) {
    cumulativePoints += totalPoints;
  }

  resetInputs();
}

/* ====================================================== 
                         Effects
   ====================================================== */

/**
 * For the given course, calculate the points based on unit and grade
 * @param {Element} $course
 */
function calculatePoint($course) {
  let $unitInput = $course.querySelector(".course-unit");
  let $pointInput = $course.querySelector(".point");
  let $gradeInput = $course.querySelector(".grade");

  let unit = parseInt($unitInput.value);
  let grade = $gradeInput.value;

  if (isNaN(unit) || !["A", "B", "C", "D", "E", "F"].includes(grade)) {
    /* Invalid unit or grade... assume user has not finished entering data */
    $pointInput.value = "";
  } else {
    $pointInput.value = getPoints(unit, grade);
  }
}

/**
 * Sum up all units, scores and points of the courses in this semester
 * and write the totals to their <input /> elements
 */
function calculateTotals() {
  let totalUnit = 0;
  let totalScore = 0;
  let totalPoints = 0;

  /* Get a list of all course table rows */
  let $courses = document.querySelectorAll(".course");

  for (let i = 0; i < $courses.length; i++) {
    let $course = $courses[i];

    let $unitInput = $course.querySelector(".course-unit");
    let unit = parseInt($unitInput.value);
    if (!isNaN(unit)) {
      totalUnit += unit;
    }

    let $scoreInput = $course.querySelector(".score");
    let score = parseInt($scoreInput.value);
    if (!isNaN(score)) {
      totalScore += score;
    }

    let $pointInput = $course.querySelector(".point");
    let point = parseInt($pointInput.value);
    if (!isNaN(point)) {
      totalPoints += point;
    }
  }

  $totalUnit.value = totalUnit;
  $totalScore.value = totalScore;
  $totalPoints.value = totalPoints;
}

/**
 * This function calculates the GPA based on the input of the current and
 * previous semesters
 */
function calculateGPA() {
  const totalUnit = parseInt($totalUnit.value) + cumulativeUnit;
  const totalPoints = parseInt($totalPoints.value) + cumulativePoints;

  if (isNaN(totalPoints) || isNaN(totalUnit)) {
    $gpa.value = "";
  }

  $gpa.value = (totalPoints / totalUnit).toFixed(2);
}

/**
 * Reset all <input /> Elements on the page to their initial values
 * except for the GPA
 */
function resetInputs() {
  const $inputs = document.querySelectorAll("input");

  for (let i = 0; i < $inputs.length; i++) {
    /* Do not reset GPA */
    if ($inputs[i] === $gpa) {
      continue;
    }

    /* Reset totals to 0 */
    if (
      $inputs[i] === $totalUnit ||
      $inputs[i] === $totalScore ||
      $inputs[i] === $totalPoints
    ) {
      $inputs[i].value = "0";
      continue;
    }

    $inputs[i].value = "";
  }
}

/* ====================================================== 
                    Helper Functions
   ====================================================== */

/**
 * Get the grade (A-F) for a given score (0-100)
 *
 * @param {number} score
 * @returns {string}
 */
function getGrade(score) {
  // TODO: Score 40 is currently invalid
  // TODO: Score 50 is currently invalid

  if (score > 69 && score < 100) {
    return "A";
  } else if (score > 59 && score < 70) {
    return "B";
  } else if (score > 50 && score < 60) {
    return "C";
  } else if (score > 44 && score < 50) {
    return "D";
  } else if (score > 40 && score < 45) {
    return "E";
  } else if (score > 0 && score < 40) {
    return "F";
  }

  console.warn(`Invalid score ${score}`);
  return "";
}

/**
 * Get points for given unit and grade
 *
 * @param {number} unit
 * @param {string} grade
 * @return {number}
 */
function getPoints(unit, grade) {
  if (grade === "A") {
    return A * unit;
  } else if (grade === "B") {
    return B * unit;
  } else if (grade == "C") {
    return C * unit;
  } else if (grade === "D") {
    return D * unit;
  } else if (grade === "E") {
    return E * unit;
  } else if (grade === "F") {
    return F * unit;
  }

  return 0;
}

/**
 * Find the closest parent element that matches given selector
 *
 * Inspired by
 * @see https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/
 *
 * @param {Element} elem
 * @param {string} selector
 * @returns {Element | null}
 */
function findParent(elem, selector) {
  while (elem && elem !== document) {
    elem = elem.parentNode;

    if (elem.matches(selector)) {
      return elem;
    }
  }

  return null;
}
