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