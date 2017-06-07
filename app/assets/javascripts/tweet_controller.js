$(document).ready(function() {
  var newTweet = new Tweet("", "")
  $("#tweet-content").on("focusin", function() {
    var $that = $(this)
    newTweet.username = $("#username").val()
    $that.on("keyup", function() {
      newTweet.content = $that.val()
      newTweet.isValid()
      newTweet.errorMessages.forEach(function(error) {
        $("p.errors").text(error)
      })
      $that.val(newTweet.content)
    })
  })

  $("form#imo").on("submit", function(e) {
    e.preventDefault();
    newTweet.changeUsername(newTweet.username)
    $.ajax({
      method: "post",
      url: "/tweets",
      data: {content: newTweet.content, username: newTweet.username}
    }).done(function(response){
      window.location = "/"
    })
  })
})
