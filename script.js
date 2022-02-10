const container = document.querySelector('#container');

function grid(x, y) {
    container.style.display = 'grid';
    container.style.gridTemplateRows = `repeat(${x}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${y},1fr)`;

    for(i = 0; i < x*y; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
}

grid(16, 16);

