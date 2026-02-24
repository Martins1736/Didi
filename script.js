function checkDate() {
    const input = document.getElementById("birthdate").value;
    const error = document.getElementById("error");

   const correctDate = "2026-02-25"; // CHANGE THIS

    if (input === correctDate) {
        document.body.style.opacity = "0";
        setTimeout(() => {
            window.location.href = "surprise.html";
        }, 800);
    } else {
        error.textContent = "Hmm… that doesn’t look right 💔";
        const container = document.querySelector(".gate-container");
        container.classList.add("shake");

        setTimeout(() => {
            container.classList.remove("shake");
        }, 300);
    }
}

function openGift(number) {

    if (number === 1) {
        window.location.href = "letter.html";
    } else if (number === 2) {
        window.location.href = "gallery.html";
    }

}

let letterAlreadyOpened = false;

function openEnvelope() {

    if (letterAlreadyOpened) return; // prevents double typing
    letterAlreadyOpened = true;

    const envelope = document.querySelector(".envelope");
    const textElement = document.getElementById("typedText");

    if (!envelope || !textElement) return;

    envelope.classList.add("open");

    const message = "Happy Birthday Didi💜\n\n I wish you many years ahead and i hope this makes up for the val too. See you when you get back, Martins loves you💜. ";

    textElement.innerHTML = ""; // clear before typing

    let index = 0;

    function type() {
        if (index < message.length) {
            textElement.innerHTML += message.charAt(index);
            index++;
            setTimeout(type, 40);
        }
    }

    setTimeout(type, 800);
}
function goBack() {
    window.location.href = "surprise.html";
}

function changeImage(element) {
    const mainImage = document.getElementById("mainImage");
    mainImage.style.opacity = 0;

    setTimeout(() => {
        mainImage.src = element.src;
        mainImage.style.opacity = 1;
    }, 200);
}

function changeImage(element) {
    document.getElementById("mainImage").src = element.src;
}

/* ================= CONTINUOUS FALLING HEARTS ================= */

const confettiContainer = document.querySelector('.confetti-container');

function createConfetti() {
    if (!confettiContainer) return;

    const heart = document.createElement('div');
    heart.classList.add('confetti');
    heart.innerHTML = "💜";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
    heart.style.fontSize = (Math.random() * 10 + 14) + "px";

    confettiContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createConfetti, 400);

/* ================= COLOR CONFETTI ================= */

function createConfettiPiece() {

    if (!confettiContainer) return;

    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');

    const colors = [
        "#ff69b4", // pink
        "#c77dff", // purple
        "#ffffff", // white
        "#ffd700", // gold
        "#00ffff" // cyan sparkle
    ];

    piece.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

    piece.style.left = Math.random() * 100 + "vw";

    piece.style.animationDuration =
        (Math.random() * 3 + 3) + "s";

    piece.style.width =
        (Math.random() * 6 + 4) + "px";

    piece.style.height =
        (Math.random() * 10 + 6) + "px";

    confettiContainer.appendChild(piece);

    setTimeout(() => {
        piece.remove();
    }, 6000);
}

/* Continuous particle confetti */

setInterval(createConfettiPiece, 300);
