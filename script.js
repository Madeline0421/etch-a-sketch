const gridContainer = document.querySelector('.grid-container');
const value = document.querySelector('#value');
const gridInput = document.querySelector('#grid-input'); 

value.textContent = "Grid Size: " + gridInput.value;

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

function reset() {
    document.querySelectorAll(".grid-item").forEach((e) => e.parentNode.removeChild(e));
  }

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

function changeColor(e) { 
    e.target.classList.add('change-color');
}

