$(document).ready(function(){
  $(".form-control").on("focusin",function(){
    newTweet = new Tweet('','bobbo')
    $that = $(this)
    $(this).on("keyup",function(){
      newTweet.content = $that.val()
      // $that.val()
      if (newTweet.content.length < 140) {
      $(".character-count").html((newTweet.maxCharacterCount - newTweet.content.length) + ' characters left.')
      }
      else { $(".character-count").html("<span style='color:red;'>Your tweet is over the character limit.</span>") }
    })
  })
});
