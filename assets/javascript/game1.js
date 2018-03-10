$(document).ready (function(){
    var random= randomNumGenerator();
    var userTotal= 0;
    var wins= 0;
    var losses= 0;

    function randomNumGenerator(){
        return Math.floor(Math.random()*120)+19;

    }

    var num1= Math.floor(Math.random()*12)+1;
    var num2= Math.floor(Math.random()*12)+1;
    var num3= Math.floor(Math.random()*12)+1;
    var num4= Math.floor(Math.random()*12)+1;



    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#users-total").text(userTotal);
    $("#random-number").text(random);


    function won(){
        alert("You Won!");
        wins++;
        $("#wins").text(wins);
        reset()
    };

    function loss(){
        alert("You Lose!");
        losses++;
        $("#losses").text(losses);
        reset()
    }

    $("#one").on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $("#users-total").text(userTotal); 
      
          if (userTotal == random){
          won();
        }
        else if ( userTotal > random){
          loss();
        }
    });
      $("#two").on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $("#users-total").text(userTotal); 
      
          if (userTotal == random){
          won();
        }
        else if ( userTotal > random){
          loss();
        }
    });
      $("#three").on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $("#users-total").text(userTotal); 
      
          if (userTotal == random){
          won();
        }
        else if ( userTotal > random){
          loss();
        }
    });
      $("#four").on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $("#users-total").text(userTotal); 
      
          if (userTotal == random){
          won();
        }
        else if ( userTotal > random){
          loss();
        }
    });

    function reset(){
        random=Math.floor(Math.random()*120)+19;
        $("#random-number").text(random);
        random= randomNumGenerator();
        num1= Math.floor(Math.random()*12)+1;
        num2= Math.floor(Math.random()*12)+1;
        num3= Math.floor(Math.random()*12)+1;
        num4= Math.floor(Math.random()*12)+1;
        userTotal=0;
        $("#users-total").text(userTotal);
    }




});