let player1 = 6;
let player2 = 6;

function randomNumber() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    return randomNum;
}

function setUpDiceInteractions() {
    const players = document.getElementsByClassName("player");
    for (let i = 0; i < players.length; i++) {
        const childrenArray = [...players[i].children];
        const img = childrenArray.find((el) => {
            if (el.tagName === "IMG") return el;
        });
        addEventListenersToImg(img, players[i]);
    }
}

function addEventListenersToImg(imgEl, player) {
    console.log("player", player.children);
    imgEl.addEventListener("mouseover", () => {
        imgEl.classList.add("wiggle");
    });
    imgEl.addEventListener("mouseleave", () => {
        imgEl.classList.remove("wiggle");
    });
    imgEl.addEventListener("click", () => {
        imgEl.classList.remove("wiggle");
        imgEl.classList.add("spin");
        const randomNum = randomNumber();
        const path = "images/dice_" + randomNum + ".png";
        imgEl.setAttribute("src", path);
        setTimeout(() => {
            imgEl.classList.remove("spin");
        }, 500);
        setPlayerRoll(player, imgEl);
    });
}

function getImageNumber(imgEl) {
    const path = imgEl.getAttribute("src");
    const number = path.slice(12, 13);
    return number;
}

function getPlayerNumber(playerEl) {
    const h2 = playerEl.children[0].innerText;
    const playerNum = h2[h2.length - 1];
    return playerNum;
}

function setPlayerRoll(player, imgEl) {
    const imgNum = getImageNumber(imgEl);
    const playerNum = getPlayerNumber(player);
    if (playerNum === 1) player1 = imgNum;
    else player2 = imgNum;
}

// Compare rolls and toggle sparkle image for highest roll

setUpDiceInteractions();
