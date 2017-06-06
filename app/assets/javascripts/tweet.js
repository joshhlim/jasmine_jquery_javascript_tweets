var Tweet = function(content,username){
  this.content = this.legalizeContent(content)
  this.username = this.insertAtSymbol(username)
}

Tweet.prototype.isValid = function(){
  if (this.content.length > 140) { return false }
  else { return true }
}

Tweet.prototype.legalizeContent = function(content){
  return content.replace(/(twitter)/g,'tweety')
}

Tweet.prototype.insertAtSymbol = function(name){
  if(name[0] != '@'){
    return '@' + name
  }
  else{
    return name
  }
}
