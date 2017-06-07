function Tweet(content, username) {
  this.content = content;
  this.username = this.changeUsername(username)
  this.maxContentLength = 140
  this.errorMessages = []
}

Tweet.prototype.isValid = function() {
  this.errorMessages = []
  if (this.content.length > this.maxContentLength) {
    return this.errorMessages.push("Over Limit")
  } else if (/(twitter)/.test(this.content)) {
    this.errorMessages.push("Can't reference Twitter")
    return this.content = this.replaceTwitter()
  } else if (/(t.co)/.test(this.content)) {
    this.errorMessages.push("Don't reference t.co")
    return this.content = this.replaceTco()
  } else {
    return true
  }
  return this.errorMessages
}

Tweet.prototype.changeUsername = function(name) {
    if (!(/^@/.test(name))) {
      return this.username = "@" + name;
    } else {
    return this.username = name;
    }
  }

Tweet.prototype.replaceTwitter = function() {
  var newContent = this.content.replace(/(twitter)/g, "tweety");
  this.content = newContent
  return this.content
}

Tweet.prototype.replaceTco = function() {
  var newContent = this.content.replace(/(t.co)/g, "url");
  this.content = newContent
  return this.content
}
