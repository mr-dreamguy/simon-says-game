let user = [];
let device = [];
let level = 0;
let started = false;
let h2 = document.querySelector('h2');
let buttons = document.querySelectorAll('.box');
let score = 0;
let key = document.querySelector('button');

// document.addEventListener('keypress', function() {
//     if (!started) {
//         started = true;
//         levelup();
//     }

//     // levelup();
// });


key.addEventListener('click', function() {
    if (!started) {
        started = true;
        key.innerText = 'Stop Game'
        key.classList.toggle('endgame');
        levelup();
    } else {
        reset();
    }
});

function levelup() {
    level++;
    h2.innerText = `Level ${level}`;

    let random = Math.floor(Math.random()*4);
    device.push(random);
    user = [];
    flashButton(buttons[random]);
}

function flashButton(btn) {
    let color = btn.getAttribute("id")+"2";
    btn.classList.add(color);
    setTimeout(function() {
        btn.classList.remove(color);
    }, 500);
}

function userClick() {
    let btn = this;
    let color = btn.getAttribute("id")+"2";
    btn.classList.add(color);
    setTimeout(function() {
        btn.classList.remove(color);
    }, 500);

    if (!started) return;

    user.push(indexOf(btn));
    check(user.length-1);
}

function indexOf(btn) {
    for (let i = 0; i < buttons.length; i++) {
        if (btn == buttons[i]) return i;
    }
}

function check(idx) {
    score++;
    if (user[idx] == device[idx]) {
        if (idx == device.length-1) {
            setTimeout(levelup, 1000);
        }
    } else {
        reset();
    }
}

function reset() {
    h2.innerText = `Game Over! Your total score is ${score}\nPress any key to start again`;
    key.classList.toggle('endgame');
    key.innerText = 'Start Game';
    level = 0;
    started = false;
    device = [];
    user = [];
    score = 0;
}

for (btn of buttons) {
    btn.addEventListener('click', userClick);
}