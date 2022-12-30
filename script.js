/**
 * Create a webpage with 16 x 16 divs. 
 * Use for loop? 
 */

const gridContainer = document.querySelector('.grid-container');


for (let i = 0; i < 16; i++) { 
    for (let j = 0; j < 16; j++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridContainer.append(gridItem);
    }
}

// const gridItem = document.createElement('div');
// gridItem.className = 'grid-item';
// gridContainer.append(gridItem);