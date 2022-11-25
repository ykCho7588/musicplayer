let musicFile;
function setup()
{
    soundFormats('mp3', 'ogg');
    musicFile = loadSound('Gradation', loadMusic);
    //musicFile.play();

}

function loadMusic()
{
    musicFile.play();
}
function draw()
{
    fill(255,0,0);
    ellipse(50,50,100,100);
}