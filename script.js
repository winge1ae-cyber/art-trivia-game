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
    file: "1926.417 - The Bedroom.jpg",
    question: "Who painted this?",
    choices: ["Vincent van Gogh", "Claude Monet", "Pierre-Auguste Renoir", "James McNeill Whistler"],
    answer: "Vincent van Gogh",
    fact: "Vincent van Gogh so highly esteemed his bedroom painting that he made three distinct versions: the first, now in the collection of the Van Gogh Museum, Amsterdam; the second, belonging to the Art Institute of Chicago, painted a year later on the same scale and almost identical; and a third, smaller canvas in the collection of the Musée d’Orsay, Paris...",
    link: "https://www.artic.edu/artworks/28560/the-bedroom"
  },
  {
    file: "1926.224 - A Sunday on La Grande Jatte — 1884.jpg",
    question: "Who painted this?",
    choices: ["Georges Seurat", "Claude Monet", "Vincent van Gogh", "Pierre-Auguste Renoir"],
    answer: "Georges Seurat",
    fact: "In his best-known and largest painting, Georges Seurat depicted people from different social classes strolling and relaxing in a park on La Grande Jatte...",
    link: "https://www.artic.edu/iiif/2/2d484387-2509-5e8e-2c43-22f9981972eb/full/!3000,3000/0/default.jpg"
  },
  {
    file: "1933.1157 - Water Lilies.jpg",
    question: "Who painted this?",
    choices: ["Claude Monet", "Edgar Degas", "James McNeill Whistler", "Pierre-Auguste Renoir"],
    answer: "Claude Monet",
    fact: "“One instant, one aspect of nature contains it all,” said Claude Monet, referring to his late masterpieces, the water landscapes produced at his home in Giverny between 1897 and 1926...",
    link: "https://www.artic.edu/artworks/14644/water-lilies"
  },
  {
    file: "1933.455 - Two Sisters (On the Terrace).jpg",
    question: "Who painted this?",
    choices: ["Pierre-Auguste Renoir", "Claude Monet", "Vincent van Gogh", "Edgar Degas"],
    answer: "Pierre-Auguste Renoir",
    fact: "He loves everything that is joyous, brilliant, and consoling in life,” an anonymous interviewer once wrote about Pierre-Auguste Renoir. This painting depicts the radiance of young women on a warm day...",
    link: "https://www.artic.edu/artworks/14655/two-sisters-on-the-terrace"
  },
  {
    file: "1981.12 - Ballet at the Paris Opéra.jpg",
    question: "Who painted this?",
    choices: ["Edgar Degas", "Claude Monet", "Pierre-Auguste Renoir", "James McNeill Whistler"],
    answer: "Edgar Degas",
    fact: "This work, executed on one of the widest monotype plates ever used by Degas, bears his characteristically cropped forms and odd vantage points...",
    link: "https://www.artic.edu/artworks/61603/ballet-at-the-paris-opera"
  },
  {
    file: "1942.311 - Fish (Still Life).jpg",
    question: "Who painted this?",
    choices: ["Édouard Manet", "Claude Monet", "James McNeill Whistler", "Frans Hals"],
    answer: "Édouard Manet",
    fact: "Although still-life ensembles were an important element in many of Manet's paintings, his sustained interest in the genre was from 1864 to 1865...",
    link: "https://www.artic.edu/artworks/43838/fish-still-life"
  },
  {
    file: "1933.443 - Cliff Walk at Pourville.jpg",
    question: "Who painted this?",
    choices: ["Claude Monet", "Pierre-Auguste Renoir", "James McNeill Whistler", "Edgar Degas"],
    answer: "Claude Monet",
    fact: "Monet addressed the problem of inserting figures into a landscape without disrupting the unity of its painterly surface...",
    link: "https://www.artic.edu/artworks/14643/cliff-walk-at-pourville"
  },
  {
    file: "1933.441 - Water Lily Pond.jpg",
    question: "Who painted this?",
    choices: ["Claude Monet", "James McNeill Whistler", "Edgar Degas", "Pierre-Auguste Renoir"],
    answer: "Claude Monet",
    fact: "Water Lily Pond was among the 18 similar versions he made in 1899–1900, featuring lilies mingling with reflections on the pond’s surface...",
    link: "https://www.artic.edu/artworks/14645/water-lily-pond"
  },
  {
    file: "1900.52 - Nocturne_ Blue and Gold—Southampton Water.jpg",
    question: "Who painted this?",
    choices: ["James McNeill Whistler", "Claude Monet", "Edgar Degas", "Pierre-Auguste Renoir"],
    answer: "James McNeill Whistler",
    fact: "In the early 1870s Whistler took a radical step toward abstraction with his Nocturnes series...",
    link: "https://www.artic.edu/artworks/56905/nocturne-blue-and-gold-southampton-water"
  },
  {
    file: "1962.960 - Resting.jpg",
    question: "Who painted this?",
    choices: ["Antonio Mancini", "Edgar Degas", "Claude Monet", "James McNeill Whistler"],
    answer: "Antonio Mancini",
    fact: "Resting | The Art Institute of Chicago",
    link: "https://www.artic.edu/artworks/1962.960/resting"
  },
  {
    file: "1922.434 - The Place du Havre, Paris.jpg",
    question: "Who painted this?",
    choices: ["Camille Pissarro", "Claude Monet", "Edgar Degas", "Pierre-Auguste Renoir"],
    answer: "Camille Pissarro",
    fact: "After experimenting with Neo-Impressionist style, Pissarro returned to the loose, multidirectional brushstrokes of his earlier Impressionist works...",
    link: "https://www.artic.edu/artworks/1922.434/the-place-du-havre-paris"
  },
  {
    file: "1938.1276 - Approaching Storm.jpg",
    question: "Who painted this?",
    choices: ["Eugène-Louis Boudin", "Claude Monet", "James McNeill Whistler", "Pierre-Auguste Renoir"],
    answer: "Eugène-Louis Boudin",
    fact: "This painting by Boudin, Monet’s teacher, exemplifies his signature style and subject matter in the 1860s...",
    link: "https://www.artic.edu/artworks/1938.1276/approaching-storm"
  },
  {
    file: "Nighthawks.jpg",
    question: "Who painted this?",
    choices: ["Edward Hopper", "Claude Monet", "James McNeill Whistler", "Pierre-Auguste Renoir"],
    answer: "Edward Hopper",
    fact: "About Nighthawks: Hopper recollected, 'unconsciously, probably, I was painting the loneliness of a large city.'",
    link: "https://www.artic.edu/artworks/111628/nighthawks"
  },
  {
    file: "1906.99 - The Assumption of the Virgin.jpg",
    question: "Who painted this?",
    choices: ["El Greco", "Caravaggio", "Rembrandt van Rijn", "Frans Hals"],
    answer: "El Greco",
    fact: "This painting was the central element of the altarpiece that was El Greco’s first major Spanish commission and first large public work...",
    link: "https://www.artic.edu/artworks/87479/the-assumption-of-the-virgin"
  },
  {
    file: "1922.4467 - Old Man with a Gold Chain.jpg",
    question: "Who painted this?",
    choices: ["Rembrandt van Rijn", "Frans Hals", "Jan de Baen", "Jan Havicksz Steen"],
    answer: "Rembrandt van Rijn",
    fact: "This evocative character study is an early example of a subject that preoccupied Rembrandt throughout his career...",
    link: "https://www.rijksmuseum.nl/en/collection/SK-A-4467"
  },
  {
    file: "SK-A-2344 - The Milkmaid.jpg",
    question: "Who painted this?",
    choices: ["Johannes Vermeer", "Frans Hals", "Rembrandt van Rijn", "Jan Havicksz Steen"],
    answer: "Johannes Vermeer",
    fact: "The Milkmaid is a celebrated example of Vermeer’s attention to light and texture...",
    link: "https://www.rijksmuseum.nl/en/collection/SK-A-2344"
  },
  {
    file: "SK-C-5 - The Night Watch.jpg",
    question: "Who painted this?",
    choices: ["Rembrandt van Rijn", "Frans Hals", "Jan de Baen", "Jan Luyken"],
    answer: "Rembrandt van Rijn",
    fact: "Rembrandt’s largest, most famous canvas was made for the Arquebusiers guild hall...",
    link: "https://www.rijksmuseum.nl/en/collection/SK-C-5"
  },
  {
    file: "SK-A-133 - Portrait of a Married Couple.jpg",
    question: "Who painted this?",
    choices: ["Frans Hals", "Rembrandt van Rijn", "Jan de Baen", "Jan Havicksz Steen"],
    answer: "Frans Hals",
    fact: "Huwelijksportret van Isaac Abrahamsz Massa en Beatrix van der Laen, seated on a raised platform beneath a tree...",
    link: "https://www.rijksmuseum.nl/en/collection/SK-A-133"
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
