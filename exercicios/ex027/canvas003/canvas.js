var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = 'rgba(0, 153, 204, .7)';
c.fillRect(500, 400, 70, 100);
c.fillStyle = 'rgba(255, 255, 24, .7)';
c.fillRect(200, 100, 100, 100);
c.fillStyle = 'rgba(200, 153, 204, .7)';
c.fillRect(400, 100, 100, 100);

for (var i = 0; i < 3; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'brown'
    c.stroke();
}