// Track state
let answered = false;
let shuffledGallery = [];
let currentSlide = 0;
let score = 0;

// DOM elements
const learnBtn = document.getElementById("learnBtn");
const learnMoreDiv = document.getElementById("learnMore");
const factEl = document.getElementById("fact");
const linkEl = document.getElementById("link");
const artEl = document.getElementById("art");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");

// Gallery array
const gallery = [
  {
    file: "test.jpg",
    question: "Who painted this?",
    choices: ["A", "B", "C", "D"],
    answer: "A",
    fact: "Test fact",
    link: "#"
  }
];
// Shuffle gallery for random order
function shuffleGallery() {
  shuffledGallery = [...gallery];
  for (let i = shuffledGallery.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledGallery[i], shuffledGallery[j]] = [shuffledGallery[j], shuffledGallery[i]];
  }
}

// Load a slide
function loadArt() {
  answered = false;
  const item = shuffledGallery[currentSlide];
  artEl.src = "images/" + item.file;
  questionEl.textContent = item.question;
  feedbackEl.textContent = "";

  learnBtn.style.display = "none";
  learnMoreDiv.style.display = "none";

  factEl.textContent = item.fact || "";
  linkEl.href = item.link || "#";
  linkEl.style.display = item.link ? "inline" : "none";

  // Multiple-choice buttons
  choicesEl.innerHTML = "";
  item.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.addEventListener("click", () => checkAnswer(choice));
    choicesEl.appendChild(btn);
  });
}

// Check answer
function checkAnswer(selected) {
  if (answered) return;
  answered = true;

  const item = shuffledGallery[currentSlide];
  if (selected === item.answer) {
    feedbackEl.textContent = "Correct!";
    score++;
    scoreEl.textContent = score;
  } else {
    feedbackEl.textContent = `Wrong! Correct answer: ${item.answer}`;
  }

  if (item.fact || item.link) {
    learnBtn.style.display = "inline-block";
  }
}

// Toggle Learn More
learnBtn.addEventListener("click", () => {
  learnMoreDiv.style.display = learnMoreDiv.style.display === "none" ? "block" : "none";
});

// Next button
nextBtn.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide >= shuffledGallery.length) currentSlide = 0; // loop
  loadArt();
});

// Reset button
resetBtn.addEventListener("click", () => {
  score = 0;
  scoreEl.textContent = score;
  currentSlide = 0;
  shuffleGallery();
  loadArt();
});

// Initial setup
shuffleGallery();
loadArt();
