$(document).ready(function() {
  $("#tweet-form").on('focusin', function() {
    $("#tweet-content").on('keyup', function() {
      var contentLength = $(this).val().length
      $(".char-count").text("Character Count: " + contentLength)
    })
  })

  $("#tweet-content").on('keyup', function() {
    if ($(this).val().length > 140) {
      $("#length-err").text("Tweets have a max of 140 characters.")
    } else {
      $("#length-err").empty()
    }
    if (($(this).val().search(/twitter/i)) > -1) {
      var content = $(this).val().replace(/twitter/i, "tweety")
      $(this).val(content)
      $("#twitter-err").text("'Twitter' not allowed in tweets; replaced with 'tweety'")
    }

    if (($(this).val().search(/t.co/i)) > -1) {
      $("#tco-err").text("Links to t.co are not allowed")
    } else {
      $("#tco-err").empty()
    }
  })

  $("#tweet-form").on('submit', function(e) {
    var tweet = new Tweet($("#username").val(), $("#tweet-content").val())
    if (!(tweet.isValid())) {
      e.preventDefault();
      alert("Invalid tweet")
    }
  })
})
