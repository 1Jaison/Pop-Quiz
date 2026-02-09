let score = 0;

let answer1 = prompt("What is 5 x 6 / 2?");
if (answer1 === "15") {
    score++;
}
let answer2 = prompt("What is (3+3) * 2 - 4?")
if (answer2 === "8") {
    score++;
}
let answer3 = prompt("What is 2 x 10 / 4?")
if (answer3 === "5") {
    score++;
}
alert("You got "   + score + " out of 3 correct.");

const checkAnswer = (userAnswer, correctAnswer) => {
if (userAnswer === correctAnswer) {
    score++;
    console.log("Correct.");
} else {
    console.log("Wrong.");
} 
    console.log("Current score:", score)
}