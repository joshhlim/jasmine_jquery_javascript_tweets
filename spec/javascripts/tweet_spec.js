describe('Tweet', function () {

  var tweet1 = new Tweet("@paulie", "Oh em gee what an awesome tweet.")

  it('has a username property', function() {
    expect(tweet1.username).toBeDefined();
  })

  it('has a content property', function() {
    expect(tweet1.content).toBeDefined();
  })

  it('is shorter than 140 characters', function() {
    expect(tweet1.content.length).toBeLessThan(140)
  })

  it('does not contain the word twitter', function() {
    expect(tweet1.content).not.toContain("twitter")
  })

  it('does not contain t.co', function() {
    expect(tweet1.content).not.toContain("t.co")
  })

  var tweet2 = new Tweet("paulie", "This is not twitter")

  it('replaces twitter with tweety in the content', function() {
    expect(tweet2.content).not.toContain("twitter")
    expect(tweet2.content).toContain("tweety")
  })

  it('automatically adds an @ before the username if not given', function() {
    expect(tweet2.username[0]).toEqual("@")
  })

  var tweet3 = new Tweet("@hsadb", "as;ogin;osdng ;oiadsng o;iadnsg;doi ;disdos;ignsdjfgk;ld nvisadng as;odgn dsao;gnsad ;g ndjsav;kl dsnjv;oidsno;asdnvh s;dahg;dahdsl;knd slknl;kasng lk;dsgndsgn as")
  console.log(tweet3.content.length)
  it('has a validation method that returns false for invalid tweets', function() {
    expect(tweet3.isValid()).toBe(false)
  })


})
