function draw() {
  const canvas = document.getElementById("can1");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    // draw sky & clounds
    function drawSky(colour){
      ctx.beginPath();
      ctx.fillStyle = colour;
      ctx.fillRect(0,canvas.height - 540,canvas.width,canvas.height - 200);
    }
    drawSky('#e0f2fc');
    // draw birds

    // draw grass

    // draw rainbow

    // draw trees

    // draw flowers
  }
}
// event listener for the function to "draw" the illustration when the page has loaded
window.addEventListener("load", draw);
