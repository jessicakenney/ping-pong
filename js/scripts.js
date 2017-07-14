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
  function getPingPong(numbers,string,divisor) {

    var pingResults = numbers.map(function(number) {

      var numberString = number.toString();
      var newString = numberString;
      if ( isDivisible(number,divisor) ) {
        newString = numberString.replace(/\d+/,string);
        alert(numberString + " being replaced with " + newString);
        //return newString;
      } else {
        //do nothing
        //alert("not divisble by : " + divisor);
      }
      //map return
      return newString;
    });
    return pingResults;
  };

  function goPlay(inputNum) {
    var gameNumbers = getGameNumbers(inputNum);
    alert(gameNumbers);
    var pings = getPingPong(gameNumbers,"ping",3);
    //getPingPong(gameNumbers,"pong",5);
    return pings;
    // return getGameNumbers(inputNum);
  };

  //---------FrontEnd--------------
  var inputNumber = parseInt($("#input").val());
  var results = goPlay(inputNumber);
  //$("#result ul").append("<li>" + results + "</li>");
  results.forEach(function(result) {
   $("#result ul").append("<li>" + result + "</li>");
  });

  });
});
