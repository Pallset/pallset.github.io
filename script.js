const text = "Halo Perkenalkan Nama Saya Adalah PallxMods. Saya Suka Membuat Project Kecil. Saya Suka Membagikan Project Saya Dengan Gratis Di Channel Telegram @SharingScript ";
let index = 0;
const typingText = document.getElementById("typing-text");

function typeWriter() {
    typingText.innerText = text.substring(0, index);
    index++;
    if (index > text.length) {
        index = 0;
    }
    setTimeout(typeWriter, 50);
}
typeWriter();

// Meteor Effect
const canvas = document.getElementById("meteorCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const meteors = [];

class Meteor {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 20 + 10;
        this.speed = Math.random() * 5 + 2;
        this.opacity = Math.random();
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.length, this.y + this.length);
        ctx.strokeStyle = `rgba(173, 216, 230, ${this.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    update() {
        this.x -= this.speed;
        this.y += this.speed;
        if (this.x < 0 || this.y > canvas.height) {
            this.x = Math.random() * canvas.width;
            this.y = -10;
        }
    }
}

for (let i = 0; i < 50; i++) {
    meteors.push(new Meteor());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    meteors.forEach(meteor => {
        meteor.update();
        meteor.draw();
    });
    requestAnimationFrame(animate);
}
animate();
