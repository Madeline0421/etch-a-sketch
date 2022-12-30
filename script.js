/**
 * Create a webpage with 16 x 16 divs. 
 * Use for loop? 
 */

const gridContainer = document.querySelector('.grid-container');

{/* <div id="value">16 x 16</div>
<input type="range" id="grid-input" min="16" max ="50" step="1"> */}

const value = document.querySelector('#value');
const gridInput = document.querySelector('#grid-input'); 

value.textContent = gridInput.value;


gridInput.addEventListener('input', (e) => {
    value.textContent = e.target.value;
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
    }
    const allItems = document.querySelectorAll('.grid-item');

    allItems.forEach(item => { 
        item.addEventListener('mouseover', changeColor)
    });
    gridContainer.setAttribute('style',
    // updating the attribute with the following concatenated string:
    'grid-template-columns: repeat(' + rowSize + ', 1fr)');

}

function changeColor(e) { 
    e.target.classList.add('change-color');
}

