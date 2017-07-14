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

  function getPingPong(numbers) {

    var pingResults = numbers.map(function(number) {
      var numberString = number.toString();
      var newString = numberString;
      if ( isDivisible(number,3) ) {
        if ( isDivisible(number,5) ) {
          newString = numberString.replace(/\d+/,"pingPong");
        } else {
          newString = numberString.replace(/\d+/,"ping");
        }
      } else if ( isDivisible(number,5) ) {
        newString = numberString.replace(/\d+/,"pong");
      };
      return newString;
    });
    return pingResults;
  };

  function goPlay(inputNum) {
    var gameNumbers = getGameNumbers(inputNum);
    var pingPongs = getPingPong(gameNumbers);
    return pingPongs;
  };

  //---------FrontEnd--------------
  
  var inputNumber = parseInt($("#input").val());
  var results = goPlay(inputNumber);
  results.forEach(function(result) {
   $("#result ul").append("<li>" + result + "</li>");
  });

  });
});
