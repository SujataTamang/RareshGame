var start = new Date().getTime();

function getRandomColor() {
	"use strict";
	var letters, color, i;
    letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    //letters = '0123456789ABCDEF'.split('');
    color = '#';
    for (i = 0; i < 6; i = i + 1) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
	
}

function shapeappear() {
	"use strict";
	var top, left, width;
	top = Math.random() * 200;
	left = Math.random() * 400;
	width = ((Math.random() * 200) + 100);
    
    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        document.getElementById("shape").style.borderRadius = "0";
    }
	
	document.getElementById("shape").style.top = top + "px";
	document.getElementById("shape").style.left = left + "px";
	document.getElementById("shape").style.width = width + "px";
	document.getElementById("shape").style.height = width + "px";
	
	document.getElementById("shape").style.backgroundColor = getRandomColor();
	
	document.getElementById("shape").style.display = "block";
	
	start = new Date().getTime();
	
}

function appearAfterDelay() {
	"use strict";
	setTimeout(shapeappear, Math.random() * 2000);
}
appearAfterDelay();

document.getElementById("shape").onclick = function () {
	"use strict";
	
    document.getElementById("shape").style.display = "none";
	
	var end, timeTaken;
	
	end = new Date().getTime();
	
	timeTaken = (end - start) / 1000;
	
	document.getElementById("userTime").innerHTML = timeTaken + " second";
	
	appearAfterDelay();
		
};




