function Ticket(age, time, choice) {
  this.customerAge = age;
  this.movieTime = time;
  this.movieChoice = choice;
}

Ticket.prototype.cashOut = function() {
  var totalPrice = 12;
  var customerAge = parseInt(this.customerAge);
  var ticketRank = parseInt(this.movieChoice);

  if (customerAge >= 65) {
    totalPrice -= 2;
  };
  if (ticketRank == 4) {
    totalPrice += 3
  };
  $("#result").append("<p>Your total price is: $" + totalPrice + ".</p>");
}
// Bizness ^

$(document).ready(function(){
  $("#mothra").click(function(event){
    $(".card").hide();
    $(".headers").hide();
    $("#mothra").show();
    return choice = 4;
  });
  $("#zardoz").click(function(event){
    $(".card").hide();
    $(".headers").hide();
    $("#zardoz").show();
    return choice = 4;
  });
  $("#geostorm").click(function(event){
    $(".card").hide();
    $(".headers").hide();
    $("#geostorm").show();
    return choice = 4;
  });
  $("#plan9").click(function(event){
    $(".card").hide();
    $(".headers").hide();
    $("#plan9").show();
    return choice = 2;
  });
  $("#they-live").click(function(event){
    $(".card").hide();
    $(".headers").hide();
    $("#they-live").show();
    return choice = 2;
  });
  $("#rancho").click(function(event){
    $(".card").hide();
    $(".headers").hide();
    $("#rancho").show();
    return choice = 2;
  });

  $("form#input-age-time").submit(function(event){
    event.preventDefault();

    var ticketAge = $("input#age").val();
    var ticketTime = $("#showtime option:selected").val();
    var ticketRank = choice;
    var ticket = new Ticket(ticketAge, ticketTime, ticketRank);

    ticket.cashOut();
  });
});
