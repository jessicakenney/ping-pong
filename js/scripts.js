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
  function getPing(number) {
    var numberString = [];
    if ( isDivisible(number,3) ) {
      numberString = number.toString();
      var newString = numberString.replace(/\d+/,"ping");
      alert(newString);
      return newString;
    } else {
      alert("not divisble by 3");
    }
  };

  function getPingPong(inputNum) {
    getPing(inputNum);
    return isDivisible(inputNum,3);
    // return getGameNumbers(inputNum);
  };

  //---------FrontEnd--------------
  var inputNumber = parseInt($("#input").val());
  var results = getPingPong(inputNumber);
  $("#result ul").append("<li>" + results + "</li>");
  // results.forEach(function(result) {
  //   $("#result ul").append("<li>" + result + "</li>");
  // });

  });
});
