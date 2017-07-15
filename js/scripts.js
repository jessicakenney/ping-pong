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

  function getPingPong(numbers,div1,div2) {
    var pingResults = numbers.map(function(number) {
      var numberString = number.toString();
      var newString = numberString;

      if ( isDivisible(number,div1) ) {
        if ( isDivisible(number,div2) ) {
          newString = numberString.replace(/\d+/,"pingPong");
        } else {
          newString = numberString.replace(/\d+/,"ping");
        }
      } else if ( isDivisible(number,div2) ) {
        newString = numberString.replace(/\d+/,"pong");
      };
      return newString;
    });
    return pingResults;
  };

  function goPlay(inputNum,defaultMode,optDiv1,optDiv2) {
    var gameNumbers = getGameNumbers(inputNum);
    if (defaultMode) {
      var pingPongs = getPingPong(gameNumbers,3,5);
    } else {
      var pingPongs = getPingPong(gameNumbers,optDiv1,optDiv2);
    };
    return pingPongs;
  };

  //---------FrontEnd--------------

  //get max number Input
  var inputNumber = parseInt($("#maxNum").val());

  // get optional Input values
  var optionalDivisors = [];
  var defaultMode = 1;
  $("form input:text").each(function(){
    optionalDivisors.push($(this).val());
  });

  optionalDivisors.sort();
  if ( /^[1-9]$/.test(optionalDivisors[0]) && /^[1-9]$/.test(optionalDivisors[1]) ){
    modeString = "optionalDivisors";
    defaultMode = 0;
  } else {
    modeString = "default";
  };
  //send to backend
  var results = goPlay(inputNumber,defaultMode,optionalDivisors[0],optionalDivisors[1]);

  //clear prev results
  $(".results li").remove();
  $("p.opt").remove();

  // display results
  $(".results").show();
  $(".results #mode").text(modeString);
  if (!defaultMode){
    $(".results h5").append("<p class='opt'>" + optionalDivisors[0] + "=ping</p>");
    $(".results h5").append("<p class='opt'>" + optionalDivisors[1] + "=pong</p>");
  };

  results.forEach(function(result) {
    if (/^p/.test(result) ){
      $(".results ul").append("<li class='ping'>" + result + "</li>");
    } else {
      $(".results ul").append("<li>" + result + "</li>");
    }
  });

  });
});
