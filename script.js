const gridContainer = document.querySelector('.grid-container');
const value = document.querySelector('#value');
const gridInput = document.querySelector('#grid-input'); 

const resetButton = document.querySelector('#reset');
const rainbowButton = document.querySelector('#rainbow');
const blackButton = document.querySelector('#black');

value.textContent = "Grid Size: " + 16;
let rainbowColors = false;
let blackColor = true;

/**
 * Updates size of the grid
 */
gridInput.addEventListener('input', (e) => {
    value.textContent = "Grid Size: " + e.target.value;
    console.log(typeof (value.textContent));
    rowSize = parseInt(e.target.value);
    size = rowSize * rowSize;  
    createGrid();
    console.log("size: " + rowSize);
});

rowSize = 16;
size = 256;
createGrid();

function createGrid() {
    reset();
    for (let i = 0; i < size; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridContainer.append(gridItem);
        gridItem.addEventListener('mouseover', changeColor);
    }
    gridContainer.setAttribute('style',
    'grid-template-columns: repeat(' + rowSize + ', 1fr)');

}

function reset() {
    document.querySelectorAll(".grid-item").forEach((e) => e.parentNode.removeChild(e));
}

resetButton.addEventListener('click', () => {
    allItems = document.querySelectorAll('.grid-item');
    allItems.forEach((item) => {
        item.classList.remove('black-bg');
    });
});

rainbowButton.addEventListener('click', () => {
    rainbowColors = true;
    blackColor = false;
});

blackButton.addEventListener('click', () => {
    blackColor = true;
    rainbowColors = false;
});

function changeColor(e) { 
    if (rainbowColors) { 
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.classList.remove('black-bg');
        e.target.setAttribute('style', 'background-color: #' + randomColor);
    } else if (blackColor) { 
        e.target.removeAttribute('style');
        e.target.classList.add('black-bg');

    }
}