function Tweet(content, username) {
  this.content = content;
  this.username = username;
  this.isValid = function() {
    if (this.content.length > 140) {
      return false;
    } else if (/(twitter)/.test(this.content)) {
      var newContent = this.content.replace(/(twitter)/, "tweety");
      this.content = newContent
    }
    return true;
  }
}



