var windowWidth = 0,
divWidth = 0,
wrapper = {},
divColors = [],
socket = {},
value = {};

divColors = ["#ff0000", "#ff4000", "#FF7F00", "#FFBF00", "#ffd633", "#ffff00",
"#80ff00", "#00ff00", "#33ccff", "#00bfff", "#00b0FF", "#0080ff", "#0040ff", "#0000ff", "#0000e6"];

windowWidth  = window.innerWidth;
wrapper = document.getElementById("wrapper");
divWidth = windowWidth / 15.0;



for(var i = 0; i < 15; i++) {
	var new_div = {},
	divLeft = 0;


	new_div = document.createElement("div");
	divLeft = divWidth*i;

	new_div.id = i;
	new_div.style.position = "absolute";
	new_div.style.top = "402px";
	new_div.style.height = "230px";
	new_div.style.width = divWidth + "px";
	//new_div.innerHTML = i; 
	new_div.style.display = "flex";
	new_div.style.justifyContent = "center";
	new_div.style.paddingTop = "150px";


	new_div.style.left = divLeft + "px";
	new_div.style.backgroundColor = divColors[i];

	wrapper.appendChild(new_div);
}






for(var i = 0; i < 15; i++) {	//for the shorter division
	var new_div = {},
	divLeft = 0;


	new_div = document.createElement("div");
	divLeft = divWidth*i;

	new_div.id = i;
	new_div.style.position = "absolute";
	new_div.style.top = "350px";
	new_div.style.height = "8px";
	new_div.style.width = divWidth + "px";
	new_div.innerHTML = i; 
	new_div.style.display = "flex";
	new_div.style.justifyContent = "center";
	new_div.style.paddingTop = "45px";


	new_div.style.left = divLeft + "px";
	new_div.style.backgroundColor = divColors[i];

	wrapper.appendChild(new_div);
}
document.getElementById('0').innerHTML = "<div class='rotated'>Battery Acid -- 0</div>";
document.getElementById('1').innerHTML = "<div class='rotated2'>&nbspStomach Acid -- 1.0<br>&nbspLime Juice -- 1.8 - 2.0<br>&nbspVinegar -- 2.0. - 3.4</div>";
document.getElementById('2').innerHTML = "<div class='rotated2'>&nbspLemon juice -- 2.2 - 2.4<br>&nbspCoca-Cola --2.5<br>&nbspCider -- 2.9 - 3.3</div>";
document.getElementById('3').innerHTML = "<div class='rotated2'>&nbspStrawberries -- 3.0 - 3.5<br>&nbspYeasts -- 3.0 - 3.5<br>&nbspJams/Jellies -- 3.1 - 3.5</div>";
document.getElementById('4').innerHTML = "<div class='rotated2'>&nbspApples -- 3.3 - 4.0<br>&nbspHoney -- 3.9<br>&nbspTomatoes -- 4.2 - 4.1</div>";
document.getElementById('5').innerHTML = "<div class='rotated2'>Sugar -- 5.0 - 6.0<br>Beef -- 5.1 - 6.2<br>Pork -- 5.3 - 6.9</div>";
document.getElementById('6').innerHTML = "<div class='rotated2'>&nbspOnions -- 5.3 - 5.8<br>&nbspLettuce -- 5.8 - 6.0<br>&nbspRice -- 6.0 - 6.7</div>";
document.getElementById('7').innerHTML = "<div class='rotated2'>Butter -- 6.1 - 6.4<br>Egg Yolk -- 6.4<br>Pure Water -- 7.0</div>";
document.getElementById('8').innerHTML = "<div class='rotated2'>&nbspMilk -- 6.3 - 8.5<br>&nbspCrackers -- 7.0 - 8.5<br>&nbspEgg White -- 7.0 - 9.0</div>";
document.getElementById('9').innerHTML = "<div class='rotated'>&nbspBaking Soda -- 9.0</div>";
document.getElementById('10').innerHTML = "<div class='rotated'>Antacids -- 10</div>";
document.getElementById('11').innerHTML = "<div class='rotated'>Ammonia -- 11</div>";
document.getElementById('12').innerHTML = "<div class='rotated'>Calcium Hydroxide -- 12</div>";
document.getElementById('13').innerHTML = "<div class='rotated'>Lye -- 13</div>";
document.getElementById('14').innerHTML = "<div class='rotated'>Potassium Hydroxide -- 14</div>";

value = document.getElementById

socket = new WebSocket("ws://127.0.0.1:8080");

socket.onmessage = function receieveMessage(event){
	var pointerLeft = (event.data/14.75) * windowWidth;

	$("#pointer").animate({
	left: pointerLeft + "px"
	}, 500);
	$("#value").text(event.data);
	if(event.data >= 0 && event.data < 1){
		document.getElementById("Ion Visualizer").src = "0.png";
	}
	else if(event.data >= 1 && event.data < 2){
		document.getElementById("Ion Visualizer").src = "1.png";
	}
	else if(event.data >= 2 && event.data < 3){
		document.getElementById("Ion Visualizer").src = "2.png";
	}
	else if(event.data >= 3 && event.data < 4){
		document.getElementById("Ion Visualizer").src = "3.png";
	}
	else if(event.data >= 4 && event.data < 5){
		document.getElementById("Ion Visualizer").src = "4.png";
	}
	else if(event.data >= 5 && event.data < 6){
		document.getElementById("Ion Visualizer").src = "5.png";
	}
	else if(event.data >= 6 && event.data < 7){
		document.getElementById("Ion Visualizer").src = "6.png";
	}
	else if(event.data >= 7 && event.data < 8){
		document.getElementById("Ion Visualizer").src = "7.png";
	}
	else if(event.data >= 8 && event.data < 9){
		document.getElementById("Ion Visualizer").src = "8.png";
	}
	else if(event.data >= 9 && event.data < 10){
		document.getElementById("Ion Visualizer").src = "9.png";
	}
	else if(event.data >= 10 && event.data < 11){
		document.getElementById("Ion Visualizer").src = "10.png";
	}
	else if(event.data >= 11 && event.data < 12){
		document.getElementById("Ion Visualizer").src = "11.png";
	}
	else if(event.data >= 12 && event.data < 13){
		document.getElementById("Ion Visualizer").src = "12.png";
	}
	else if(event.data >= 13 && event.data < 14){
		document.getElementById("Ion Visualizer").src = "13.png";
	}
	else{
		document.getElementById("Ion Visualizer").src = "14.png";
	}
}

