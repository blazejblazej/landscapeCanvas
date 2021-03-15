function draw() {
  const canvas = document.getElementById("can1");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    // draw sky
    function drawSky(colour){
      ctx.beginPath();
      ctx.fillStyle = colour; //set colour to provided hex
      ctx.fillRect(0,canvas.height - 540,canvas.width,canvas.height - 200); //fill rectangle with colour leave 200px at the bottom for grass
    }
    drawSky('#e0f2fc');
    // draw clouds

    function drawCloud(posX, posY) {
      //reference https://stackoverflow.com/questions/19541192/how-to-draw-cloud-shape-in-html5-canvas
      ctx.beginPath();
      ctx.arc(posX, posY, 20, Math.PI * 0.5, Math.PI * 1.5); //half of circle arc is left side of cloud
      ctx.arc(posX + 120, posY, 20, Math.PI * 1.5, Math.PI * 0.5); //right side of half circle arc            
      ctx.moveTo(posX + 120, posY + 20);
      ctx.lineTo(posX, posY + 20); //connect left and right bottom arc
      ctx.arc(posX + 30, posY - 20, 30, Math.PI * 1, Math.PI * 1.85); // left top arc
      ctx.arc(posX + 85, posY - 20, 30, Math.PI * 1, Math.PI * 2); //top right arc
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();
    }
    drawCloud(140,150);
    drawCloud(650,90);
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
