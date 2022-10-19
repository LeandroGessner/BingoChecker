// Declaration of the main parts of the table
let table = document.createElement('table');

let thead = document.createElement('thead');
thead.className = 'table-head';

let tbody = document.createElement('tbody');
tbody.className = 'table-body';

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('body').appendChild(table);


// Creating and adding data to the header of the table
let bingoHeader = ['B', 'I', 'N', 'G', 'O']
let header = document.createElement('tr')

bingoHeader.forEach(element => {
    let letter = document.createElement('th');
    letter.innerHTML = element;
    header.appendChild(letter);
});

thead.appendChild(header);

let drawnNumbers = [];

// Creating and adding data to the body of the table
let mainColumn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

mainColumn.forEach(element => {
    let tableRow = document.createElement('tr');
    let line = [element, element + (15 * 1), element + (15 * 2), element + (15 * 3), element + (15 * 4)];
    
    line.forEach(number => {
        let cell = document.createElement('td');
        cell.id = 'cell-' + number;
        
        cell.onclick = function() {
            buildArrayWithDrawnNumbers(cell)
        };
        
        cell.innerHTML = number;
        tableRow.appendChild(cell);
    });

    tbody.appendChild(tableRow);
});


function changeBackgroundColor(drawnNumbersArray) {
    let currentCell = drawnNumbersArray.slice(-1)
    let previousCell = drawnNumbersArray.slice(-2)

    if (drawnNumbersArray.length <= 1) {
        currentCell[0].style.backgroundColor = "red";
    } else {
        currentCell[0].style.backgroundColor = "red";
        previousCell[0].style.backgroundColor = "#ADD8E6";
    }
};


function buildArrayWithDrawnNumbers(cell) {
    if (!drawnNumbers.includes(cell)) {
        drawnNumbers.push(cell);
        changeBackgroundColor(drawnNumbers);
    } else {
        alert("Número inválido!")
    };
};
