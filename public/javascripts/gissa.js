const input = document.querySelector('input[name="guess"]');
const target = rand(1, 10);
let guesses = 0;

console.log({target});
input.addEventListener('keyup', e => {
    if(e.key === 'Enter') {
        try {
            const guess = parseInt(input.value);
            if(isNaN(guess)) throw Error(`'${input.value}' is not a number`);
            guesses++;

            if(guess === target) {
                showAlert('success', `🎉 Du gissade rätt, snyggt jobbat! (${guesses} försök)`);
            }
            else {
                showAlert('danger', `❌ Din gissning (${guess}) är för ${guess > target ? 'stor' : 'liten'}, försök igen! (${guesses} försök)`);
            }
        }
        catch(e) {
            showAlert('danger', `😨 Uh oh, Något gick fel! ${e.name}: ${e.message}`);
        }
    }
})

const alertBox = document.querySelector('.alert');
function showAlert(type, message) {
    alertBox.classList.remove(...['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map(e => 'alert-'+e));
    alertBox.classList.add('alert-' + type);
    alertBox.classList.remove('d-none');
    alertBox.textContent = message;
}

function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}