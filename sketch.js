//let musicFile;

var song;
var button;

function setup()
{
    createCanvas(200,200);
    song = loadSound('Gradation.mp3', loadMusic);
    button = createButton('play');
    button.mousePressed(togglePlaying);
    background(51);
    soundFormats('mp3', 'ogg');
    //musicFile = loadSound('Gradation', loadMusic);
    //musicFile.play();

}

function togglePlaying()
{
    if (!song.isPlaying()){
        song.play();
        song.setVolume(0.3);
        button.html('pause');
    }
    else
    {
        song.stop();
        button.html('play');
    }
}

function loadMusic()
{
    //musicFile.play();
    console.log('loaded');
}
