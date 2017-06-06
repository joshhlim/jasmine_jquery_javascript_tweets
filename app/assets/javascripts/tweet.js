function Tweet(username, content) {
  this.username = username;
  this.content = content;

  this.content = this.content.replace(/twitter/i, "tweety")

  if (this.username[0] !== "@") {
    this.username = "@" + this.username
  }
}

Tweet.prototype.isValid = function() {
  if (this.content.length > 140)
    return false
  else if (this.content.includes("twitter") || this.content.includes("t.co"))
    return false
  else if (this.username[0] !== "@")
    return false
  else
    return true
}
