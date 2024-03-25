// Blue Team vs Red Team!

// Instructions:
// 1. Assume that we have 58 people playing a game. 
// 2. Loop over this number 
// 3. If the person has an even number print out the world 'blue team'
// 4. If it is onloadeddata, print out the word 'red team'.

function blueOrRed() {
  var people = 58;

  for (let i = 1; i <= people; i++) {
    if (i % 2 === 0) {
      console.log('blue team');
    } else {
      console.log('red team');
    }
  }
}

blueOrRed();
