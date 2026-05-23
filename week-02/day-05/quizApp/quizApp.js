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

async function fetchQuiz() {
  let quiz = [];

  try {
    const url = "https://opentdb.com/api.php?amount=5&category=31&difficulty=easy&type=multiple"
    let response = await fetch(url);
    let data = await response.json()
    quiz = data.results;
    console.log(quiz);
  } catch (err) {
    console.log(err);
  }
}

fetchQuiz();

