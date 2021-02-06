$(document).ready(function() {
    var socket = io.connect("https://intense-retreat-15497.herokuapp.com/")
function getInt() {
    return Math.floor(Math.random() * 7);
  }

webgazer.setGazeListener(function(data) {
    if (data == null) {
        return;
    }
    var xprediction = data.x; //these x coordinates are relative to the viewport
    var yprediction = data.y; //these y coordinates are relative to the viewport


    if(xprediction < -5){
        socket.emit('play');
        $("#sounds").children()[getInt()].play();
    }else if(xprediction > 1300){
        socket.emit('play');
        $("#sounds").children()[getInt()].play();
    }else if(yprediction < 10){
        socket.emit('play');
        $("#sounds").children()[getInt()].play();
    }else if(yprediction > 900){
        socket.emit('play');
        $("#sounds").children()[getInt()].play();
    }
    
}).begin();

var isPaused = false;
$("#pause").click(function(){
    if(!isPaused){
        $("#pause").html('Resume');
        webgazer.pause();
        isPaused = true;
    }else{
        $("#pause").html('Pause');
        webgazer.resume();
        isPaused = false;
    }
}); 
});






