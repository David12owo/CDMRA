//! LEAP YEAR

// Write a function that takes in a year and returns true if the year is a leap year, false if it is not.
function LeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

//? TICKET PRICE CALCULATOR
// Write a function that calculates the ticket price based on the age of the passenger.
function calculateTicketPrice() {
  const age = parseInt(prompt("Enter your age:"));

  let ticketPrice;

  if (age <= 12) {
    ticketPrice = 10;
  } else if (age <= 17) {
    ticketPrice = 15;
  } else {
    ticketPrice = 20;
  }
  console.log("Your ticket price is $" + ticketPrice);
}
calculateTicketPrice();
