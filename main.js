// JavaScript program to illustrate
// calculation of no. of days between two date

// To set two dates to two variables
var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()
console.log(month + "/" + day + "/" + year)

var date1 = new Date(month + "/" + day + "/" + year);
var date2 = new Date("12/31/2021");

// To calculate the time difference of two dates
var Difference_In_Time = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

//To display the final no. of days (result)
var count = parseInt(Difference_In_Days);
console.log(count);
if(count >= 0){
    document.getElementById("lbl").innerHTML = Difference_In_Days + ' Days to go!';
}
else{
    document.getElementById("lbl").innerHTML = 'Session Passed!.';
}
