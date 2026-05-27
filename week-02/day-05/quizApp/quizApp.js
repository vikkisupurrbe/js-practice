/*

Build a **JS quiz game** in the browser: 
 - fetch questions from Open Trivia API, 
 - show one at a time, 
 - track score, 
 - timer per question, 
 - difficulty selector, 
 - "play again" button. 

Uses async/await, DOM, ES6+.

Plan:
One page quiz app

Title: Welcome to AnimeQ

Settings: 
Number of questions: 5
Difficulty: [Easy] [Medium] [Hard]
Type: Multiple Choice

If scores exists, [Play Again]
If scores does not exist, [Play]

[Timer] (hidden until quiz starts)                        Your score: 0
                                                    (hidden until quiz starts)
[Question]
[Answer A]
[Answer B]
[Answer C]
[Answer D]

Sample response.json()

{
  response_code: 0,
  results: [
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Entertainment: Japanese Anime &amp; Manga',
      question: 'Which part from the JoJo&#039;s Bizarre Adventure manga is about a horse race across America?',
      correct_answer: 'Part 7: Steel Ball Run',
      incorrect_answers: 
        [
          'Part 6: Stone Ocean',
          'Part 3: Stardust Crusaders',
          'Part 5: Golden Wind'
        ]
    },
    ...  
  ]
}

*/

async function fetchQuiz(level) {
  let quiz = [];
  let url = "";
  level = difficulty

  if (level === "") {
    alert("Please select a difficulty level!")
    return;
  };

  try {
    url = `https://opentdb.com/api.php?amount=5&category=31&difficulty=${level}&type=multiple`
    let response = await fetch(url);
    let data = await response.json()
    quiz = data.results;
    console.log(quiz);
  } catch (err) {
    console.log(err);
  }
}

/*-------- Action --------*/
function renderTrackers() {
  if (difficulty) {
    const container = document.getElementById("tracker-container");
    container.innerHTML = `
      <div class="number-tracker">
        <h3>Time Left</h3>
        <div id="time">10</div>
      </div>
      <div class="number-tracker">
        <h3>Your Score</h3>
        <div id="score">0</div>
      </div>
    `
  }
}

/*-------- DOM Events --------*/
// Set difficulty
let difficulty = ""
let activeFilter = null;

document.getElementById("easy-btn").addEventListener("click", () => {
  if (activeFilter === "easy") {
    // clicking active filter again — reset to show all
    activeFilter = null;
    difficulty = "";
    document.getElementById("easy-btn").classList.remove("active-filter");
  } else {
    activeFilter = "easy";
    difficulty = "easy";
    document.getElementById("easy-btn").classList.add("active-filter");
    document.getElementById("medium-btn").classList.remove("active-filter");
    document.getElementById("hard-btn").classList.remove("active-filter");
  }
})
document.getElementById("medium-btn").addEventListener("click", () => {
  difficulty = "medium";
  if (activeFilter === "medium") {
    // clicking active filter again — reset to show all
    activeFilter = null;
    difficulty = "";
    document.getElementById("medium-btn").classList.remove("active-filter");
  } else {
    activeFilter = "medium";
    difficulty = "medium";
    document.getElementById("medium-btn").classList.add("active-filter");
    document.getElementById("easy-btn").classList.remove("active-filter");
    document.getElementById("hard-btn").classList.remove("active-filter");
  }
})
document.getElementById("hard-btn").addEventListener("click", () => {
  difficulty = "hard";
  if (activeFilter === "hard") {
    // clicking active filter again — reset to show all
    activeFilter = null;
    difficulty = "";
    document.getElementById("hard-btn").classList.remove("active-filter");
  } else {
    activeFilter = "hard";
    difficulty = "hard";
    document.getElementById("hard-btn").classList.add("active-filter");
    document.getElementById("easy-btn").classList.remove("active-filter");
    document.getElementById("medium-btn").classList.remove("active-filter");
  }
})

// Fetch quiz
document.getElementById("play-btn").addEventListener("click", () => {
  fetchQuiz();
  renderTrackers();
})