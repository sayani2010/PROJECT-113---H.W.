
function preload()
{

}


function setup()
{
    canvas = createCanvas(660, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
    
    rect(30, 20, 600, 440 );
    circle(30, 30, 40);
    circle(620, 460, 40);
    circle(40, 455, 40);
    circle(630, 30, 40);
    
 
} 




function draw()
{
    image(video , 260 , 190 , 150 , 150);
    tint(tint_color);

}

function take_snapshot()
{
    save('Sayani.png');

}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
