let score = 20;
let highScore = 0;
let random = Math.trunc(Math.random() * 20) + 1;

function displayMassage(message) {
  document.querySelector('.message').textContent = message;
}

function scoreUpdate(score) {
  document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score >= 1) {
    //   when there is no value
    if (!guess) {
      displayMassage('Please take a guess!');

      //   when it's a wrong guess
    } else if (guess !== random) {
      // when the guess is not between 1-20
      if (guess < 1 || guess > 20) {
        displayMassage('Please guess a number between 1 and 20');

        //when the guess is valid
      } else {
        document.querySelector('.number').textContent = guess;
        score--;
        scoreUpdate(score);

        //when guess is too high
        if (guess > random) {
          displayMassage('Too high!');

          //when guess is too low
        } else {
          displayMassage('Too low!');
        }
      }
      //when the game is over
      if (score === 0) {
        displayMassage('Game over!');
      }

      //when it's the right guess
    } else {
      if (score > highScore) {
        document.querySelector('.number').textContent = guess;
        document.querySelector('.number').style.width = '30rem';
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      document.querySelector('body').style.backgroundColor = '#60b347';
      displayMassage('Correct number!');
      score = 0;
    }
  }
});

//Resetting the game
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  random = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreUpdate(score);
  displayMassage('Start guessing...');
});
