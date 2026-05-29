setTimeout(() => {
    document.querySelector(".loading-screen").style.display = "none";
}, 2500);

const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

musicBtn.addEventListener("click", () => {

    if(music.paused){
        music.play();
        musicBtn.innerText = "⏸ Pause Music";
    }else{
        music.pause();
        musicBtn.innerText = "🎵 Play Music";
    }

});

document.querySelector(".secret-star")
.addEventListener("click", () => {

    alert("you found the secret message: you're genuinely important to me 🤍");

});

function showMessage(type){

    const output = document.getElementById("letter-output");

    if(type === "sad"){
        output.innerText =
        "everything will pass eventually, including bad days 🤍";
    }

    if(type === "tired"){
        output.innerText =
        "go drink water and sleep before becoming a zombie";
    }

    if(type === "miss"){
        output.innerText =
        "skill issue honestly";
    }

}window.onbeforeunload = function () {
    return "you haven't finished being appreciated yet";
};

document.getElementById("cake-btn")
.addEventListener("click", () => {

    document.getElementById("cake-message")
    .innerText =
    "WISH ACCEPTED ✨";

});