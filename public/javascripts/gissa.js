function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}

let num = getRandomIntInclusive(1, 10);

let guess = 0;

let guessCount = 0;

const input = document.querySelector('#guess');
const correct = document.querySelector('#correct');
const incorrect = document.querySelector('#incorrect');

correct.classList.toggle('d-none');
incorrect.classList.toggle('d-none');

input.addEventListener('keydown', function (event) {
  if (event.key === "Enter") {
    guessCount++;
    if (parseInt(input.value) === num) {
      correct.textContent = 'Grattis, du gissade rätt (' + guessCount + ' försök)';
      correct.classList.toggle('d-none');
    } else {
      if (parseInt(input.value) > num) {
        incorrect.textContent = 'Fel, din gissning ' + guess + ' är för stor, försök igen.';
      } else if (parseInt(input.value) < num) {
        incorrect.textContent = 'Fel, din gissning ' + guess + ' är för liten, försök igen.';
      }
      incorrect.classList.toggle('d-none');
    }

    input.value = "";
  }
} )


// while (guess != num) {
//   // guess = prompt('Gissa ett tal mellan 1 och 10');
//   // console.log(guess);
// }