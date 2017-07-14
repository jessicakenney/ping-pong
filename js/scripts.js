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

  function getPingPong(inputNum) {
    return getGameNumbers(inputNum);
  };

  //---------FrontEnd--------------
  var inputNumber = parseInt($("#input").val());
  var results = getPingPong(inputNumber);
  results.forEach(function(result) {
    $("#result ul").append("<li>" + result + "</li>");
  });

  });
});
