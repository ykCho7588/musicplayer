let musicFile;
let musicFile2;

let button;
let button2;

let ReverseBtn;

var jumpButton;

let speedButton;
let speedButton2;
let speedButton3;
var t=0;
let amp;
var rB;
let music;
let vol = 0.5;

function setup()
{
    createCanvas(640, 480); //10. 프로그램 크기 설정
    soundFormats('mp3', 'ogg');
    musicFile = loadSound('Gradation', loadMusic);
    musicFile2 = loadSound('beethoven', loadMusic);

    button = createButton("play"); //재생 버튼
    button.mousePressed(togglePlaying1);
    
    ReverseBtn = createButton("Reverse Play");//역재생 버튼
    ReverseBtn.mousePressed(ReversePlaying);

    button2 = createButton("Music1"); //음악 선택 버튼
    button2.mousePressed(togglePlaying2);
    music = 1;

    jumpButton = createButton("jump");
    jumpButton.mousePressed(jumpSong);
    

    speedButton = createButton("speed 0.5");
    speedButton.mousePressed(rateSong);

    speedButton2 = createButton("speed 1");
    speedButton2.mousePressed(rateSong2);

    speedButton3 = createButton("speed 2");
    speedButton3.mousePressed(rateSong3);

    amp = new p5.Amplitude();

    volume = createSlider(0,1,vol,0.01);
    volume.size(300);
}
function togglePlaying1(){
    if(music === 1){
        if(!musicFile.isPlaying()){
            // rB=musicFile.reverseBuffer();
            musicFile.setVolume(0.5);
            musicFile.rate(1);
            musicFile.play();
            button.html('pause');
        }else{
            musicFile.stop();
            button.html('play');
        }
    }
    if(music === 2){
        if(!musicFile2.isPlaying()){
            // rB=musicFile.reverseBuffer();
            //musicFile2.jump(200);
            musicFile2.setVolume(0.5); //볼륨 조절
            musicFile.rate(1);
            musicFile2.play();
            button.html('pause');
        }else{
            musicFile2.stop();
            button.html('play');
        }
    }
 }

function togglePlaying2(){
    if(music === 1){
        music = 2;
        button2.html('Music2');
    }else{
        music = 1;
        button2.html('Music1');
    }
    console.log(music);
}

function jumpSong() {
    if (music ===1){
        var len = musicFile.duration();
        musicFile.jump(musicFile.currentTime() + len / 5);
        console.log(musicFile.currentTime() + len / 5);
    }
    else if(music===2) {
        //music = 2;
        var len2 = musicFile2.duration();
        musicFile2.jump(musicFile2.currentTime() + len2 / 5);
        console.log(musicFile2.currentTime() + len2 / 5);
    } 
}
function rateSong(){
    if (music ===1){
        musicFile.rate(0.5);
        //speedButton.html('speed 1');
    }
    else if(music===2) {
        musicFile2.rate(0.5);
       // speedButton.html('speed 1');
    } 
}

function rateSong2() {
    if (music ===1){
        musicFile.rate(1);
        //speedButton.html('speed 1');
    }
    else if(music===2) {
        musicFile2.rate(1);
       // speedButton.html('speed 1');
    } 
}

function rateSong3(){
    if (music ===1){
        musicFile.rate(2);
        //speedButton.html('speed 1');
    }
    else if(music===2) {
        musicFile2.rate(2);
       // speedButton.html('speed 1');
    } 
}
function ReversePlaying(){
    if(music===1){
        musicFile.reverseBuffer();
        musicFile.play();
    }
    else if(music===2){
        musicFile2.reverseBuffer();
        musicFile2.play();
    }
}


function loadMusic()
{
    console.log("It's Working");
}

function draw(){

    musicFile.setVolume(volume.value());
    musicFile2.setVolume(volume.value());

    if(music===1){
        fill(musicFile.currentTime(), 0, 255);
        ellipse(musicFile.currentTime()*20,480-amp.getLevel()*1000, 20, 20);
    }
    else if(music===2){
        var vol = amp.getLevel();
        fill(255, 0, 255);
        ellipse(musicFile.currentTime()*40,480-amp.getLevel()*1000, 40,40);
        //ellipse(width / 2, height / 2, vol, vol);
    }

    //background(musicFile.currentTime(), 0, 255);
}