// Создаем массивы с пятью слагаемыми каждый
var summands1 = [49, 76, 42, 62, 49, 53, 34, 67, 23, 82, 27, 70, 80, 64, 25, 45, 65, 43, 51, 76, 57, 61, 19, 58, 32, 52, 29, 51, 14, 57, 68, 54, 61, 44, 31, 96, 36, 58, 65, 41, 58, 46, 67, 74, 60];
var summands2 = [35, 34, 55, 23, 19, 47, 61, 58, 31, 17, 41, 31, 80, 44, 60, 13, 25, 40, 14, 17, 74, 18, 41, 32, 65, 23, 71, 11, 35, 42, 10, 40, 55, 21, 66, 43, 24, 35, 24, 19, 14, 30, 36, 34, 12];

// Получаем контейнер, в который будем добавлять элементы
var container = document.getElementById("container");
var button = document.getElementById("button");
// Создаем HTML-элементы для каждой пары слагаемых и полей ввода ответа

var operations = ["+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-", "+", "-"];

for (var i = 0; i < summands1.length; i++) {
  var summand1 = summands1[i];
  var summand2 = summands2[i];
  var operation = operations[i]; // Операция для текущего примера
  var answer;

  // Выполнение операции в зависимости от выбранного оператора
  if (operation === "+") {
    answer = summand1 + summand2;
  } else if (operation === "-") {
    answer = summand1 - summand2;
  }

  // Создаем элементы
  var pairContainer = document.createElement("div");
  var summandsText = document.createTextNode(summand1 + " " + operation + " " + summand2 + " = ");
  var input = document.createElement("input");

  // Устанавливаем тип и атрибуты для поля ввода
  input.type = "number";
  input.setAttribute("data-answer", answer);

  // Добавляем элементы в контейнер
  pairContainer.appendChild(summandsText);
  pairContainer.appendChild(input);
  container.appendChild(pairContainer);
}


function checkAnswers() {
  var inputs = document.querySelectorAll("#container input");
  var solvedCount = 0; // Количество решенных примеров
  var correctCount = 0; // Количество правильно решенных примеров

  // Проверяем каждый ответ
  inputs.forEach(function (input) {
    var userAnswer = parseFloat(input.value);
    var correctAnswer = parseFloat(input.getAttribute("data-answer"));
    if (!isNaN(userAnswer)) {
      solvedCount++; // Увеличиваем счетчик решенных примеров
      if (userAnswer === correctAnswer) {
        correctCount++; // Увеличиваем счетчик правильно решенных примеров
      } else {
        // Неправильные ответы тут подсвечиваются
        input.style.backgroundColor = "red";
      }
    }
  });

  var errorCount = solvedCount - correctCount; // Вычисляем количество ошибок

  // Выводим результат
  var resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "Количество решенных примеров: " + solvedCount + "<br>";
  resultContainer.innerHTML += "Количество ошибок: " + errorCount;
}

const startButton = document.querySelector('#start-timer');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');

let minutes = 3;
let seconds = 0;

let interval;

startButton.addEventListener('click', () => {

  startButton.style.visibility = "hidden";
  container.style.display = `flex`
  button.style.display = `flex`
  interval = setInterval(() => {
    seconds--;

    if (seconds === -1) {
      seconds = 59;
      minutes--;
    }

    if (minutes === -1) {
      clearInterval(interval);
      checkAnswers();
    }

    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
  }, 1000);
});

