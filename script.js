const container = document.querySelector('#container');


function grid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for(i = 0; i < (rows * cols); i++) {
        const div = document.createElement('div')
        div.classList.add('square');
        container.appendChild(div);
    }
}
grid(16, 16);
