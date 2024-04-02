let user = [];
let device = [];
let level = 0;
let started = false;
let h2 = document.querySelector('h2');
let buttons = document.querySelectorAll('.box');
let score = 0;

document.addEventListener('keypress', function() {
    if (!started) {
        started = true;
        levelup();
    }

    // levelup();
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
    if (!started) return;
    let btn = this;
    let color = btn.getAttribute("id")+"2";
    btn.classList.add(color);
    setTimeout(function() {
        btn.classList.remove(color);
    }, 500);

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
        h2.innerText = `Game Over! Your total score is ${score}\nPress any key to start again`;
        reset();
    }
}

function reset() {
    level = 0;
    started = false;
    device = [];
    user = [];
    score = 0;
}

for (btn of buttons) {
    btn.addEventListener('click', userClick);
}