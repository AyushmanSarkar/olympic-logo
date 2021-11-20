canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d");
//first circle
color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(250, 210, 40, 0, 2*Math.PI);
ctx.stroke();

//fourth circle
color = "yellow"
ctx.strokeStyle=color;
ctx.beginPath();
ctx.lineWidth=5;
ctx.arc(300, 250, 40, 0, 2*Math.PI);
ctx.stroke();

//second circle
color = "black"
ctx.strokeStyle=color;
ctx.beginPath();
ctx.lineWidth=5;
ctx.arc(350, 210, 40, 0, 2*Math.PI);
ctx.stroke();

//fifth circle
color = "green"
ctx.strokeStyle=color;
ctx.beginPath();
ctx.lineWidth=5;
ctx.arc(400, 250, 40, 0, 2*Math.PI);
ctx.stroke();


//third circle
color = "red"
ctx.strokeStyle=color;
ctx.beginPath();
ctx.lineWidth=5;
ctx.arc(450, 210, 40, 0, 2*Math.PI);
ctx.stroke();




