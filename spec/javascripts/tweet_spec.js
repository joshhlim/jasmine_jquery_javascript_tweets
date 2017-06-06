describe('a tweet', function() {
  beforeEach(function() {
    var tweet = new Tweet('first tweet!', 'quyen');
  })

  it("has the property content", function() {

    expect(tweet.content).toEqual('first tweet!');
  });
})
