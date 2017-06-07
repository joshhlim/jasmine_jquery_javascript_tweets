var Tweet = function(content, username) {
  this.content = replaceTwitter(content);
  this.username = formatUsername(username);
}

Tweet.prototype.isValid = function(){
  return this.content.length <= 140 && this.content.length > 0 && !this.content.includes('t.co')
}

function formatUsername(username){
  if(username.startsWith('@')){
    return username
  }
  else{
    return '@' + username
  }
}

function replaceTwitter(content){
  return content.replace(/twitter/g, 'tweety')
}
