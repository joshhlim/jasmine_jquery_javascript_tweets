var Tweet = function(content, username) {
  if(contentValid(content)){
    this.content = replaceTwitter(content);
  }
  else{
    this.content = null
  }
  this.username = formatUsername(username);
}

function contentValid(content){
  return content.length <= 140 && !content.includes('t.co')
}

function formatUsername(username){
  if(!username.startsWith('@')){
    return '@' + username
  }
  else{
    return username
  }
}

function replaceTwitter(content){
  return content.replace(/twitter/g, 'tweety')
}
