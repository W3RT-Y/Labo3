//Guess the number

const N = 10;
var counter = 0; //counts number of guesses

function draw_lots(n)
{
    r = Math.floor(n*Math.random()) + 1;
    return r;
}   

//Deneme -> console.log(draw_lots(N));


var a = 1;   // left edge of range
var b = N;   // right edge of range
var x = draw_lots(N);  // computer draws a random numbenr 
console.log("C: I thought a number. Guess it!\n");




var guess = 0; // initianate our gues with 0 to enter the loop


/*Deneme
guess = prompt("Give a number");
guess = parseInt(guess);


console.log(guess);
console.log(typeof guess);
guess =  console.log("C: put a number from " + parseInt(a) + " to " + parseInt(b) +": " );
*/

while (guess != x)
{
    guess =  prompt("C: put a number from " + parseInt(a) + " to " + parseInt(b) +": " );
    guess = parseInt(guess);
    
    
    counter += 1;
    if(guess < x)
    {
        console.log("C: too small");
        a = guess;
    }
    else if(guess > x)
    {       
        console.log("C: two big");
        b = guess;
    }
    else
    {
        console.log("C: you guessed my number. It was " + parseInt(x));
    }
        
}
console.log("\nC: you needed " + parseInt(counter) + " moves.");

