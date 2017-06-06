describe('Tweet', function() {
  beforeEach(function(){
    tweet = new Tweet({ content: "I'm eating a cheeseburger.", username: "@bobbo" });
    badTweet = new Tweet({ content: "twitter twitter twitter.", username: "fuck" });
  })
  it("has content", function() {
    expect(tweet.content).toBe("I'm eating a cheeseburger.");
  });
  it("has a username", function() {
    expect(tweet.username).toBe("bobbo");
  });
  it("has content that's no longer than 140 characters", function() {
    expect(tweet.content.length).toBeLessThan(141);
  });
  it("replaces all instances of 'twitter' with 'tweety'", function() {
    expect(badTweet.content).toBe("tweety tweety tweety.")
  });
  it("has an isValid method that checks if a tweet is valid", function() {
    expect(badTweet.isValid).toBe(false)
  });
  it("adds an '@' to the username if it doesn't already exist", function() {
    expect(badTweet.username).toBe('@fuck')
  });
});
