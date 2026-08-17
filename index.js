// BATU GUNTING KERTAS

let playerScore = 0;
let computerScore = 0;

// Buat tampilan skor otomatis
const scoreDisplay = document.getElementById("scoreDisplay");


document.body.appendChild(scoreDisplay);


function playGame(playerChoice) {
    const choices = ["Batu", "Gunting", "Kertas"];
    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    const playerDisplay =
        document.getElementById("playerDisplay");

    const computerDisplay =
        document.getElementById("computerDisplay");

    const resultDisplay =
        document.getElementById("resultDisplay");

    playerDisplay.textContent =
        "PLAYER: " + playerChoice;

    computerDisplay.textContent =
        "COMPUTER: " + computerChoice;

    let result;

    // SERI
    if (playerChoice === computerChoice) {

        result = "🤝 IMBANG";
        resultDisplay.style.color = "orange";
        resultDisplay.style.transform = "scale(1)";
        resultDisplay.style.alignItems = "center";
    }

    // PLAYER MENANG
    else if (
        (playerChoice === "Batu" && computerChoice === "Gunting") ||
        (playerChoice === "Gunting" && computerChoice === "Kertas") ||
        (playerChoice === "Kertas" && computerChoice === "Batu")
    ) {

        playerScore++;

        result = "🎉 KAMU MENANG! 🎉";

        resultDisplay.style.color = "lime";
        resultDisplay.style.transform = "scale(1.4)";
        resultDisplay.style.transition = "0.3s";

        // Efek getar
        document.body.style.animation = "shake 0.5s";

        setTimeout(() => {
            document.body.style.animation = "";
        }, 500);

        // Confetti
        createConfetti();
    }

    // COMPUTER MENANG
    else {

        computerScore++;

        result = "😢 KAMU KALAH!";

        resultDisplay.style.color = "red";
        resultDisplay.style.transform = "scale(1)";
    }

    resultDisplay.textContent = result;

    // Update score
    scoreDisplay.innerHTML = `
        🙍🏻‍♂️ PLAYER: <b>${playerScore}</b>
        &nbsp;&nbsp; | &nbsp;&nbsp;
        🤖 COMPUTER: <b>${computerScore}</b>
    `;
}


// Efek confetti
function createConfetti() {

    for (let i = 0; i < 40; i++) {

        const confetti = document.createElement("div");

        confetti.textContent = "🎉";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = "25px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration = 1000 + Math.random() * 2000;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(100vh) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration);
    }
}