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

  //number input
  var inputNumber = parseInt($("#maxNum").val());

  // get optional values
  var optionalDivisors = [];
  $("form input:text").each(function(){
    optionalDivisors.push($(this).val());
  });
  var optionalMode = 0;
  var optDivisor1 = optionalDivisors[0];
  var optDivisor2 = optionalDivisors[1];
  alert (optDivisor1 + optDivisor2);
  if ( /^\d$/.test(optDivisor1) && /^\d$/.test(optDivisor2) ){
    mode = "optionalDivisors";
    alert("Optional Divisors ON");
  } else {
    mode = "default";
  };

  var results = goPlay(inputNumber);


  // display results
  $(".results").show();
  $(".results #mode").text(mode);

  $(".results li").remove();
  results.forEach(function(result) {
    if (/^p/.test(result) ){
      $(".results ul").append("<li class='ping'>" + result + "</li>");
    } else {
      $(".results ul").append("<li>" + result + "</li>");
    }
  });

  });
});
