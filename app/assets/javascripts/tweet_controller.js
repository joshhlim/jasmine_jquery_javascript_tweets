$(document).ready(function(){
  $(".form-control").on("focusin",function(){
    newTweet = new Tweet('','bobbo')
    $that = $(this)
    $(this).on("keyup",function(){
      newTweet.content = $that.val()
      if (newTweet.content.length < 140) {
        $(".character-count").html(newTweet.maxCharacterCount -newTweet.content.length)
      }
      if (newTweet.isValid() === false) {
          newTweet.errorMessages.forEach(function(msg) {
            console.log(msg)
            $(".error-messages").html("<li style='color:red;'>" + msg + "</li>");
          })
      $that.val(newTweet.content)
      }
   })
  });
});
