console.log("Loading datadump.js..")


// Find the first <tbody> element on the page
const tableBody = document.getElementsByTagName("tbody")[0];

// Define an asynchronous function using arrow syntax
const getDataModern = async () => {
  // Todo: fetch data
  const data = await fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather");
//get actual JSON data presentation
const dataJson=await data.json();

//Log data to see if it is correct
console.log("dataJson",dataJson);

//Create table rows in for .. of loop (outer loop)
for (rowData of dataJson){
    //Insert new row to table
    const newRow = tableBody.insertRow(-1);

    const cellKeys = Object.keys(rowData); //Output: {"ID", "Device_id", "date_time", "data"}

    //Create table cells in for..of loop (inner loop)
    for(cellKey of cellKeys){
        //Insert new cell to row
        const newCell = newRow.insertCell(-1);

        //Perform operation based on cell content
        switch(cellKey){
            //If data cell, dig key&value from sub-object
            case "data":
                const key = Object.keys(rowData[cellKey])[0];
                const value = rowData[cellKey][key];
                newCell.textContent= `${key}: ${value}`;
                break;
                //For other cells, just copy the value to the cell
                default:
                    newCell.textContent = rowData[cellKey];
        }
    }
}
};
getDataModern();

//fetch data using modern fetch API
