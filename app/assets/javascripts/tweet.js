var Tweet = function(content,username){
  this.content = content
  this.username = this.insertAtSymbol(username)
  this.characterCount = this.content.length
  this.maxCharacterCount = 140
  this.errorMessages = []
}

Tweet.prototype.isValid = function(){
  this.errorMessages = []
  if (this.content.length > this.maxCharacterCount) {
    this.errorMessages.push("Your tweet is over the character limit.")
    return false
  }
  else if ( this.referencesTwitter() ) {
    this.takeOutTwitter()
    this.errorMessages.push("You can't write 'twitter' in your tweet!")
    return false
  }
  else if ( this.referencesTco() ) {
    this.takeOutTco()
    this.errorMessages.push("You can't reference 't.co' in your tweet!")
    return false
  }
  else { return true }
}

Tweet.prototype.referencesTwitter = function() {
  if (this.content.includes('twitter')) {
    return true
  }
  else { return false }
}

Tweet.prototype.takeOutTwitter = function() {
  this.content = this.content.replace(/(twitter)/g,'tweety')
}


Tweet.prototype.referencesTco = function() {
  if (this.content.includes('t.co')) {
    return true
  }
  else { return false }
}

Tweet.prototype.takeOutTco = function() {
  this.content = this.content.replace(/(t.co)/g, "URL")
}

Tweet.prototype.insertAtSymbol = function(name){
  if(name[0] != '@'){
    return '@' + name
  }
  else{
    return name
  }
}
