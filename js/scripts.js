$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    event.preventDefault();

  //---------BackEnd--------------




  function getPingPong(inputNum) {
    return inputNum;

  };

  //---------FrontEnd--------------
  var inputNumber = parseInt($("#input").val());
  var result = getPingPong(inputNumber);

  $("#result ul").append("<li>" + result + "</li>");


  });
});
