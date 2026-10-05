// ==========================================
// HTML5 DEVELOPMENT QUIZ
// ==========================================

const QUESTIONS_PER_CATEGORY = 5;
const QUIZ_TIME = 20;


// ==========================================
// QUESTION CLASS
// ==========================================

class Question {

    constructor(
        text,
        choices,
        answer,
        explanation = ""
    ) {

        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.explanation = explanation;
    }


    isCorrectAnswer(choice) {

        return choice === this.answer;
    }
}


// ==========================================
// QUIZ CLASS
// ==========================================

class Quiz {

    constructor(questions) {

        this.questions = questions;

        this.score = 0;

        this.questionIndex = 0;

        this.userAnswers = [];
    }


    getCurrentQuestion() {

        return this.questions[
            this.questionIndex
        ];
    }


    submitAnswer(answer) {

        const question =
            this.getCurrentQuestion();


        const isCorrect =
            question.isCorrectAnswer(answer);


        if (isCorrect) {

            this.score++;
        }


        this.userAnswers.push({

            question:
                question.text,

            selectedAnswer:
                answer,

            correctAnswer:
                question.answer,

            explanation:
                question.explanation,

            isCorrect:
                isCorrect

        });


        this.questionIndex++;
    }


    hasEnded() {

        return (
            this.questionIndex >=
            this.questions.length
        );
    }
}


// ==========================================
// SHUFFLE ARRAY
// ==========================================

function shuffleArray(array) {

    const shuffled = [...array];


    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            shuffled[i],
            shuffled[randomIndex]

        ] = [

            shuffled[randomIndex],
            shuffled[i]

        ];
    }


    return shuffled;
}


// ==========================================
// SHUFFLE ANSWER POSITIONS
// ==========================================

function shuffleQuestionChoices(question) {

    return new Question(

        question.text,

        shuffleArray(
            question.choices
        ),

        question.answer,

        question.explanation
    );
}


// ==========================================
// CATEGORY 1
// HTML FUNDAMENTALS
// 15 QUESTIONS
// ==========================================

const fundamentalsQuestions = [

    new Question(
        "What does HTML stand for?",
        [
            "HyperText Markup Language",
            "Hyper Transfer Markup Language",
            "HighText Machine Language",
            "HyperText Markdown Language"
        ],
        "HyperText Markup Language",
        "HTML stands for HyperText Markup Language. It is the standard markup language used to structure content on web pages."
    ),


    new Question(
        "Which declaration tells the browser that a document uses HTML5?",
        [
            "<!DOCTYPE html>",
            "<html5>",
            "<doctype html5>",
            "<!HTML5>"
        ],
        "<!DOCTYPE html>",
        "<!DOCTYPE html> is the standard HTML5 document type declaration."
    ),


    new Question(
        "Which element represents the root element of an HTML document?",
        [
            "<html>",
            "<body>",
            "<head>",
            "<main>"
        ],
        "<html>",
        "The <html> element is the root element that contains the rest of the HTML document."
    ),


    new Question(
        "Which element contains metadata and information about the HTML document that is not normally displayed as page content?",
        [
            "<head>",
            "<body>",
            "<main>",
            "<section>"
        ],
        "<head>",
        "The <head> contains document metadata such as the title, character encoding, stylesheet links and other resources."
    ),


    new Question(
        "Which element contains the content that is normally visible in the browser window?",
        [
            "<body>",
            "<head>",
            "<meta>",
            "<title>"
        ],
        "<body>",
        "The <body> contains the visible content of the web page."
    ),


    new Question(
        "Which HTML element defines the most important heading?",
        [
            "<h1>",
            "<h6>",
            "<heading>",
            "<head>"
        ],
        "<h1>",
        "<h1> represents the highest-level heading in the standard HTML heading hierarchy."
    ),


    new Question(
        "Which element is used to create a paragraph?",
        [
            "<p>",
            "<paragraph>",
            "<text>",
            "<para>"
        ],
        "<p>",
        "The <p> element represents a paragraph."
    ),


    new Question(
        "Which element creates a hyperlink?",
        [
            "<a>",
            "<link>",
            "<href>",
            "<url>"
        ],
        "<a>",
        "The <a> element creates hyperlinks to URLs, files, locations within a page and other resources."
    ),


    new Question(
        "Which attribute specifies the destination of an <a> element?",
        [
            "href",
            "src",
            "target",
            "action"
        ],
        "href",
        "The href attribute contains the URL or destination of a hyperlink."
    ),


    new Question(
        "Which element is used to embed an image in an HTML page?",
        [
            "<img>",
            "<image>",
            "<picture-src>",
            "<src>"
        ],
        "<img>",
        "The <img> element embeds an image into an HTML document."
    ),


    new Question(
        "Which attribute specifies the image resource used by an <img> element?",
        [
            "src",
            "href",
            "link",
            "path"
        ],
        "src",
        "The src attribute tells the browser where the image resource is located."
    ),


    new Question(
        "Which element creates a line break without starting a new paragraph?",
        [
            "<br>",
            "<break>",
            "<lb>",
            "<newline>"
        ],
        "<br>",
        "The <br> element represents a line break."
    ),


    new Question(
        "Which element represents strong importance and is normally rendered with strong emphasis?",
        [
            "<strong>",
            "<bold>",
            "<important>",
            "<heavy>"
        ],
        "<strong>",
        "<strong> represents strong importance. Browsers commonly render it in bold by default."
    ),


    new Question(
        "Which element represents emphasized text?",
        [
            "<em>",
            "<italic>",
            "<emphasis>",
            "<i-text>"
        ],
        "<em>",
        "<em> represents stress emphasis. Browsers commonly display it in italic type by default."
    ),


    new Question(
        "Which HTML element is used for a generic block-level container when no more meaningful semantic element is appropriate?",
        [
            "<div>",
            "<span>",
            "<block>",
            "<container>"
        ],
        "<div>",
        "<div> is a generic container commonly used to group content when a more meaningful semantic element is not appropriate."
    )

];


// ==========================================
// CATEGORY 2
// STRUCTURE, SEMANTICS, LISTS,
// TABLES, FORMS & MEDIA
// 15 QUESTIONS
// ==========================================

const structureQuestions = [

    new Question(
        "Which element creates an ordered or numbered list?",
        [
            "<ol>",
            "<ul>",
            "<li>",
            "<dl>"
        ],
        "<ol>",
        "<ol> creates an ordered list. <ul> creates an unordered list."
    ),


    new Question(
        "Which element creates an unordered list?",
        [
            "<ul>",
            "<ol>",
            "<li>",
            "<list>"
        ],
        "<ul>",
        "<ul> creates an unordered list, which browsers normally display using bullet markers."
    ),


    new Question(
        "Which element represents an individual item inside an ordered or unordered list?",
        [
            "<li>",
            "<item>",
            "<list>",
            "<option>"
        ],
        "<li>",
        "<li> represents a list item inside elements such as <ul> and <ol>."
    ),


    new Question(
        "Which semantic element represents the main navigation section of a page?",
        [
            "<nav>",
            "<menu>",
            "<navigation>",
            "<links>"
        ],
        "<nav>",
        "<nav> represents a section containing major navigation links."
    ),


    new Question(
        "Which semantic element represents the dominant content of the document body?",
        [
            "<main>",
            "<content>",
            "<body-content>",
            "<primary>"
        ],
        "<main>",
        "<main> represents the dominant content of the document body."
    ),


    new Question(
        "Which semantic element is commonly used for introductory content or a group of navigational aids?",
        [
            "<header>",
            "<head>",
            "<top>",
            "<intro>"
        ],
        "<header>",
        "<header> represents introductory content for a page or section and can contain headings, navigation and related information."
    ),


    new Question(
        "Which semantic element is commonly used for footer information about a page or section?",
        [
            "<footer>",
            "<bottom>",
            "<end>",
            "<foot>"
        ],
        "<footer>",
        "<footer> represents footer content for its nearest sectioning content or the document."
    ),


    new Question(
        "Which semantic element is appropriate for a self-contained blog post that could make sense independently?",
        [
            "<article>",
            "<section>",
            "<div>",
            "<aside>"
        ],
        "<article>",
        "<article> represents self-contained content that can potentially be distributed or reused independently."
    ),


    new Question(
        "Which element represents tabular data?",
        [
            "<table>",
            "<tabular>",
            "<grid>",
            "<data>"
        ],
        "<table>",
        "<table> represents data arranged in rows and columns."
    ),


    new Question(
        "Which element represents a table row?",
        [
            "<tr>",
            "<td>",
            "<th>",
            "<row>"
        ],
        "<tr>",
        "<tr> represents a row of cells in a table."
    ),


    new Question(
        "Which element represents a standard data cell in a table?",
        [
            "<td>",
            "<tr>",
            "<th>",
            "<cell>"
        ],
        "<td>",
        "<td> represents a standard data cell within a table row."
    ),


    new Question(
        "Which element represents a header cell in a table?",
        [
            "<th>",
            "<td>",
            "<thead>",
            "<header>"
        ],
        "<th>",
        "<th> represents a header cell for a row or column of table data."
    ),


    new Question(
        "Which HTML element creates a form?",
        [
            "<form>",
            "<input>",
            "<fieldset>",
            "<formbox>"
        ],
        "<form>",
        "<form> represents a section containing interactive controls for submitting information."
    ),


    new Question(
        "Which element creates a drop-down selection control?",
        [
            "<select>",
            "<option>",
            "<dropdown>",
            "<choice>"
        ],
        "<select>",
        "<select> creates the selection control. Individual choices inside it are represented by <option> elements."
    ),


    new Question(
        "Which HTML element is used to embed video content?",
        [
            "<video>",
            "<media>",
            "<movie>",
            "<embed-video>"
        ],
        "<video>",
        "<video> embeds video content and can provide native browser playback controls."
    )

];


// ==========================================
// CATEGORY 3
// FORMS, ACCESSIBILITY &
// HTML BEST PRACTICES
// 15 QUESTIONS
// ==========================================

const applicationQuestions = [

    new Question(
        "Which input type is most appropriate when asking a user to enter an email address?",
        [
            "email",
            "text",
            "mail",
            "address"
        ],
        "email",
        "type=\"email\" tells the browser that the expected value is an email address and can enable appropriate validation and input behavior."
    ),


    new Question(
        "Which input type hides the characters entered by the user?",
        [
            "password",
            "hidden",
            "secret",
            "private"
        ],
        "password",
        "An input with type=\"password\" obscures the entered characters on screen."
    ),


    new Question(
        "Which attribute can make a form control mandatory before the form can be submitted?",
        [
            "required",
            "mandatory",
            "validate",
            "needed"
        ],
        "required",
        "The required attribute tells the browser that the control must contain an acceptable value before form submission."
    ),


    new Question(
        "Which element should be associated with a form control to provide its visible text description?",
        [
            "<label>",
            "<caption>",
            "<legend>",
            "<description>"
        ],
        "<label>",
        "<label> provides a caption for a form control and can be explicitly associated with that control."
    ),


    new Question(
        "Which attribute on a <label> can associate it with an input whose id has the same value?",
        [
            "for",
            "id",
            "name",
            "target"
        ],
        "for",
        "A label's for value should match the id of the form control it describes."
    ),


    new Question(
        "Why is the alt attribute important on informative images?",
        [
            "It provides a text alternative when the image cannot be perceived",
            "It automatically compresses the image",
            "It changes the image dimensions",
            "It converts the image to SVG"
        ],
        "It provides a text alternative when the image cannot be perceived",
        "Alternative text communicates the meaning or function of an informative image when the image itself is unavailable or cannot be perceived."
    ),


    new Question(
        "What alt value is commonly appropriate for a purely decorative image that should be ignored by assistive technology?",
        [
            "alt=\"\"",
            "alt=\"decorative\"",
            "Remove the img element",
            "alt=\"image\""
        ],
        "alt=\"\"",
        "A decorative image commonly uses an empty alt attribute so assistive technology can ignore it while the HTML remains valid."
    ),


    new Question(
        "What is the main purpose of the lang attribute on the <html> element?",
        [
            "It identifies the primary language of the document",
            "It chooses the programming language",
            "It translates the page automatically",
            "It selects the browser's interface language"
        ],
        "It identifies the primary language of the document",
        "Declaring the document language helps browsers, search engines and assistive technologies interpret the page correctly."
    ),


    new Question(
        "Which meta element is commonly used to make a page adapt properly to mobile viewport widths?",
        [
            "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
            "<meta name=\"mobile\" content=\"responsive\">",
            "<meta width=\"device-width\">",
            "<meta responsive=\"true\">"
        ],
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        "The viewport meta declaration controls how the page viewport is sized and initially scaled on mobile devices."
    ),


    new Question(
        "Which element gives an HTML document its browser-tab title?",
        [
            "<title>",
            "<h1>",
            "<header>",
            "<meta>"
        ],
        "<title>",
        "The <title> element inside <head> provides the document title used by browser tabs and other contexts."
    ),


    new Question(
        "Which attribute gives an element a document-wide unique identifier?",
        [
            "id",
            "class",
            "name",
            "key"
        ],
        "id",
        "The id global attribute identifies an element and should be unique within the document."
    ),


    new Question(
        "Which attribute is normally used to assign one or more reusable CSS class names to an element?",
        [
            "class",
            "id",
            "style-name",
            "selector"
        ],
        "class",
        "The class attribute assigns one or more class names that can be shared by multiple elements."
    ),


    new Question(
        "Which button type should be used when a button should not submit its surrounding form?",
        [
            "button",
            "submit",
            "click",
            "normal"
        ],
        "button",
        "type=\"button\" creates a button without the default form-submission behavior of a submit button."
    ),


    new Question(
        "Which form attribute specifies where submitted form data should be sent?",
        [
            "action",
            "method",
            "target",
            "href"
        ],
        "action",
        "The action attribute specifies the URL that processes the submitted form data."
    ),


    new Question(
        "Which form attribute determines whether form data is normally submitted using GET or POST?",
        [
            "method",
            "action",
            "type",
            "request"
        ],
        "method",
        "The method attribute specifies the HTTP submission method, commonly get or post."
    )

];


// ==========================================
// CATEGORY 4
// PRACTICAL HTML & DEBUGGING
// 15 QUESTIONS
// ==========================================

const practicalQuestions = [

    new Question(
        `A developer wants a numbered list:

<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>

What should be changed?`,
        [
            "Replace <ul> with <ol>",
            "Replace <li> with <number>",
            "Add type=\"number\" to <ul>",
            "Replace <ul> with <dl>"
        ],
        "Replace <ul> with <ol>",
        "<ul> creates an unordered list. A numbered or ordered list should use <ol> while retaining the <li> items."
    ),


    new Question(
        `A developer writes:

<option>
    Nigeria
</option>

and expects it to create a complete drop-down menu.

What is missing?`,
        [
            "The <option> needs to be inside a <select> element",
            "The <option> needs to be inside an <input> element",
            "The tag should be changed to <dropdown>",
            "The tag needs an href attribute"
        ],
        "The <option> needs to be inside a <select> element",
        "<option> represents an individual choice. The overall drop-down control is created with <select>."
    ),


    new Question(
        `Examine this link:

<a src="about.html">
    About Us
</a>

What is wrong?`,
        [
            "The <a> element should use href instead of src",
            "The <a> element must use action",
            "Links can only point to external websites",
            "The text must be inside a <p>"
        ],
        "The <a> element should use href instead of src",
        "The destination of an anchor element is specified with the href attribute."
    ),


    new Question(
        `Examine this image:

<img href="images/team.jpg" alt="Our team">

What should be corrected?`,
        [
            "Replace href with src",
            "Replace alt with title",
            "Replace img with image",
            "Remove the image path"
        ],
        "Replace href with src",
        "The <img> element uses src to specify its image resource."
    ),


    new Question(
        `What accessibility issue exists here?

<img src="manager.jpg">`,
        [
            "The image is missing an alt attribute",
            "The image must be inside a table",
            "The image requires an href attribute",
            "The image must use a closing </img> tag"
        ],
        "The image is missing an alt attribute",
        "Images require an alt attribute. Informative images need a meaningful text alternative, while decorative images generally use an empty alt value."
    ),


    new Question(
        `Examine this form field:

<label>Email Address</label>
<input type="email" id="email">

How can the label be explicitly associated with the input?`,
        [
            "Add for=\"email\" to the label",
            "Add href=\"email\" to the label",
            "Add target=\"email\" to the label",
            "Add label=\"email\" to the input"
        ],
        "Add for=\"email\" to the label",
        "A label's for attribute can reference the id of its associated form control."
    ),


    new Question(
        `Examine this HTML:

<h1>My Website</h1>
<h3>About Us</h3>

What is the main structural concern?`,
        [
            "The heading hierarchy skips from h1 to h3",
            "A page cannot contain h3 elements",
            "h1 must always appear inside h3",
            "Headings cannot contain text"
        ],
        "The heading hierarchy skips from h1 to h3",
        "Heading levels should reflect a logical document hierarchy. If About Us is directly subordinate to the h1, h2 would normally represent that level."
    ),


    new Question(
        `A developer writes:

<input type="text" required="false">

They expect the field to be optional.

What is the problem?`,
        [
            "The presence of required still makes the control required",
            "required only works on password fields",
            "The value must be required=\"no\"",
            "The attribute should be optional=\"true\""
        ],
        "The presence of required still makes the control required",
        "required is a boolean HTML attribute. Its presence represents the enabled state; using the string \"false\" does not disable it."
    ),


    new Question(
        `Examine this code:

<form>
    <button>Cancel</button>
</form>

The developer does not want Cancel to submit the form.

What should be added?`,
        [
            "type=\"button\"",
            "type=\"cancel\"",
            "submit=\"false\"",
            "action=\"none\""
        ],
        "type=\"button\"",
        "A button associated with a form defaults to submit behavior. type=\"button\" creates a button with no default submission behavior."
    ),


    new Question(
        `Which version gives the input an accessible visible label using native HTML?`,
        [
            `<label for="name">Name</label>
<input id="name" type="text">`,
            `<span>Name</span>
<input type="text">`,
            `<div>Name</div>
<input type="text">`,
            `<p>Name</p>
<input type="text">`
        ],
        `<label for="name">Name</label>
<input id="name" type="text">`,
        "The <label> element is specifically designed to label form controls, and its for attribute can explicitly associate it with the input's id."
    ),


    new Question(
        `Examine:

<a href="https://example.com">
    <button>Visit Website</button>
</a>

If the purpose is simply to navigate to another page, which approach is more appropriate?`,
        [
            "Use the <a> element itself as the interactive link",
            "Use only a <button> with no JavaScript",
            "Use a <div> with an href attribute",
            "Use an <input type=\"text\">"
        ],
        "Use the <a> element itself as the interactive link",
        "Navigation to another resource is the semantic purpose of an anchor. A button is intended for an action rather than ordinary navigation."
    ),


    new Question(
        `A developer writes:

<table>
    <td>Kayode</td>
    <td>Developer</td>
</table>

What important table structure is missing around the cells?`,
        [
            "A <tr> element",
            "A <ul> element",
            "A <form> element",
            "A <section> element"
        ],
        "A <tr> element",
        "<td> cells belong inside a table row represented by <tr>."
    ),


    new Question(
        `Examine this document:

<html>
<head>
    <title>Portfolio</title>
</head>
<body>
    ...
</body>
</html>

What important declaration should normally appear before <html> in an HTML5 document?`,
        [
            "<!DOCTYPE html>",
            "<html version=\"5\">",
            "<meta html=\"5\">",
            "<!HTML>"
        ],
        "<!DOCTYPE html>",
        "<!DOCTYPE html> should appear at the beginning of an HTML5 document so the browser uses standards mode."
    ),


    new Question(
        `A developer wants the browser to validate that this field contains an email address:

<input type="text" name="email">

What should be changed?`,
        [
            "Change type=\"text\" to type=\"email\"",
            "Change name=\"email\" to href=\"email\"",
            "Add validate=\"email\"",
            "Replace <input> with <mail>"
        ],
        "Change type=\"text\" to type=\"email\"",
        "The email input type provides email-specific semantics and allows browsers to perform appropriate built-in validation."
    ),


    new Question(
        `A page contains:

<div class="navigation">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
</div>

Which semantic element would better represent this major navigation block?`,
        [
            "<nav>",
            "<article>",
            "<aside>",
            "<footer>"
        ],
        "<nav>",
        "A major block of navigation links is semantically represented by the <nav> element."
    )

];


// ==========================================
// CREATE BALANCED QUIZ
// ==========================================

function createQuiz() {

    // Select 5 random questions
    // from each category.

    const fundamentals =
        shuffleArray(
            fundamentalsQuestions
        )
        .slice(
            0,
            QUESTIONS_PER_CATEGORY
        );


    const structure =
        shuffleArray(
            structureQuestions
        )
        .slice(
            0,
            QUESTIONS_PER_CATEGORY
        );


    const application =
        shuffleArray(
            applicationQuestions
        )
        .slice(
            0,
            QUESTIONS_PER_CATEGORY
        );


    const practical =
        shuffleArray(
            practicalQuestions
        )
        .slice(
            0,
            QUESTIONS_PER_CATEGORY
        );


    // Combine the categories

    const selectedQuestions = [

        ...fundamentals,
        ...structure,
        ...application,
        ...practical

    ];


    // Randomize the final order
    // and randomize answer positions.

    const randomizedQuestions =
        shuffleArray(
            selectedQuestions
        )
        .map(
            shuffleQuestionChoices
        );


    return new Quiz(
        randomizedQuestions
    );
}


// ==========================================
// QUIZ STATE
// ==========================================

let quiz =
    createQuiz();


let selectedAnswer =
    null;


let quizFinished =
    false;


// ==========================================
// DISPLAY QUESTION
// ==========================================

function displayQuestion() {

    if (quiz.hasEnded()) {

        showScore();

        return;
    }


    selectedAnswer = null;


    const currentQuestion =
        quiz.getCurrentQuestion();


    // --------------------------------------
    // DISPLAY QUESTION
    // --------------------------------------

    const questionElement =
        document.getElementById(
            "question"
        );


    questionElement.textContent =
        currentQuestion.text;


    // --------------------------------------
    // DISPLAY ANSWERS
    // --------------------------------------

    currentQuestion.choices.forEach(
        (choice, index) => {

            const choiceElement =
                document.getElementById(
                    "choice" + index
                );


            const button =
                document.getElementById(
                    "btn" + index
                );


            choiceElement.textContent =
                choice;


            button.classList.remove(
                "selected"
            );


            button.disabled =
                false;


            button.onclick =
                function () {

                    selectAnswer(
                        choice,
                        index
                    );
                };
        }
    );


    // --------------------------------------
    // NEXT / SUBMIT BUTTON
    // --------------------------------------

    const nextButton =
        document.getElementById(
            "next-btn"
        );


    nextButton.disabled =
        true;


    if (
        quiz.questionIndex ===
        quiz.questions.length - 1
    ) {

        nextButton.textContent =
            "Submit Quiz";

    } else {

        nextButton.textContent =
            "Next Question";
    }


    // --------------------------------------
    // MESSAGE
    // --------------------------------------

    const message =
        document.getElementById(
            "selection-message"
        );


    message.textContent =
        "Select an answer to continue.";


    updateProgress();
}


// ==========================================
// SELECT ANSWER
// ==========================================

function selectAnswer(
    choice,
    selectedIndex
) {

    selectedAnswer =
        choice;


    // Remove selection
    // from every answer.

    for (
        let i = 0;
        i < 4;
        i++
    ) {

        const button =
            document.getElementById(
                "btn" + i
            );


        button.classList.remove(
            "selected"
        );
    }


    // Highlight selected answer.

    const selectedButton =
        document.getElementById(
            "btn" + selectedIndex
        );


    selectedButton.classList.add(
        "selected"
    );


    // Enable Next Question.

    const nextButton =
        document.getElementById(
            "next-btn"
        );


    nextButton.disabled =
        false;


    // Change helper text.

    const message =
        document.getElementById(
            "selection-message"
        );


    message.textContent =
        "Answer selected.";
}


// ==========================================
// NEXT QUESTION
// ==========================================

function goToNextQuestion() {

    if (
        selectedAnswer === null
    ) {

        return;
    }


    quiz.submitAnswer(
        selectedAnswer
    );


    if (quiz.hasEnded()) {

        showScore();

        return;
    }


    displayQuestion();
}


// ==========================================
// NEXT BUTTON EVENT
// ==========================================

document
    .getElementById(
        "next-btn"
    )
    .addEventListener(
        "click",
        goToNextQuestion
    );


// ==========================================
// UPDATE PROGRESS
// ==========================================

function updateProgress() {

    const currentQuestionNumber =
        quiz.questionIndex + 1;


    document
        .getElementById(
            "progress"
        )
        .textContent =

        `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}


// ==========================================
// PERFORMANCE MESSAGE
// ==========================================

function getPerformanceMessage(
    percentage
) {

    if (percentage >= 90) {

        return "Excellent Work!";
    }


    if (percentage >= 75) {

        return "Great Work!";
    }


    if (percentage >= 60) {

        return "Good Effort!";
    }


    if (percentage >= 50) {

        return "Keep Practising!";
    }


    return "More Practice Needed";
}


// ==========================================
// SHOW SCORE
// ==========================================

function showScore() {

    if (quizFinished) {

        return;
    }


    quizFinished =
        true;


    stopTimer();


    const quizElement =
        document.getElementById(
            "quiz"
        );


    const totalQuestions =
        quiz.questions.length;


    const answeredQuestions =
        quiz.userAnswers.length;


    const incorrectAnswers =
        answeredQuestions -
        quiz.score;


    const unansweredQuestions =
        totalQuestions -
        answeredQuestions;


    const percentage =
        Math.round(
            (
                quiz.score /
                totalQuestions
            ) * 100
        );


    const message =
        getPerformanceMessage(
            percentage
        );


    quizElement.innerHTML = `

        <div class="result-container">

            <p class="result-label">
                Assessment Complete
            </p>


            <h1>
                Quiz Completed
            </h1>


            <p class="result-message">
                ${message}
            </p>


            <div class="score-circle">

                <span class="score-number">

                    ${quiz.score}/${totalQuestions}

                </span>


                <span class="score-percentage">

                    ${percentage}%

                </span>

            </div>


            <div class="result-details">


                <div
                    class="result-item correct-result"
                >

                    <span>
                        Correct
                    </span>

                    <strong>
                        ${quiz.score}
                    </strong>

                </div>


                <div
                    class="result-item incorrect-result"
                >

                    <span>
                        Incorrect
                    </span>

                    <strong>
                        ${incorrectAnswers}
                    </strong>

                </div>


                <div class="result-item">

                    <span>
                        Unanswered
                    </span>

                    <strong>
                        ${unansweredQuestions}
                    </strong>

                </div>


            </div>


            <div class="result-actions">

                <button
                    type="button"
                    class="review-btn"
                    onclick="showReview()"
                >
                    Review Answers
                </button>


                <button
                    type="button"
                    class="restart-btn"
                    onclick="restartQuiz()"
                >
                    Take Quiz Again
                </button>

            </div>

        </div>
    `;
}


// ==========================================
// REVIEW ANSWERS
// ==========================================

function showReview() {

    const quizElement =
        document.getElementById(
            "quiz"
        );


    let reviewHTML = `

        <div class="review-container">


            <div class="review-header">

                <p class="result-label">
                    Assessment Review
                </p>


                <h1>
                    Review Your Answers
                </h1>


                <p>
                    Study each explanation before
                    attempting the assessment again.
                </p>

            </div>


            <div class="review-list">

    `;


    quiz.questions.forEach(
        (question, index) => {

            const answer =
                quiz.userAnswers[
                    index
                ];


            // ==================================
            // UNANSWERED
            // ==================================

            if (!answer) {

                reviewHTML += `

                    <article
                        class="
                            review-card
                            unanswered-card
                        "
                    >

                        <div
                            class="
                                review-card-top
                            "
                        >

                            <div
                                class="
                                    review-question-number
                                "
                            >
                                Question ${index + 1}
                            </div>


                            <span
                                class="
                                    review-status
                                    unanswered-status
                                "
                            >
                                Unanswered
                            </span>

                        </div>


                        <h2>

                            ${escapeHTML(
                                question.text
                            )}

                        </h2>


                        <div
                            class="
                                answer-review-row
                            "
                        >

                            <span
                                class="
                                    review-label
                                "
                            >
                                Your Answer
                            </span>


                            <p
                                class="
                                    unanswered-text
                                "
                            >
                                Not answered
                            </p>

                        </div>


                        <div
                            class="
                                answer-review-row
                            "
                        >

                            <span
                                class="
                                    review-label
                                "
                            >
                                Correct Answer
                            </span>


                            <p
                                class="
                                    correct-answer-text
                                "
                            >

                                ${escapeHTML(
                                    question.answer
                                )}

                            </p>

                        </div>


                        <div
                            class="
                                explanation-box
                            "
                        >

                            <strong>
                                Explanation
                            </strong>


                            <p>

                                ${escapeHTML(
                                    question.explanation
                                )}

                            </p>

                        </div>

                    </article>
                `;


                return;
            }


            // ==================================
            // ANSWERED
            // ==================================

            const statusClass =
                answer.isCorrect

                    ? "correct-card"

                    : "incorrect-card";


            const statusText =
                answer.isCorrect

                    ? "Correct"

                    : "Incorrect";


            reviewHTML += `

                <article
                    class="
                        review-card
                        ${statusClass}
                    "
                >

                    <div
                        class="
                            review-card-top
                        "
                    >

                        <div
                            class="
                                review-question-number
                            "
                        >
                            Question ${index + 1}
                        </div>


                        <span
                            class="
                                review-status
                            "
                        >
                            ${statusText}
                        </span>

                    </div>


                    <h2>

                        ${escapeHTML(
                            answer.question
                        )}

                    </h2>


                    <div
                        class="
                            answer-review-row
                        "
                    >

                        <span
                            class="
                                review-label
                            "
                        >
                            Your Answer
                        </span>


                        <p
                            class="${
                                answer.isCorrect

                                    ? "correct-answer-text"

                                    : "wrong-answer-text"
                            }"
                        >

                            ${escapeHTML(
                                answer.selectedAnswer
                            )}

                        </p>

                    </div>
            `;


            // Show correct answer separately
            // only when the student was wrong.

            if (!answer.isCorrect) {

                reviewHTML += `

                    <div
                        class="
                            answer-review-row
                        "
                    >

                        <span
                            class="
                                review-label
                            "
                        >
                            Correct Answer
                        </span>


                        <p
                            class="
                                correct-answer-text
                            "
                        >

                            ${escapeHTML(
                                answer.correctAnswer
                            )}

                        </p>

                    </div>
                `;
            }


            reviewHTML += `

                    <div
                        class="
                            explanation-box
                        "
                    >

                        <strong>
                            Explanation
                        </strong>


                        <p>

                            ${escapeHTML(
                                answer.explanation
                            )}

                        </p>

                    </div>

                </article>
            `;
        }
    );


    reviewHTML += `

            </div>


            <div class="review-actions">

                <button
                    type="button"
                    class="restart-btn"
                    onclick="restartQuiz()"
                >
                    Take Quiz Again
                </button>

            </div>

        </div>
    `;


    quizElement.innerHTML =
        reviewHTML;


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });
}


// ==========================================
// ESCAPE HTML
// ==========================================

function escapeHTML(value) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        value;


    return div.innerHTML;
}


// ==========================================
// RESTART QUIZ
// ==========================================

function restartQuiz() {

    location.reload();
}


// ==========================================
// TIMER
// ==========================================

let timeRemaining =
    QUIZ_TIME * 60;


let timerInterval;


// ==========================================
// START TIMER
// ==========================================

function startTimer() {

    updateTimerDisplay();


    timerInterval =
        setInterval(() => {

            timeRemaining--;


            if (
                timeRemaining <= 0
            ) {

                timeRemaining = 0;


                updateTimerDisplay();

                stopTimer();

                showScore();

                return;
            }


            updateTimerDisplay();

        }, 1000);
}


// ==========================================
// STOP TIMER
// ==========================================

function stopTimer() {

    if (timerInterval) {

        clearInterval(
            timerInterval
        );
    }
}


// ==========================================
// TIMER DISPLAY
// ==========================================

function updateTimerDisplay() {

    const timerElement =
        document.getElementById(
            "timer"
        );


    if (!timerElement) {

        return;
    }


    const minutes =
        Math.floor(
            timeRemaining / 60
        );


    const seconds =
        timeRemaining % 60;


    timerElement.textContent =

        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    // Final five minutes

    if (
        timeRemaining <= 300
    ) {

        timerElement.classList.add(
            "timer-warning"
        );
    }
}


// ==========================================
// START QUIZ
// ==========================================

displayQuestion();

startTimer();
