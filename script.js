/* LOADING */

setTimeout(() => {

    document.querySelector(".loading-screen").style.display = "none";

}, 15000);

/* MUSIC */

const music = document.getElementById("bg-music");

const musicBtn = document.getElementById("music-btn");

music.volume = 0.3;

musicBtn.addEventListener("click", () => {

    if(music.paused){

        music.play();

        musicBtn.innerText = "⏸ pause music";

    }else{

        music.pause();

        musicBtn.innerText = "🎵 play music";
    }

});

/* SECRET STAR */

document.querySelector(".secret-star")
.addEventListener("click", () => {

    alert("you're genuinely one of my favorite people🤍 & thank you for being my friend Atiliaa");

});

/* LETTERS */

function showMessage(type){

    const output = document.getElementById("letter-output");

    if(type === "sad"){

        output.innerText =
        "Chat je akuu. I may not really know what to say, but i hope you know you’re appreciated more than you think. take care of yourself Atilia🤍";
    }

    if(type === "tired"){

        output.innerText =
        "Siapa suruh tidur lambat & scroll tiktok. Please go sleep";
    }

    if(type === "miss"){

        output.innerText =
        "Skill issue";
    }
}

/* CAKE */

const cakeBtn = document.getElementById("cake-btn");

cakeBtn.addEventListener("click", () => {

    cakeBtn.innerText = "🕯 candle blown!";

    document.getElementById("cake-message")
    .innerText =
    "WISH ACCEPTED✨🎂\nNow you can spend infinite time with Danish, lucky you🙄";

    createConfetti();
});

/* CONFETTI */

function createConfetti(){

    for(let i=0; i<80; i++){

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * window.innerWidth + "px";

        confetti.style.top = "-10px";

        confetti.style.animationDuration =
        (Math.random() * 3 + 2) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        },5000);
    }
}

/* EXIT MESSAGE */

window.onbeforeunload = function () {

    return "you haven't finished being appreciated yet, go back";
};

function checkPassword(){

    const input = document.getElementById("password-input").value;

    const box = document.querySelector(".lock-box");

    const correctPassword = "230507"; // CHANGE THIS

    if(input === correctPassword){

        document.getElementById("password-screen").style.display = "none";

    } else {

        document.getElementById("error-msg").innerText = "wrong password";

        box.classList.add("shake");

        setTimeout(() => {
            box.classList.remove("shake");
        },300);
    }
}
const emojis = ["🐵", "🤍", "✨", "🎀", "⭐", "💌", "🧸"];

const container = document.getElementById("bg-container");

for (let i = 0; i < 30; i++) {
  const item = document.createElement("div");
  item.className = "bg-item";

  item.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  item.style.left = Math.random() * 100 + "vw";
  item.style.top = Math.random() * 100 + "vh";

  item.style.fontSize = (16 + Math.random() * 20) + "px";
  item.style.animationDuration = (3 + Math.random() * 5) + "s";
  item.style.opacity = (0.15 + Math.random() * 0.3);

  container.appendChild(item);
}