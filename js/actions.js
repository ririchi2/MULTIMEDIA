window.onload = randomImage();

// function lanzadora(){
// cambiarURLFOTO();

// }
function randomImage(){
    var randompic = document.getElementById("randompic");
    randompic.src="https://source.unsplash.com/random"
}


var slowBtn = document.getElementById("slowBtn");
var normalBtn = document.getElementById("normalBtn");
var fastBtn = document.getElementById("fastBtn");
var video = document.getElementById("videotag");


slowBtn.addEventListener('click' ,() => {    
    video.playbackRate= 0.5;
    if (video.paused) 
    video.play(); 
    else 
    video.pause();
});

normalBtn.addEventListener('click' ,() => {
    video.playbackRate = 1;
    if (video.paused) 
    video.play(); 
    else 
    video.pause(); 
    
})

fastBtn.addEventListener('click',() =>{
    video.playbackRate= 2;
    if (video.paused) 
    video.play(); 
    else 
    video.pause();
} )
