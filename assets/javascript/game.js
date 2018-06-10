



var randomWordArray = ["jim", "pam", "michael", "dwight", "ryan"]; 
//program selects random word from the array
var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
//universal variables
var s;
var b;
var count = 0;
var answerArray = [];
var badArray = [];

//
function startUp () 
{
    for (var i =0 ; i < randomWord.length; i++) 
    {
        answerArray[i] = "_";
    }
    //put them in string

    s = answerArray.join(" ");
    document.getElementById("answer").innerHTML = s;

}

function letter()
 {
    var letter = document.getElementById("letter").value;

    if (letter.length = 1) 
    {
        for (var i = 0; i < randomWord.length; i++)
         {
            if (randomWord[i] === letter )
            {
                answerArray[i] = letter;
            } 
            if (randomWord[i] !== letter )
            {
                badArray[i] = letter;
                badArray.push(letter);
            }
    
        }
        count++;
        document.getElementById("counter").innerHTML = "No of Clicks: " + count;
        document.getElementById("answer").innerHTML = answerArray.join(" ");
        document.getElementById("wrong").innerHTML = badArray.join(" ");
    }
    if (letter.length > 1)
    {
     alert("One letter please!");
    }
    if(count > 10) 
    {
        answerArray = randomWord
        document.getElementById("stat").innerHTML = "come on you should have guessed it by now! Refresh the page and start over!!!"
        document.getElementById("answer").innerHTML = answerArray.join(" ");
    }
    
}
 

