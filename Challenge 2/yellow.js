/*For year = 1905, the output should be
centuryFromYear(year) = 20;
For year = 1700, the output should be
centuryFromYear(year) = 17.
You will need to research JavaScript math functions Math.ceil and Math.floor.*/

function centuryFromYear(year) {
    return Math.ceil(year/100);
}



console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));

/*For message = "hello", the output should be
reverse(message) = "olleh";
For message = "good", the output should be
reverse(message) = "doog".
 

You will need to research JavaScript String functions .charAt.*/

function reverse(message) {
    var reverseString = "";
    for(var i=message.length-1; i>=0; i--){
    reverseString += messsage.chartAt(i);
    }
return reverseString;
}


console.log(reverse("hello"));
console.log(reverse("good"));

 