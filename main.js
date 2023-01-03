
var canvas = document.getElementById('responsive-canvas');

var heightRatio = 1.618;

canvas.height = canvas.width * heightRatio; // Establishes a dynamic height for the canvas.
 
// The variable "canvas" is set as the first item within the document id'd as canvas.            
// Canvas is defined in the HTMl page

            // Set the canvas value to the window inner width. What is a window? 
            // Set the canvas value to the inner height. 

            canvas.width = window.innerWidth;
            // canvas.height = window.innerHeight;
 
            var ball = canvas.getContext('2d'); // This sets the screen as a two dimensional page as opposed to a 3d.
 
            // x and y are the co-ordinates of the circle
 
            // vx and vy are the respective speeds

            // Each time the page refreshes, new random values are requested.
 
            var x = Math.floor(Math.random() * canvas.width);
            var y = Math.floor(Math.random() * canvas.height);
            // var vx = Math.floor(Math.random() * 2); // The horizontal movement is currently half the speed of the vertical movement.
            var vx = Math.floor(Math.random() * 2) + 2;
            var vy = Math.floor(Math.random() * 4) + 2; // Why not just set the speed to a constant value?
            var radius = 20;

           // Instead of elem, use ball. 
 
            move(); // This calls the animation function over and over again. 

            
        
            // This function executes the animation
            function move() {
                requestAnimationFrame(move);
 
                // This command clears the pixels (erases the circle) from the defined window space canvas.getContext('2d') 
        
                ball.clearRect(0, 0, canvas.width, canvas.height); // Erases all pixels.
 




                // TODO: make the circle more aesthetically appealing. Make thicker, add a gradient color. 
                // Creating a circle
                // How do we create this as a const?

                ball.beginPath();
                ball.strokeStyle = "black";
                ball.arc(x, y, radius, 0, Math.PI * 2, false); // Times two pi to complete the circle?
                ball.stroke();


                // Conditions so that the ball bounces
                // from the edges
                if (radius + x > canvas.width)
                    vx = 0 - vx; //This creates a negative velocity
 
                if (x - radius < 0)
                    vx = 0 - vx; //Reverses direction
 
                if (y + radius > canvas.height) // This fixes the bouncing issue
                    vy = 0 - vy;
 
                if (y - radius < 0)
                    vy = 0 - vy;


                    // I saw a bug where a very large circle can get trapped in a corner, constantly reversing and changing direction. 
                    // Are X and Y defining the center of the circle...? Just reducing the size of the circle.
 
                x = x + vx; // This updates the x coordinates to move the circle. 
                y = y + vy; // This updates the y coordinates to move the circle. 


                //l.onClick() = clearInterval();
            }


const button = document.querySelector('#reveal-button');
const elements = document.querySelectorAll('.hidden');

let index = 0;

button.addEventListener('click', () => {
  elements[index].classList.remove('hidden');
  index++;
});
 