
const text = "First of all, touch typing makes working at a computer more comfortable. Second, it enhances communication between colleagues and customers. Third, it improves the accuracy of documents. From a productivity standpoint, an individual's typing speed increases when switching from two finger typing to touch typing..";


const paragraph = document.getElementById("paragraph");
const input = document.getElementById("input");
const timeDisplay = document.getElementById("time");
const wpm = document.getElementById("wpm");
const accuracy = document.getElementById("accuracy");
const errorsDisplay = document.getElementById("errors");


const params = new URLSearchParams(window.location.search);
let timeLeft = Number(params.get("time")) || 10;


let errors = 0;


function loadText() {
    paragraph.innerHTML = "";
    for (let char of text) {
        let span = document.createElement("span");
        span.innerText = char;
        paragraph.appendChild(span);
    }
}

loadText();


timeDisplay.innerText = timeLeft;
input.disabled = false;
input.focus();

const timer = setInterval(() => {
    timeLeft--;
    timeDisplay.innerText = timeLeft;

    if (timeLeft === 0) {
        clearInterval(timer);
        input.disabled = true;
        showResult();
    }
}, 1000);


input.addEventListener("input", () => {
    const typed = input.value;
    const chars = paragraph.querySelectorAll("span");
    errors = 0;

    chars.forEach((char, index) => {
        if (!typed[index]) {
            char.className = "";
        } 
        else if (typed[index] === char.innerText) {
            char.className = "correct";
        } 
        else {
            char.className = "wrong";
            errors++;
        }
    });

    errorsDisplay.innerText = errors;
});


function showResult() {
    let totalTyped = input.value.length;
    let correct = totalTyped - errors;
    let minutes = (Number(params.get("time")) || 10) / 60;

    wpm.innerText = Math.round((correct / 5) / minutes);
    accuracy.innerText = totalTyped ? Math.round((correct / totalTyped) * 100) + "%" : "0%";
}
