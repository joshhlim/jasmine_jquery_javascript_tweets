$(document).ready(function(){

  $("#tweet-content").on("focusin",function(){
    newTweet = new Tweet('',($("#username").val()))
    $that = $(this)
    $(this).on("keyup",function(){
      newTweet.content = $that.val()
      if (newTweet.content.length < 140) {
        $(".character-count").html(newTweet.maxCharacterCount -newTweet.content.length)
      }
      if (newTweet.isValid() === false) {
          newTweet.errorMessages.forEach(function(msg) {
            $(".error-messages").html("<li style='color:red;'>" + msg + "</li>");
          })
      $that.val(newTweet.content)
      }
   })

    $("#tweet-form").on("submit", function(event){
      event.preventDefault()
      var action = "/tweets"
      var data = {username: newTweet.username, content: newTweet.content}
      console.log(data)
      $.ajax({
        method: 'POST',
        url: action,
        data: data
      })
      .done(function(response){
        location.reload()
      })
    })

  });

});
