$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val().toUpperCase();
    var person2Input = $("input#person2").val().toUpperCase();
    var animalInput = $("input#animal").val().toUpperCase();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});

//
// $(document).ready(function() {
//
//   $("div#click-one").click(function(event) {
//     var whatToSay = "Hello!";
//     alert(whatToSay);
//   });
//
//   $("div#click-two").click(function(event) {
//     var whatToSay = "ping pong is not fun";
//     alert(whatToSay);
//   });
// });
