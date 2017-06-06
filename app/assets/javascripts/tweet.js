var Tweet = function(content,username){
  this.content = this.legalizeContent(content)
  this.username = this.insertAtSymbol(username)
  this.characterCount = content.length
  this.maxCharacterCount = 140
}

Tweet.prototype.isValid = function(){
  if (this.content.length > this.maxCharacterCount) { return false }
  else { return true }
}

Tweet.prototype.legalizeContent = function(content){
  return content.replace(/(twitter)/g,'tweety').replace(/(t.co)/g, "Can't go to this site.")
}

Tweet.prototype.insertAtSymbol = function(name){
  if(name[0] != '@'){
    return '@' + name
  }
  else{
    return name
  }
}

Tweet.prototype.calcCharacterCount = function() {
  return this.characterCount
}
