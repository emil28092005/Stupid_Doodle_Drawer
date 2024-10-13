var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var count = 0;
setInterval(function () {
  var arg1 = document.getElementById("arg1").value;
  var arg2 = document.getElementById("arg2").value;
  var freq = document.getElementById("freq").value;
  var size = document.getElementById("size").value;
  count++;
  ctx.fillRect(
    250 + 100 * Math.sin(count) + Math.cos(count * arg1) * 100,
    250 + 100 * Math.cos(count) + Math.cos(count * arg2) * 100,
    size * Math.sin(count ** freq),
    size * Math.sin(count ** freq)
  );
}, 1);
