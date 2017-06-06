describe('valid tweet', function() {
  beforeEach(function(){
    tweet = new Tweet('my first tweet here on good ol twitter!', '@billybob')
  })
  it("has content", function() {
    expect(tweet.content).not.toBeFalsy();
  });
  it("has a username", function() {
    expect(tweet.username).not.toBeFalsy();
  });
  it("has content that is 140 characters or less", function() {
    expect(tweet.content.length).toBeLessThan(141);
  });
  it("does not contain the word twitter", function() {
    expect(tweet.content.includes('twitter')).toBe(false);
  });
  it("does not contain the phrase t.co", function() {
    expect(tweet.content.includes('t.co')).toBe(false);
  });
  it("has valid content", function() {
    expect(contentValid(tweet.content)).toBe(true);
  });
  it("has a username that starts with @", function() {
    expect(tweet.username.startsWith('@')).toBe(true);
  });
});

describe('invalid tweet', function(){

})
