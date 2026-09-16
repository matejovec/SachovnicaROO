"use strict";
let width = document.getElementById('container').clientWidth;
let height = document.getElementById('container').clientHeight;
let boxWidth = width / 8;
let boxHeight = height / 8;
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let box = document.createElement('div');
        box.style.width = boxWidth + 'px';
        box.style.height = boxHeight + 'px';
        box.style.backgroundColor = (i + j) % 2 === 0 ? 'white' : 'black';
        document.getElementById('container').appendChild(box);
    }
}
