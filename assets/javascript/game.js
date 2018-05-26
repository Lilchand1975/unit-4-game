var stone1RandomNumber = Math.ceil(Math.random()*12);
    var stone2RandomNumber = Math.ceil(Math.random()*12);
    var stone3RandomNumber = Math.ceil(Math.random()*12);
    var stone4RandomNumber = Math.ceil(Math.random()*12);

    var totalScore = 0;
    var wins = 0;
    var loss = 0;
    var yourScore = 0;

$(document).ready(function(){
     cRandomNumber = Math.floor(Math.random()*100) +19;

     stone1RandomNumber = Math.ceil(Math.random()*12);
     stone2RandomNumber = Math.ceil(Math.random()*12);
     stone3RandomNumber = Math.ceil(Math.random()*12);
     stone4RandomNumber = Math.ceil(Math.random()*12);

     totalScore = 0;
     wins = 0;
     loss = 0;
     yourTotalScore = 0;

    // display computer guess on the page
    $("#spa").html(cRandomNumber);

     //display totalscore page
    $("#score").html(totalScore);
    $("#totalwin").html(wins);
    $("#totalloss").html(loss);
    $("#guesss").html(yourTotalScore);

    // showing value in rock 1
    $("#rock1").click(function(){
        totalScore = totalScore + stone1RandomNumber;
        $("#guesss").html(totalScore);

        if (totalScore > cRandomNumber) {
            alert("You lose"); // here you lose.
            loss = loss + 1;
            $("#totalloss").html(loss);
           reset();

        } else if (totalScore == cRandomNumber) {
            alert("You Won"); // here you win. 
            wins = wins + 1;
            $("#totalwin").html(wins);
            reset();
        }  
        
    });
    
    // Showing values in rock 2
    $("#rock2").click(function(){
        totalScore = totalScore + stone2RandomNumber;
        $("#guesss").html(totalScore);
        if (totalScore > cRandomNumber) {
            alert("You lose");
            loss = loss + 1;
            $("#totalloss").html(loss);
           reset();
            
        } else if ( totalScore == cRandomNumber) {
            alert("You Won");
            wins = wins + 1;
            $("#totalwin").html(wins);
            reset();
        }  

    });
    // showing values in rock3
    $("#rock3").click(function(){
        totalScore = totalScore + stone3RandomNumber;
        $("#guesss").html(totalScore);
        if (totalScore > cRandomNumber) {
            alert("You lose");
            loss = loss + 1;
            $("#totalloss").html(loss);
           reset();
        } else if ( totalScore == cRandomNumber) {
            alert("You Won");
            wins = wins + 1;
            $("#totalwin").html(wins);
            reset();
        }  
    });
    // showing values in rock 4.
    $("#rock4").click(function(){
        totalScore = totalScore + stone4RandomNumber;
        $("#guesss").html(totalScore);
        if (totalScore > cRandomNumber) {
            alert("You lose");
            loss = loss + 1;
            $("#totalloss").html(loss);
           reset();
        } else if ( totalScore == cRandomNumber) {
            alert("You Won");
            wins = wins + 1;
            $("#totalwin").html(wins);
            reset();
        }  
    });
});

function reset(){
    cRandomNumber = Math.floor(Math.random()*100) +19;

    stone1RandomNumber = Math.ceil(Math.random()*12);
    stone2RandomNumber = Math.ceil(Math.random()*12);
    stone3RandomNumber = Math.ceil(Math.random()*12);
    stone4RandomNumber = Math.ceil(Math.random()*12);

    totalScore = 0;

    $("#spa").html(cRandomNumber);
//display totalscore page
    $("#score").html(totalScore);
}