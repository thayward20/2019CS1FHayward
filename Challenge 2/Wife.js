/* function noVowels(message){
    var vowels = "aieuo";
    var noVowelsString = "";
        
    for(var i=0; i<message.length; i++){
        var currLetter = message.charAt(i);
        if(vowels.indexOf(currLetter)<0)
                noVowelsString += currLetter;   
    
    }

return noVowelsString; 

    }
message = "Hello, how are you?";
console.log(noVowels(message)); */

function everyOther (message)
var string = "";

for(var i=0; i<message.length; i+=4){
    var fourthLetter = message.charAt(i); 
    if(string.indexOf(fourthLetter)<4)
        
}

message = "Hello, how are you?";
console.log(noVowels(message));
