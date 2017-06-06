describe('a tweet', function() {
  beforeEach(function() {
    tweet = new Tweet('first tweet!', 'quyen');
    longTweet = new Tweet('i dont know its like two paragraphs of alot of typing your chocolate croissant looks a tad dry how is it it tastes peanut buttery with some chocolate lolololololollololol crusts yum :O', 'quyen');
    trademarkTweet = new Tweet('fake twitter', 'quyen');
  });

  it("has the property content", function() {
    expect(tweet.content).toEqual('first tweet!');
  });

  it("has a username", function() {
    expect(tweet.changeUsername(tweet.username)).toEqual('@quyen');
  });

  it("has a character limit for content", function() {
    expect(longTweet.isValid()).toEqual(false);
  });

  it("replaces twitter with tweety", function() {
    trademarkTweet.isValid();
    expect(trademarkTweet.content).toEqual("fake tweety");
  });
})
