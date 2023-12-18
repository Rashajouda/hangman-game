let letters = "abcdefghijklmnopqrstuvwxyz";
let letArray = Array.from(letters);
let lettCon = document.querySelector(".letters");
letArray.forEach((letter) => {
  let span = document.createElement("span");
  let lett = document.createTextNode(letter);
  span.appendChild(lett);
  lettCon.appendChild(span);
  span.className = "letter-box";
});
const words = {
  programming: ["html", "css", "js", "go", "php", "sql", "python"],
  movies: ["harry", "twilight", "huntter", "charli chabin", "joliet"],
  sport: ["football", "volyball", "tennis", "golf", "basket"],
  countries: ["egypt", "palestine", "ksa", "syria", "lebanon"],
};
let prop = Object.keys(words);
let randPro = prop[Math.floor(Math.random() * prop.length)];
let randVa = words[randPro][Math.floor(Math.random() * words[randPro].length)];
document.querySelector(".game-info .catogory span").innerHTML = randPro;
let letguess = document.querySelector(".letters-guess");
let arguess = randVa.split("");
arguess.forEach((letter) => {
  let guessSpan = document.createElement("span");
  if (letter === " ") {
    guessSpan.classList.add("with-space");
  }
  guessSpan.classList.add("guess-span");
  letguess.appendChild(guessSpan);
});
let wrongAttempts = 0;
let drow = document.querySelector(".hangman");
let lett = document.querySelectorAll(".letter-box span");
document.addEventListener("click", function (l) {
  let status1 = false;
  if (l.target.className === "letter-box") {
    l.target.classList.add("clicked");
    let theLetter = l.target.innerHTML.toLowerCase();
    let aV = Array.from(randVa);
    aV.forEach((letter, index) => {
      if (letter === theLetter) {
        status1 = true;
        let guess = document.querySelectorAll(".letters-guess span");
        guess[index].innerHTML = theLetter;
      }
    });
    if (status1 !== true) {
      wrongAttempts++;
      drow.classList.add(`wrong-${wrongAttempts}`);
    }
  }
  if (drow.classList.contains("wrong-9")) {
    document.getElementById("lose").play();
    let loseDiv = document.createElement("div");
    let loseP = document.createElement("p");
    let loseText = document.createTextNode("Hard luck, you lost");
    loseP.appendChild(loseText);
    loseDiv.appendChild(loseP);
    loseDiv.className = "lose";
    document.body.appendChild(loseDiv);
    lettCon.classList.add("finished");
  }
  let guess = document.querySelectorAll(".letters-guess span");
  let i = 0;
  let count = 0;
  guess.forEach((e) => {
    if (e.innerHTML === randVa[i]) {
      count++;
      i++;
    }
});
    if (count == guess.length) {
      document.getElementById("win").play();
      let winDiv = document.createElement("div");
      let winP = document.createElement("p");
      let winText = document.createTextNode("Hard luck, you lost");
      winP.appendChild(winText);
      winDiv.appendChild(winP);
      winDiv.className = "win";
      document.body.appendChild(winDiv);
      lettCon.classList.add("finished");
    }

});
