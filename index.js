// BATU GUNTING KERTAS

let playerScore = 0;
let computerScore = 0;

// Tampilan skor
const scoreDisplay = document.createElement("div");
scoreDisplay.id = "scoreDisplay";
scoreDisplay.innerHTML = "🏆 PLAYER: 0 | 🤖 COMPUTER: 0";
document.body.appendChild(scoreDisplay);


// ==========================
// GAME BATU GUNTING KERTAS
// ==========================
function playGame(playerChoice) {

    const choices = ["Batu", "Gunting", "Kertas"];

    // Pilihan komputer
    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    // Tampilkan pilihan player
    document.getElementById("playerDisplay").textContent =
        "PLAYER: " + playerChoice;

    // Tampilkan pilihan komputer
    document.getElementById("computerDisplay").textContent =
        "COMPUTER: " + computerChoice;

    let result = "";

    // RESET UKURAN HASIL
    const resultDisplay =
        document.getElementById("resultDisplay");

    resultDisplay.style.transform = "scale(1)";
    resultDisplay.style.transition = "0.3s";


    // ==========================
    // SERI
    // ==========================
    if (playerChoice === computerChoice) {

        result = "🤝 SERI!";
        resultDisplay.style.color = "orange";

    }

    // ==========================
    // PLAYER MENANG
    // ==========================
    else if (
        (playerChoice === "Batu" &&
         computerChoice === "Gunting") ||

        (playerChoice === "Gunting" &&
         computerChoice === "Kertas") ||

        (playerChoice === "Kertas" &&
         computerChoice === "Batu")
    ) {

        playerScore++;
result = "🎉KAMU MENANG!🎉";

resultDisplay.style.color = "lime";
resultDisplay.style.transform = "scale(1)";
resultDisplay.classList.add("win-effect");

setTimeout(() => {
    resultDisplay.classList.remove("win-effect");
}, 500);
        // Efek kemenangan
        createConfetti();
    }

    // ==========================
    // COMPUTER MENANG
    // ==========================
    else {

        computerScore++;

        result = "😢 KAMU KALAH!";

        resultDisplay.style.color = "red";
    }


    // Tampilkan hasil
    resultDisplay.textContent = result;


    // Update skor
    scoreDisplay.innerHTML =
        "🏆 PLAYER: " + playerScore +
        " | 🤖 COMPUTER: " + computerScore;
}
// ==========================
// CONFETTI
// ==========================
function createConfetti() {

    for (let i = 0; i < 30; i++) {

        const confetti = document.createElement("div");

        confetti.textContent = "🎉";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = "25px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const animation = confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        "translateY(100vh) rotate(" +
                        Math.random() * 720 +
                        "deg)",
                    opacity: 0
                }
            ],
            {
                duration: 1500 + Math.random() * 1500,
                easing: "ease-out"
            }
        );

        animation.onfinish = function () {
            confetti.remove();
        };
    }
}