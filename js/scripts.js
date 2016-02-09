$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var firstnameInput = $("input#firstname").val();
    var lastnameInput = $("input#lastname").val();
    var phoneInput = $("input#phone").val();
    var dayofweekInput = $("select#dayofweek").val();
    var appttimeInput = $("select#appttime").val();
    var tellusmoreInput = $("textarea#tellusmore").val();

    $(".firstname").text(firstnameInput);
    $(".lastname").text(lastnameInput);
    $(".phone").text(phoneInput);
    $(".dayofweek").text(dayofweekInput);
    $(".appttime").text(appttimeInput);
    $(".tellusmore").text(tellusmoreInput);

    $("#confirmation").show();
    $(".appointmentform").hide();

    event.preventDefault();
  });
});


$(document).ready(function() {
//   $("button#green").click(function() {
//     $("body").removeClass();
//     $("body").addClass("green-background");
//   });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
});
