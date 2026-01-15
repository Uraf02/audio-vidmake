console.log("App is running");

const audio = document.getElementById("wind")

const playBtn = document.getElementById("Play");
const pauseButton = document.getElementById("Pause");
const stopButton = document.getElementById("Stop");
const skipForwardButton = document.getElementById("Skipforward");
const skipBackwardButton = document.getElementById("Skipbackward");

playBtn.addEventListener('click', function() {
    audio.play()
})

pauseButton.addEventListener('click', function() {
    audio.pause()
})

stopButton.addEventListener('click', function() {
    audio.pause()
    audio.currentTime = 0;
})

skipForwardButton.addEventListener('click', function() {
    audio.currentTime += 10;
})

skipBackwardButton.addEventListener('click', function() {
    audio.currentTime -= 10;
})
