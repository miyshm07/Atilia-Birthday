/* LOADING */

setTimeout(() => {

    document.querySelector(".loading-screen").style.display = "none";

}, 2500);

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

    alert("secret unlocked: you're genuinely one of my favorite people 🤍");

});

/* LETTERS */

function showMessage(type){

    const output = document.getElementById("letter-output");

    if(type === "sad"){

        output.innerText =
        "bad days eventually pass. but your chaos somehow stays forever 🤍";
    }

    if(type === "tired"){

        output.innerText =
        "please sleep before turning into a clinically exhausted raccoon";
    }

    if(type === "miss"){

        output.innerText =
        "unfortunately for you, i'm always here";
    }
}

/* CAKE */

const cakeBtn = document.getElementById("cake-btn");

cakeBtn.addEventListener("click", () => {

    cakeBtn.innerText = "🕯 candle blown!";

    document.getElementById("cake-message")
    .innerText =
    "WISH ACCEPTED ✨🎂";

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

    return "you haven't finished being appreciated yet";
};