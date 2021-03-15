function draw() {
  const canvas = document.getElementById("can1");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    // draw sky & clounds
    function drawSky(colour){
      ctx.beginPath();
      ctx.fillStyle = colour; //set colour to provided hex
      ctx.fillRect(0,canvas.height - 540,canvas.width,canvas.height - 200); //fill rectangle with colour leave 200px at the bottom for grass
    }
    drawSky('#e0f2fc'); //draw sky
    // draw birds
    function drawBird(posX,posY,wingWidth){
      ctx.beginPath();
      ctx.moveTo(posX,posY); //go to selected X,Y
      ctx.lineTo(posX-wingWidth,posY-wingWidth); //left wing, move to x - wing width and go up by wing width
      ctx.moveTo(posX,posY); //go back to the middle
      ctx.lineTo(posX+wingWidth,posY-wingWidth) //right wing
      ctx.stroke();
    }
    drawBird(40,40,15);
    drawBird(700,200,25);
    drawBird(200,150,17);
    // draw grass

    // draw rainbow

    // draw trees

    // draw flowers
  }
}
// event listener for the function to "draw" the illustration when the page has loaded
window.addEventListener("load", draw);
