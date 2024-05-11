const word = "CAT"
let currentPosition = 0
const meow = document.querySelector('.meow')

window.addEventListener('keydown', pressedKey)
const keys = Array.from(document.querySelectorAll('audio'));
keys.forEach(key => {
    if(key.classList.value !== 'meow'){
        key.addEventListener('ended', correctOrder)
    }
});

function pressedKey(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`)
    if(!audio) return; //if no associated audio is found
    audio.currentTime = 0 //we don't want to wait until sound finishes to play again
    audio.play()
    key.classList.add('playing')
}

function removeTransition(){
    const keys = document.querySelectorAll('.playing')
    keys.forEach(key => key.classList.remove('playing'))
}

function correctOrder(letter){
    if(word[currentPosition] === String.fromCharCode(letter.target.attributes['data-key'].value)){
        currentPosition++
        if(currentPosition === word.length){
            meow.play()
            currentPosition = 0
            removeTransition()
        }
    }else{
        currentPosition = 0
        removeTransition()
    }
}


