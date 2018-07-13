let keys = Array.from(document.querySelectorAll('.key'));


function playOnKey(e) {

    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) {
        return;
    }

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
};


function playOnIt(e) {

    let sample = this.getAttribute('data-key');
    let audio = document.querySelector(`audio[data-key="${sample}"]`);

    if (!sample) {
        return;
    }

    audio.currentTime = 0;
    audio.play();

    this.classList.add('playing');
    this.addEventListener('transitionend', removeTransition);

}


function removeTransition(e) {
    this.classList.remove('playing');
    this.addEventListener('transitionend', removeTransition);
}


window.addEventListener('keydown', playOnKey);
const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Windows Phone/i.test(navigator.userAgent);

(isMobile) ? keys.forEach(key => key.addEventListener('mousedown', playOnIt)) : keys.forEach(key => key.addEventListener('click', playOnIt));

