document.getElementById('opening-video').addEventListener('ended',autoPlayWithDelay,false);
function autoPlayWithDelay(e) {
    setTimeout(function(){
        document.getElementById('opening-video').play();
    }, 1000);
}