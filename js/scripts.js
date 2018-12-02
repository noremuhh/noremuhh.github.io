console.log('Jekyll really is awesome.');

// Get and store entire Date object
var today = new Date();
// Filter down to and store currrent Year
var year = today.getFullYear();
// Is this the correct Year? 
console.log(year);
// Display Year with jQuery
$('footer span').text(year);