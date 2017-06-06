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
  return content.length <= 140 && content.length > 0 && !content.includes('t.co')
}

function formatUsername(username){
  if(username.startsWith('@')){
    return username
  }
  else if(username){
    return '@' + username
  }
  else{
    return null
  }
}

function replaceTwitter(content){
  return content.replace(/twitter/g, 'tweety')
}
