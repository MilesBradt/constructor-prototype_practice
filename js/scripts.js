function Ticket(age, time) {
  this.customerAge = age;
  this.movieTime = time;
  this.movieChoice = [];
}

Ticket.prototype.cashOut = function() {
  var receipt = this.movieChoice + this.customerAge + this.movieTime;
  // alert(receipt);
  $(".total").text(receipt);
}

// Bizness ^

$(document).ready(function(){
  $("#mothra").click(function(event){
    $(".card").hide();
    $("#mothra").show();
    // We have to set a movieChoice value here!
  });
  $("#zardoz").click(function(event){
    $(".card").hide();
    $("#zardoz").show();

  });
  $("#geostorm").click(function(event){
    $(".card").hide();
    $("#geostorm").show();

  });
  $("#plan9").click(function(event){
    $(".card").hide();
    $("#plan9").show();

  });
  $("#they-live").click(function(event){
    $(".card").hide();
    $("#they-live").show();

  });
  $("#rancho").click(function(event){
    $(".card").hide();
    $("#rancho").show();

  });
  $("form#input-age-time").submit(function(event){
    event.preventDefault();

    var ticketAge = $("input#age").val();
    var ticketTime = $("#showtime option:selected").val();

    var ticket = new Ticket(ticketAge, ticketTime);


    ticket.cashOut();
  });``
});
