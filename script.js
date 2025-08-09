// Button click action - open link
document.getElementById("surpriseBtn").addEventListener("click", () => {
  window.open("https://github.com/"); // Apna link yaha daalo
});

// Confetti animation
const confettiCanvas = document.getElementById("confettiCanvas");
const ctx = confettiCanvas.getContext("2d");
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confetti = [];

function ConfettiPiece() {
  this.x = Math.random() * confettiCanvas.width;
  this.y = Math.random() * confettiCanvas.height - confettiCanvas.height;
  this.size = Math.random() * 8 + 2;
  this.speed = Math.random() * 3 + 2;
  this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function createConfetti() {
  for (let i = 0; i < 150; i++) {
    confetti.push(new ConfettiPiece());
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confetti.forEach((c) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
  });
}

function updateConfetti() {
  confetti.forEach((c) => {
    c.y += c.speed;
    if (c.y > confettiCanvas.height) {
      c.y = -10;
      c.x = Math.random() * confettiCanvas.width;
    }
  });
}

function animateConfetti() {
  drawConfetti();
  updateConfetti();
  requestAnimationFrame(animateConfetti);
}

createConfetti();
animateConfetti();

window.addEventListener("resize", () => {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});
