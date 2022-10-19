let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

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


// Creating and adding data to the body of the table
let mainColumn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

mainColumn.forEach(element => {
    let tableRow = document.createElement('tr');
    let line = [element, element + (15 * 1), element + (15 * 2), element + (15 * 3), element + (15 * 4)];
    
    line.forEach(number => {
        let cell = document.createElement('td');
        cell.innerHTML = number;
        tableRow.appendChild(cell);
    });

    tbody.appendChild(tableRow);
});