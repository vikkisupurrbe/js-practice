/* 

Build a student grade analyzer: array of scores → use map/filter/reduce to compute averages, find top students, filter failing grades.

*/

function gradeAnalyzer() {

  let scores;
  let students;

  // Initialization - sets the data, transform each student object into just their score
  function loadStudents(data) {
    students = data;
    scores = data.map(student => student.score);
  }

  // Transform each student object into just their score
  function studentScores() {
    return scores;
  }

  // Average score
  function average() {
    // sum up individual scores
    let sum = scores.reduce((sum, score) => sum + score, 0);

    // average
    let result = +(sum / scores.length).toFixed(2);
    return result;
  }

  // Top students, student score > 90
  function topStudents() {
    return students.filter(student => student.score > 90);
  }

  // Filter failing grades, student score < 70
  function removeFailing() {
    return scores.filter(score => score >= 70);
  }

  return { loadStudents, studentScores, average, topStudents, removeFailing };
}

const myGradeAnalyzer = gradeAnalyzer();
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Carol", score: 78 },
  { name: "Dio", score: 95 },
  { name: "Eddie", score: 63 },
  { name: "Frank", score: 88 },
  { name: "Greg", score: 71 }
];

// Test
myGradeAnalyzer.loadStudents(students);
console.log(myGradeAnalyzer.studentScores());
console.log(myGradeAnalyzer.average());
console.log(myGradeAnalyzer.topStudents());
console.log(myGradeAnalyzer.removeFailing());