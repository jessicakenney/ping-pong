$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    event.preventDefault();

  //---------BackEnd--------------

  //var divisors = [3,5];
  //var gameStrings = ["ping","pong"];

  function getGameNumbers(max) {
    var gameNumbers= [];
    for (var index = 1; index <= max; index++){
      gameNumbers.push(index);
    }
    return gameNumbers;
  };

  function isDivisible(number,testNum) {
    if ((number % testNum) === 0 ) {
      return 1;
    } else {
      return 0;
    }
  };
  //currently this is getting a single number
  //maybe an array later
  function getPingPong(number,string,divisor) {
    var numberString = [];
    if ( isDivisible(number,divisor) ) {
      numberString = number.toString();
      var newString = numberString.replace(/\d+/,string);
      alert(numberString + " being replaced with " + newString);
      return newString;
    } else {
      alert("not divisble by : " + divisor);
    }
  };

  function goPlay(inputNum) {
    //var gameNumbers = getGameNumbers(inputNum);
    getPingPong(inputNum,"ping",3);
    getPingPong(inputNum,"pong",5);
    return isDivisible(inputNum,3);
    // return getGameNumbers(inputNum);
  };

  //---------FrontEnd--------------
  var inputNumber = parseInt($("#input").val());
  var results = goPlay(inputNumber);
  $("#result ul").append("<li>" + results + "</li>");
  // results.forEach(function(result) {
  //   $("#result ul").append("<li>" + result + "</li>");
  // });

  });
});
