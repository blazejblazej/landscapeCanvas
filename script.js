function draw() {
  const canvas = document.getElementById("can1");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    // draw sky
    function drawSky(colour) {
      ctx.beginPath();
      ctx.fillStyle = colour; //set colour to provided hex
      ctx.fillRect(0, canvas.height - 540, canvas.width, canvas.height - 200); //fill rectangle with colour leave 200px at the bottom for grass
    }
    drawSky("#e0f2fc");

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
    drawCloud(140, 150);
    drawCloud(650, 90);

    // draw birds
    function drawBird(posX, posY, wingWidth) {
      ctx.beginPath();
      ctx.moveTo(posX, posY); //go to selected X,Y
      ctx.lineTo(posX - wingWidth, posY - wingWidth); //left wing, move to x - wing width and go up by wing width
      ctx.moveTo(posX, posY); //go back to the middle
      ctx.lineTo(posX + wingWidth, posY - wingWidth); //right wing
      ctx.stroke();
    }
    drawBird(40, 40, 15);
    drawBird(700, 200, 25);
    drawBird(200, 150, 17);

    // draw grass
    function drawGrass(colour) {
      ctx.beginPath();
      ctx.fillStyle = colour; //set colour to provided hex
      ctx.fillRect(0, canvas.height - 200, canvas.width, 200); //fill rectangle with colour
    }
    drawGrass("#9ED089");

    // draw rainbow
    function drawRainbow(colour, radius) {
      //reference https://stackoverflow.com/questions/37700784/drawing-a-rainbow-with-canvas-and-javascript
      ctx.beginPath();
      ctx.arc(canvas.width / 2, 340, radius, Math.PI, 2 * Math.PI); //create arch in the centre of canvas, draw it on top of grass, and make it half of a circle
      ctx.lineWidth = 20; //set width of every bar
      ctx.strokeStyle = colour; //set colour of bar
      ctx.stroke();
    }

    //draw bars, every smaller arch's radius is smaller by lineWidth
    drawRainbow("#bdb2ff", 130);
    drawRainbow("#9bf6ff", 110);
    drawRainbow("#fdffb6", 90);
    drawRainbow("#ffadad", 70);

    // draw trees
    function drawTree(type, radius, posX, posY) {
      if (type == 0) {
        // leaves
        ctx.fillStyle = "#94C23B";
        ctx.beginPath();
        ctx.arc(posX + 30 / 2, posY, radius, 0, Math.PI * 2);
        ctx.fill();
        // trunk
        ctx.beginPath();
        ctx.fillStyle = "#CD9E67";
        ctx.fillRect(posX, posY, 30, 100);
      }

      if (type == 1) {
        // trunk
        ctx.beginPath();
        ctx.fillStyle = "#504129";
        ctx.fillRect(posX, posY, 20, 65);
        // leaves
        ctx.fillStyle = "#3CAC4A";
        ctx.beginPath();
        ctx.arc(posX + 20 / 2, posY, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    drawTree(0, 55, 80, 350);
    drawTree(1, 35, 220, 300);
    drawTree(0, 55, 650, 330);
    drawTree(1, 35, 720, 400);
    drawTree(0, 55, 800, 350);

    // draw flowers
    function drawFlower(posX, posY) {
      // stem
      ctx.fillStyle = "#3CAC4A";
      ctx.beginPath();
      ctx.fillRect(posX, posY, 5, 20);
      ctx.fill();
      // flower layer 1
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(posX + 5 / 2, posY, 9, 0, Math.PI * 2);
      ctx.fill();
      // flower layer 2
      ctx.fillStyle = "#F6DE1F";
      ctx.beginPath();
      ctx.arc(posX + 5 / 2, posY, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // generate 10 flowers in random positions
    for (i = 0; i < 10; i++) {
      ranX = Math.floor(Math.random() * canvas.width);
      ranY = Math.floor(Math.random() * 60 + 10);
      drawFlower(ranX, canvas.height - ranY);
    }
  }
}
// event listener for the function to "draw" the illustration when the page has loaded
window.addEventListener("load", draw);
