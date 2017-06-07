$(document).ready(function() {
  $("#tweet-content").on('keyup', function() {
    var $that = $(this)
    var contentLength = $(this).val().length
    $("#chars").text("Character Count: " + contentLength)

    if ($that.val().length > 140) {
      $("#length-err").text("Tweets have a max of 140 characters.")
    } else {
      $("#length-err").empty()
    }

    if ($that.val().search(/twitter/i) > -1) {
      var content = $that.val().replace(/twitter/i, "tweety")
      $that.val(content)
      $("#twitter-err").text("'Twitter' not allowed in tweets; replaced with 'tweety'")
    }

    if ($that.val().search(/t.co/i) > -1) {
      $("#tco-err").text("Links to t.co are not allowed")
    }
  })

  $("#tweet-form").on('submit', function(e) {
    var tweet = new Tweet($("#username").val(), $("#tweet-content").val())
    if (!(tweet.isValid())) {
      e.preventDefault();
      alert("Tweet failed! Please read the errors for more information.")
    }
  })
})
