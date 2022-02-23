
const container = document.querySelector('#container');
const color = document.querySelector('#color');
const colorPicker = document.querySelector('#colorpicker');
const rainbow = document.querySelector('#rainbow');
const eraser = document.querySelector('#eraser');
const clear = document.querySelector('#clear');
const size = document.querySelector('#size');
const thisBtn = document.querySelector('.buttons').querySelectorAll('.this');
console.log(thisBtn);

let gridSize = 16;

function grid(value) {
    container.style.display = 'grid';
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${value},1fr)`;
    
    for(i = 0; i < value*value; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.backgroundColor = 'white';
        container.appendChild(div);
    }
}

grid(gridSize);

thisBtn.forEach(elem => {
    elem.addEventListener('click', function() {
        thisBtn.forEach(btn => btn.classList.remove('active'))

        this.classList.add('active');
    })
})

const randomColor = () => {
    let letters = '123456789ABCDEF';
    let color = '#';
    for(i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function rainbowBtn() {
    const squares = container.querySelectorAll('.square');
    rainbow.addEventListener('click', () => {
        squares.forEach(square => square.addEventListener('mouseover', () => {
            square.style.background = randomColor();
        }))
    })
}

function eraserBtn() {
    const squares = container.querySelectorAll('.square');
    eraser.addEventListener('click', () => {
        squares.forEach(square => square.addEventListener('mouseover', () => {
            square.style.background = '#fff';
        }))
    })
}

function colorBtn() {
    const squares = container.querySelectorAll('.square');
    color.addEventListener('click', () => {
        squares.forEach(square => square.addEventListener('mouseover', (e) => {
            let chooseColor = colorPicker.value;
            e.target.style.background = chooseColor;
        }))
    })
}

function clearBtn() {
    clear.addEventListener('click', () => {
        rainbow.classList.remove('active');
        color.classList.remove('active');
        eraser.classList.remove('active');
        container.innerHTML = '';
        grid(16);
        rainbowBtn();
        eraserBtn();
        colorBtn();
    })
}

function clearB() {
    const squares = container.querySelectorAll('.square');
    squares.forEach(square => square.remove());
}

function sizeBtn() {
    size.addEventListener('click', () => {
        rainbow.classList.remove('active');
        color.classList.remove('active');
        eraser.classList.remove('active');
        let user = prompt('Choose a number from 1 to 100');
        if(user === null || user < 1 || user > 100) {
            alert('You didn\'t choose a number from 1 to 100');
            clearB();
            grid(16);
            rainbowBtn();
            eraserBtn();
            colorBtn();
        } else {
            clearB();
            grid(user);
            rainbowBtn();
            eraserBtn();
            colorBtn();
        }
    })
}


rainbowBtn();
eraserBtn();
colorBtn();
clearBtn();
sizeBtn();
