const app = "I don't do much.";

var dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#FF69B4';

function moveDodger(direction) {
  var x_num = dodger.style.left.replace('px', '');
  var x_pos = parseInt(x_num, 10);

  if (direction == 'left' && x_pos > 0) {
    dodger.style.left = `${x_pos - 10}px`;
  } else if (direction == 'right' && x_pos < 360) {
	dodger.style.left = `${x_pos + 10}px`;	
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodger('left');
  } else if (e.which === 39) {
  	moveDodger('right');
  }
})