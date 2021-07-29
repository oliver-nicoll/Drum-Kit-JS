
const keys = document.querySelectorAll('.key'); //returns array of all elements that match this

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip it if it's not a transform
    // console.log(e.propertyName);
    // console.log(this) 
    this.classList.remove('playing');
}

function playSound(e) {
    // console.log(e.keyCode);

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if(!audio) return; // stops the function from running all together
    
    audio.currentTime = 0; // rewind to start
    audio.play();
    // console.log(key)

    key.classList.add('playing');
}

window.addEventListener('keydown', playSound);

