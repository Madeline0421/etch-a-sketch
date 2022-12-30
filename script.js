/**
 * Create a webpage with 16 x 16 divs. 
 * Use for loop? 
 */

const gridContainer = document.querySelector('.grid-container');

let size = 256; 

for (let i = 0; i < size; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridContainer.append(gridItem);
        
        gridItem.addEventListener('mousedown', () => {
            allItems.forEach(item => { 
                item.addEventListener('mouseover', changeColor)
            });
        });
}
const allItems = document.querySelectorAll('.grid-item');

function changeColor(e) { 
    e.target.classList.add('change-color');
}


