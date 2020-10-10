// from data.js
let tableData = data;

// select the button
let button = d3.select('#filter-btn');

// select the form
let form = d3.select('#form');

// create event handlers
button.on('click', runEnter);
form.on('submit', runEnter);

// complete the event handler function for the form
function runEnter() {
    d3.event.preventDefault();

    let inputElement = d3.select('#datetime');

    let inputValue = inputElement.property('value');

    console.log(inputValue);
    console.log(tableData);

    let filteredData = tableData.filter(data => data.datetime === inputValue);

    console.log(filteredData);
}