window.alert("WELCOME TO THE PETROL STATION")   // This displays a welcome message to the user when the page loads

function calc() { // This is the function that calculates the total cost of cost per liter
    let Costperliter = parseFloat(document.getElementById("Costperliter").value); // This gets the cost per liter from the input and it converts it to a decimal number
    let Liters = parseFloat(document.getElementById("Liters").value); // This gets the value of liters from the inpit and it converts it to a decimal number
    let res = Costperliter * Liters; //This tells the function to multiply the cost per liter by liter to get the total cost
    document.getElementById("res").innerHTML = "Total Cost: AED" + res.toFixed(2); //This prints out the total cost which is rounded to 2 decimals
}




