$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    event.preventDefault();

  //---------BackEnd--------------

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

  function getPingPong(inputNum) {
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
