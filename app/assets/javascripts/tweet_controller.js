$(document).ready(function() {
$("#new-tweet-form").focusin(function() {
  var tweet = new Tweet("@paulie", "")
    $("#tweet-content").keyup(function() {
      tweet.content = $(this).val()
      $(".char-count").text("Character Count: " + tweet.content.length)
      console.log(tweet.content)
    })
  })

$("#tweet-content").keyup(function() {
  if ($(this).val().length > 140) {
    $(".too-long-error").text("TOO MANY CHARACTERS")
    $(".form-control").css("color", "red")
  } else {
    $(".too-long-error").empty()
    $(".form-control").css("color", "black")
  }
  if (($(this).val().search(/twitter/i)) > -1) {
    var newst = $(this).val().replace(/twitter/i, "tweety")
    $(this).val(newst)
    $(".tweety-error").text("TWITTER WAS REPLACED WITH TWEETY")
  }

  if (($(this).val().search(/t.co/i)) > -1) {
    $(".tco-error").text("T.CO LINKS NOT ALLOWED")
  } else {
    $(".tco-error").empty()
  }
})

$("#new-tweet-form").submit(function(e) {
  var tweet = new Tweet($("#username").val(), $("#tweet-content").val())
  if (!(tweet.isValid())) {
    e.preventDefault();
    alert("Invalid tweet")
  }

})

})
