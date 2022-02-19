// Create a Quiz class
class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }
  guess(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }
  isEnded() {
    return this.questionIndex === this.questions.length;
  }
}

// Create a question Class

class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

// Display Question
function displayQuestion() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // Show question
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = quiz.getQuestionIndex().text;

    


    // Show options
    let choices = quiz.getQuestionIndex().choices;
    choices.sort(() => Math.random() - 0.5);

    for (let i = 0; i < choices.length; i++) {
      let choiceElement = document.getElementById("choice" + i);
      choiceElement.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }


    showProgress();
  }
}

// Guess Function
function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    displayQuestion();
  };
}

// Show Quiz Progress
function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let progressElement = document.getElementById("progress");
  progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

// Show Score
function showScores() {
  let quizEndHTML = `
        <h1>Quiz Results</h1>
        <h2 class="score">You Scored:</h2>
        <h2 id="score">${quiz.score} of ${quiz.questions.length}</h2>
        <div class="quiz-repeat">
            <a href="index.html"> <i class="fa fa-refresh" aria-hidden="true"></i> Take Quiz Again</a>
        </div>
    `;
  let quizElement = document.getElementById("quiz");
  quizElement.innerHTML = quizEndHTML;
}

// Create Quiz Questions
let questions = [
  new Question(
    "Correct HTML tag for the largest heading is",
    ["&lt;head&gt;", "&lt;H6&gt;", "&lt;H1&gt;", "&lt;H&gt;"],
    "&lt;H1&gt;"
  ),
  new Question(
    "HTML is considered as _________ language.",
    [
      "Higher Level Language",
      "Markup Language",
      "Programming Language",
      "OOP Language",
    ],
    "Markup Language"
  ),
  new Question(
    "Hyper Text Markup Language stands For?",
    ["JQUERY", "XHTML", "CSS", "HTML"],
    "HTML"
  ),
  new Question(
    "Cascading Style sheet stands for?",
    ["HTML", "JQuery", "CSS", "XML"],
    "CSS"
  ),
  new Question(
    "HTML program is saved using ____________ extension.",
    ["hml", "html", "hnl", "htnl"],
    "html"
  ),
  new Question(
    "HTML is what type of language?",
    [
      "Scripting Language",
      "Markup Language",
      "Programming Language",
      "Network Protocol",
    ],
    "Markup Language"
  ),
  new Question(
    "Apart from &lt;b&gt; tag, what other tag makes text bold ?",
    ["&lt;fat&gt;", "&lt;strong&gt;", "&lt;emp&gt;", "&lt;black&gt;"],
    "&lt;strong&gt;"
  ),
  new Question(
    "What should be the first tag in any HTML document?",
    ["&lt;head&gt;", "&lt;html&gt;", "&lt;title&gt;", "&lt;document&gt;"],
    "&lt;html&gt;"
  ),
  new Question(
    "How can you make a bulleted list with numbers?",
    ["&lt;dl&gt;", "&lt;ol&gt;", "&lt;ul&gt;", "&lt;li&gt;"],
    "&lt;ul&gt;"
  ),
  new Question(
    "What tag is used to display a picture in a HTML page?",
    ["picture", "image", "img", "src"],
    "img"
  ),
  new Question(
    "HTML web pages can be read and rendered by _________",
    ["Compiler", "Server", "Web Browser", "Interpreter"],
    "Web Browser"
  ),
  new Question(
    "Tags and texts that are not directly displayed on the page are written in _____ section.",
    ["&lt;head&gt;", "&lt;title&gt;", "&lt;body&gt;", "&lt;html&gt;"],
    "&lt;head&gt;"
  ),
  new Question(
    "Which of the following attributes is used to add link to any element?",
    ["link", "href", "ref", "src"],
    "href"
  ),
  new Question(
    "Which of the following is the correct way of creating an hyperlink in HTML?",
    [
      "&lt;a www.kaytechit.com &gt; Kaytechit /a&gt;",
      "&lt;a href=“www.kaytechit.com” Kaytechit /a&gt",
      "&lt;a href= “www.kaytechit.com”&gt;Kaytechit &lt;/a&gt",
      "&lt;a link=“www.kaytechit.com” Kaytechit&gt; &lt;/a&gt",
    ],
    "&lt;a href= “www.kaytechit.com”&gt;Kaytechit &lt;/a&gt"
  ),
  new Question(
    "How can we write comment along with HTML code?",
    [
      "/* a comment */",
      "// a comment //",
      "&lt;! a comment --&gt;",
      "&lt;!-- a comment --&gt;",
    ],
    "&lt;!-- a comment --&gt;"
  ),
  new Question(
    "Which of the following attributes is used to open an hyperlink in new tab?",
    ["tab", "href", "target", "ref"],
    "target"
  ),
  new Question(
    "Which tag is used for creating a drop-down selection list?",
    ["&lt;select&gt;", "&lt;option&gt;", "&lt;dropdown&gt;", "&lt;list&gt;"],
    "&lt;option&gt;"
  ),
  new Question(
    "Which of the following is the correct way to add background color in HTML?",
    [
      "&lt;body color = “green”&gt;",
      "&lt;body bg-color = “green”&gt;",
      "&lt;body style = “background-color=green”&gt;",
      "&lt;body style = “background-color: green;”&gt;",
    ],
    "&lt;body style = “background-color: green;”&gt;"
  ),
  new Question(
    "Which tag is used to add an header in HTML5 table?",
    ["&lt;theader&gt;", "&lt;h1&gt;", "&lt;th&gt;", "&lt;header&gt;"],
    "&lt;th&gt;"
  ),
  new Question(
    "Which of the following elements can be used in HTML to create a table?",
    [
      "&lt;table&gt; , &lt;tbody&gt;, &lt;trow&gt;",
      "&lt;table&gt; , &lt;tb&gt; , &lt;trow&gt;",
      "&lt;table&gt; , &lt;tbody&gt; , &lt;tr&gt;",
      "All of the above",
    ],
    "&lt;table&gt; , &lt;tbody&gt; , &lt;tr&gt;"
  ),
  new Question(
    "Which among the following is correct HTML code for making a checkbox?",
    [
      "&lt;checkbox&gt;",
      "&lt;input type=\"checkbox\"&gt;",
      "&lt;check&gt;",
      "&lt;input type=\"check\"&gt;",
    ],
    "&lt;input type=\"checkbox\"&gt;"
  ),
  new Question(
    "What is the purpose of using div tags in HTML?",
    [
      "For creating Different styles.",
      "For creating different sections.",
      "For adding headings.",
      "For adding titles.",
    ],
    "For creating different sections."
  ),
  new Question(
    "Which is the correct Doctype?",
    [
      "&lt;!DOCTYPE /html&gt;",
      "&lt;!DOCTYPE html&gt;",
      "&lt;!DOCTYPE &lt;html&gt;",
      "&lt;DOCTYPE html&gt;",
    ],
    "&lt;!DOCTYPE html&gt;"
  ),
  new Question(
    "What is the purpose of HTML",
    [
      "To make a formatted document",
      "To make a webpage",
      "To edit photos",
      "To make a creative slide",
    ],
    "To make a webpage"
  ),
  new Question(
    "Google Chrome is an example of a what?",
    ["URL", "IP address", "Web browser", "metal"],
    "Web browser"
  ),
  new Question(
    "Which language is used to enhance a webpage, e.g. change background colour?",
    ["HTML", "CSS", "JavaScript", "SQL"],
    "CSS"
  ),
  new Question(
    "What is the internet?",
    [
      "A collection of webpages",
      "A global computer network",
      "A collection of websites",
      "A server on a network",
    ],
    "A global computer network"
  ),
  new Question(
    "Caption Tag in HTML ?",
    [
      "Is used to display the Title for table at the top",
      "Is used to display the Title for table at the bottom",
      "Both",
      "None",
    ],
    "Is used to display the Title for table at the top"
  ),
  new Question(
    "Which of the following is used increase the row height?",
    ["Cellspacing", "Cellpadding", "Row span", "Col span"],
    "Row span"
  ),
  new Question(
    "When creating a Web document, what format is used to express an image's height and width?",
    ["Pixels", "Centimeters", "Dots per inch", "Inches"],
    "Pixels"
  ),
];

questions.sort(() => Math.random() - 0.5);
let quiz = new Quiz(questions);


// Display Questions
displayQuestion();



// Add a count down
let time = 5;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountDown() {
  let quizTimer = setInterval(function () {
    if (quizTime <= 0) {
      clearInterval(quizTimer);
      showScores();
    } else {
      quizTime--;
      let sec = Math.floor(quizTime % 60);
      let min = Math.floor(quizTime / 60) % 60;
      counting.innerHTML = `TIME: ${min} : ${sec}`;
    }
  }, 1000);
}
startCountDown();
