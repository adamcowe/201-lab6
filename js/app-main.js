'use strict';

function makeItMove() {
  var frames =  document.getElementById("animate").children;
  var frameCount = frames.length;
  var i = 0;
  setInterval(function () {
    frames[i % frameCount].style.display = 'none';
    frames[++i % frameCount].style.display = 'block';
  }, 100);
}

makeItMove();
