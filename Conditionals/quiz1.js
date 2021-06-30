var scoreJohn = 30,
  scoreNick = 30;

var lowerLimit = 51;

if (scoreJohn >= lowerLimit && scoreNick >= lowerLimit) {
  console.log("both passed");
} else if (scoreNick >= lowerLimit || scoreJohn >= lowerLimit) {
  console.log("one has passed");
  if (scoreNick >= lowerLimit) {
    console.log("Nick has passed with " + scoreNick + " points");
  }
  if (scoreJohn >= lowerLimit) {
    console.log("John has passed with " + scoreJohn + " points");
  }
} else {
  console.log("none passed");
}
