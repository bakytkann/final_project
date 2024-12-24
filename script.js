const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "HighText Machine Language", correct: false }, 
            { text: "Hyperlink and Text Markup Language", correct: false }, 
            { text: "HyperText Markup Language", correct: true }, 
            { text: "HomeTool Marking Language", correct: false }, 
        ]
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?", 
        answers: [
            { text: "url", correct: false },
            { text: "href", correct: false },
            { text: "link", correct: false },
            { text: "a", correct: true },
        ]
    },
    {
        question: "What is the primary purpose of CSS?",
        answers: [
            { text: "To style the content of web pages", correct: true }, 
            { text: "To structure web page content", correct: false },
            { text: "To add server-side logic", correct: false },
            { text: "To create databases", correct: false },
        ]
    },
    {
        question: "Which property is used to change the background color in CSS?", 
        answers: [
            { text: "bgcolor", correct: false },
            { text: "background-color", correct: true },
            { text: "color-background", correct: false },
            { text: "background-style", correct: false },
        ]
    },
    {
        question: "What is the standard screen resolution for responsive web design?", 
        answers: [
            { text: "1024x768", correct: false },
            { text: "800x600", correct: false },
            { text: "It depends on the device.", correct: true }, 
            { text: "1920x1080", correct: false },
        ]
    },
    {
        question: "What is the default position value in CSS?", 
        answers: [
            { text: "static", correct: true }, 
            { text: "relative", correct: false },
            { text: "absolute", correct: false },
            { text: "fixed", correct: false },
        ]
    },
    {
        question: "Which protocol is used for secure communication over the web?", 
        answers: [
            { text: "SMTP", correct: false },
            { text: "HTTP", correct: false },
            { text: "FTP", correct: false },
            { text: "HTTPS", correct: true }, 
        ]
    },
    {
        question: "What does the float property in CSS do?", 
        answers: [
            { text: "It adds animation to elements.", correct: false },
            { text: "It aligns text vertically.", correct: false },
            { text: "It positions elements to the left or right of a container.", correct: true }, 
            { text: "It resizes images proportionally.", correct: false },
        ]
    },
    {
        question: "Which of the following is NOT a valid CSS unit?", 
        answers: [
            { text: "em", correct: false },
            { text: "px", correct: false },
            { text: "ptx", correct: true }, 
            { text: "%", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used for adding an image?", 
        answers: [
            { text: "img", correct: true }, 
            { text: "picture", correct: false },
            { text: "src", correct: false },
            { text: "image", correct: false },
        ]
    },
    {
        question: "What does the viewport meta tag help with?", 
        answers: [
            { text: "Linking stylesheets", correct: false },
            { text: "Responsive web design", correct: true }, 
            { text: "Adding animations", correct: false },
            { text: "Configuring SEO keywords", correct: false },
        ]
    },
    {
        question: "Which CSS property is used to make a website layout flexible?", 
        answers: [
            { text: "overflow: auto;", correct: false },
            { text: "position: relative;", correct: false },
            { text: "display: flex;", correct: true },
            { text: "float: left;", correct: false },
        ]
    },
    {
        question: "Which of the following is the correct way to center a block element in CSS?", 
        answers: [
            { text: "align: center;", correct: false },
            { text: "text-align: center;", correct: false },
            { text: "padding: center;", correct: false },
            { text: "margin: auto;", correct: true }, 
        ]
    },
    {
        question: "What is the purpose of the <form> tag in HTML?", 
        answers: [
            { text: "To collect user input", correct: true }, 
            { text: "To display tables", correct: false },
            { text: "To create navigation links", correct: false },
            { text: "To define a layout grid", correct: false },
        ]
    },
    {
        question: "Which CSS property is used to control the spacing between lines of text?",
        answers: [
            { text: "text-spacing", correct: false },
            { text: "line-height", correct: true }, 
            { text: "word-spacing", correct: false },
            { text: "letter-spacing", correct: false },
        ]
    }
];

// переменные 
const questionElement = document.getElementById("question"); // элемент для вопроса
const answerButtons = document.getElementById("answer-buttons"); // элемент для кнопок с ответами
const nextButton = document.getElementById("next-btn"); // кнопка некст

let currentQuestionIndex = 0; // индекс текущего вопроса
let score = 0; // счет

// функция для перемешивания элементов в массиве
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// функция для начала квиза
function startQuiz() {
    currentQuestionIndex = 0; // сброс индекса вопросов
    score = 0; // сброс счета
    shuffleArray(questions); // перемешиваем вопросы
    nextButton.innerHTML = "Next"; // кнопка некст
    showQuestion();
}

// функция для отображения текущего вопроса
function showQuestion() {
    resetState(); // сброс состояния
    let currentQuestion = questions[currentQuestionIndex]; // текущии вопрос
    let questionNo = currentQuestionIndex + 1; // номер вопроса
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // отображение текста вопроса

    let shuffledAnswers = shuffleArray([...currentQuestion.answers]); // перемешиваем ответы
    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button"); // для каждого ответа создаем кнопку
        button.innerHTML = answer.text; // устанавливаем текст на кнопке
        button.classList.add("btn"); // добавляем класс для стилей
        answerButtons.appendChild(button); // добавляем кнопку в DOM
        if (answer.correct) { 
            button.dataset.correct = answer.correct; // если ответ правильный, устанавливаем атрибут с правильностью ответа
        }
        button.addEventListener("click", selectAnswer); // добавляем обработчик событий для клика
    });
}

// функция для сброса состояния (очистка кнопок и скрытие следующей кнопки)
function resetState() {
    nextButton.style.display = "none"; // скрыть кнопку "Next"
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild); // удаляем все дочерние элементы из контейнера кнопок
    }
}

// функция обработки выбора ответа
function selectAnswer(e) {
    const selectedBtn = e.target; // выбранная кнопка
    const isCorrect = selectedBtn.dataset.correct === "true"; // проверка правильный ли ответ
    if (isCorrect) { 
        selectedBtn.classList.add("correct"); // если правильный, добавляем класс для правильного ответа
        score++; // увеличиваем счет
    } else { 
        selectedBtn.classList.add("incorrect"); // если неправильный, добавляем класс для неправильного ответа
    }
    // отключаем все кнопки ответов
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); // показываем правильный ответ
        }
        button.disabled = true; // делаем кнопки неактивными
    });
    nextButton.style.display = "block"; // показываем кнопку "Next"
}

// функция для отображения результатов
function showScore() {
    resetState(); // сброс состояние
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; // показываем результат
    nextButton.innerHTML = "Play Again"; // меняем текст кнопки
    nextButton.style.display = "block"; // показываем кнопку
}

// функция для обработки нажатия на кнопку "Next"
function handleNextButton() {
    currentQuestionIndex++; // увеличиваем индекс вопроса
    if (currentQuestionIndex < questions.length) { 
        showQuestion(); // если есть еще вопросы, показываем следующий вопрос
    } else {
        showScore(); //  если вопросы закончились, показываем результаты
    }
}

// обработчик клика по кнопке "Next"
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton(); // переход к следующему вопросу
    } else {
        startQuiz(); // начинаем квиз заново
    }
});

// запуск квиза когда страница загрузилась
startQuiz();