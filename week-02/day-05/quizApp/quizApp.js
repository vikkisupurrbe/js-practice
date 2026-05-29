/*

Build a **JS quiz game** in the browser: 
[x] - fetch questions from Open Trivia API, 
[x] - show one at a time, 
[ ] - track score, 
[x] - timer per question, 
[x] - difficulty selector, 
[ ] - "play again" button. 

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
  if (level === "") {
    alert("Please select a difficulty level!")
    return;
  };

  try {
    url = `https://opentdb.com/api.php?amount=5&category=31&difficulty=${level}&type=multiple`
    let response = await fetch(url);
    let data = await response.json()
    return data.results;
  } catch (err) {
    console.log(err);
  }
}


const countdown = timer();

function timer() {
  let intervalID = 0;
  let counter = 10;
  let running = false;

  function elapsedTime() { return `${counter}` };

  function start(display, onExpire) {
    running = true;

    intervalID = setInterval(() => {
      counter -= 1;
      display.textContent = elapsedTime();
      if (counter < 0) {
        stop();
        if (onExpire) onExpire();
        // defensive guard for an optional callback, call when provided by the caller
      }
    }, 1000);
  }

  function stop() {
    clearInterval(intervalID);
    intervalID = 0;
    running = false;
    return elapsedTime();
  }

  function reset(display) {
    clearInterval(intervalID);
    intervalID = 0;
    running = false;
    counter = 10;
    if (display) display.textContent = "10";
  }

  return { elapsedTime, start, stop, reset }
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
    /*
    renderTrackers calls countdown.start(time) — that starts the first interval. Then showQuestion calls countdown.reset() then countdown.start(time, onExpire) — that starts a second interval. 
    
    Now two intervals are decrementing counter simultaneously, so it counts down twice as fast and hits 0 almost immediately.
    
    When onExpire fires, showQuestion calls countdown.reset() which sets counter back to 10 — but the display document.getElementById("time") still shows whatever the two racing intervals left it at.

    */
  }
}

let currentIndex = 0;
let questions = [];

function renderScore() {
// 0 when first rendered
// render at the end of each question
// only add 20 points if the answer is correct
}

function handleChoice(userAnswer) {
  console.log(userAnswer);
}

async function renderQuestion(level) {
  questions = await fetchQuiz(level);
  const container = document.getElementById("question-container");
  const timeDisplay = document.getElementById("time");

  if (!questions) return;
  currentIndex = 0;
  showQuestion(currentIndex);

  function showQuestion(index) {
    if (index >= questions.length) {
      // quiz over — show results
      return;
    }

    const { question, correct_answer, incorrect_answers } = questions[index];
    // insert the correct answer randomly to make an answers array
    const randomIndex = Math.floor(Math.random() * (incorrect_answers.length + 1));
    const answers = [...incorrect_answers];
    answers.splice(randomIndex, 0, correct_answer);
    container.innerHTML = `
      <h3 id="question">${question}</h3>
      <div id="options-container">
        <div class="option-body">
          <div>
            <input type="radio" class="radio-btn" onclick="handleChoice(${answers[0]})" id="option-a" name="choice" value="1">
            <label for="option-a">A</label>
          </div>
          <p class="option">${answers[0]}</p>
        </div>
        <div class="option-body">
          <div>
            <input type="radio" class="radio-btn" id="option-b" name="choice" value="1">
            <label for="option-b">B</label>
          </div>
          <p class="option">${answers[1]}</p>
        </div>
        <div class="option-body">
          <div>
            <input type="radio" class="radio-btn" id="option-c" name="choice" value="1">
            <label for="option-c">C</label>
          </div>
          <p class="option">${answers[2]}</p>
        </div>
        <div class="option-body">
          <div>
            <input type="radio" class="radio-btn" id="option-d" name="choice" value="1">
            <label for="option-d">D</label>
          </div>
          <p class="option">${answers[3]}</p>
        </div>
      </div>
    `;
    
    countdown.reset(timeDisplay);
    countdown.start(
      timeDisplay,
      () => {
        currentIndex++;
        showQuestion(currentIndex);
      }
    );
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
  renderQuestion(difficulty);
  renderTrackers();
})