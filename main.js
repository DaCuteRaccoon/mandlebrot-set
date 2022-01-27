var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

for (i=0; i<1000000; i++) {
  xPos = (i % 1000) / 200;
  yPos = i / 200000;
  x = 0;
  y = 0;
  iteration = 0;
  
  while (iteration < 100 && x*x + y*y <= 2000) {
    xTemp = x*x - y*y + (xPos - 2.5);
    y = 2*x*y + (yPos - 2.5);
    x = xTemp;
    iteration++;
  };
  
  if (iteration == 100) {
    ctx.fillStyle = 'black';
  } else {
    ctx.fillStyle = '#' + (Math.floor(Math.sin(iteration / 10) * 128)).toString(16) + '00FF';
    // ctx.fillStyle = '#' + ((iteration * 1000000) % 16777216).toString(16);
  };
  ctx.fillRect(xPos * 200, Math.floor(yPos *200), 1, 1);
};
