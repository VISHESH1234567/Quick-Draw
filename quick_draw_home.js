// Variables Declaration
let x = 1; // Page Number
let ispen;
let pencils;
let erasers;
let clears;
let drawings;
let array;
let names;
let headings;
let startBtn; let submitBtn;
let links;
let mousedown=false;
let ctx=[0,0,0,0,0,0];
let answers;

function goto1(){
	if (x==2){
		let container = document.getElementById('main1');
		container.style.visibility = 'visible';
		container.style.transition='all 1s ease-in';
		container.style.backgroundImage='url("coloured_bg.jpeg")';
		container.style.height='80vh';
		container.style.boxShadow='0px 0px 0px 0px grey';
		let hides = container.getElementsByClassName('area');
		hides[0].style.transition = container.style.transition;
		hides[0].style.backgroundColor='white';
		hides[1].style.transition = container.style.transition;
		hides[1].style.backgroundColor='white';
		let elements = document.getElementsByClassName('region2');
		elements[0].style.backgroundColor='rgb(249,136,102)';
		elements[1].style.backgroundColor='rgb(249,136,102)';
		elements[0].style.boxShadow = 'none';
		elements[1].style.boxShadow = 'none';
		elements[0].style.zIndex = '41';
		elements[1].style.zIndex = '41';
	}
	else if (x==3){
		let container1 = document.getElementById('main2');
		let container2 = document.getElementById('main1');
		container1.style.visibility='visible';
		container2.style.visibility='visible';
		container1.style.transition = 'all 1s ease-in';
		container2.style.transition = 'all 1s ease-in 0.6s';
		container1.style.backgroundImage='url("coloured_bg.jpeg")';
		container1.style.height='80vh';
		container2.style.backgroundImage='url("coloured_bg.jpeg")';
		container2.style.height='80vh';
		container1.style.boxShadow='0px 0px 0px 0px grey';
		container2.style.boxShadow='0px 0px 0px 0px grey';
		let hides = container1.getElementsByClassName('area');
		hides[0].style.transition = container1.style.transition;
		hides[0].style.backgroundColor='white';
		hides[1].style.transition = container1.style.transition;
		hides[1].style.backgroundColor='white';
		hides = container2.getElementsByClassName('area');
		hides[0].style.backgroundColor='white';
		hides[1].style.backgroundColor='white';
		let elements = document.getElementsByClassName('region3');
		elements[0].style.backgroundColor='rgb(249,136,102)';
		elements[1].style.backgroundColor='rgb(249,136,102)';
		elements[0].style.boxShadow = 'none';
		elements[1].style.boxShadow = 'none';
		elements[0].style.zIndex = '41';
		elements[1].style.zIndex = '41';
	}
	x=1;
	let elements = document.getElementsByClassName('region1');
	elements[0].style.backgroundColor='rgb(255,242,215)';
	elements[1].style.backgroundColor='rgb(255,242,215)';
	elements[0].style.boxShadow = '0.3255vw 0.5208vw 1.952vw 0.9765vw grey';
	elements[1].style.boxShadow = '0.3255vw 0.5208vw 1.952vw 0.9765vw grey';
	elements[0].style.zIndex = '42';
	elements[1].style.zIndex = '42';
}
function goto2(){
	if (x==1){
		let container = document.getElementById('main1');
		container.style.backgroundImage='url("mix.jpeg")';
		container.style.transition='all 1s ease-out';
		container.style.height='0px';
		container.style.boxShadow='42px 42px 56px 14px grey';
		container.style.visibility='hidden';
		let hides = container.getElementsByClassName('area');
		hides[0].style.transition = container.style.transition;
		hides[0].style.backgroundColor='grey';
		hides[1].style.transition = container.style.transition;
		hides[1].style.backgroundColor='grey';
		let elements = document.getElementsByClassName('region1');
		elements[0].style.backgroundColor='rgba(249,136,102,0)';
		elements[1].style.backgroundColor='rgba(249,136,102,0)';
		elements[0].style.boxShadow = 'none';
		elements[1].style.boxShadow = 'none';
		elements[0].style.zIndex = '41';
		elements[1].style.zIndex = '41';
	}
	else if (x==3){
		let container = document.getElementById('main2');
		container.style.visibility = 'visible';
		container.style.boxShadow='0px 0px';
		container.style.transition='all 1s ease-in';
		container.style.backgroundImage='url("coloured_bg.jpeg")';
		container.style.height='80vh';
		let hides = container.getElementsByClassName('area');
		hides[0].style.transition = container.style.transition;
		hides[0].style.backgroundColor='white';
		hides[1].style.transition = container.style.transition;
		hides[1].style.backgroundColor='white';
		let elements = document.getElementsByClassName('region3');
		elements[0].style.backgroundColor='rgba(249,136,102,0)';
		elements[1].style.backgroundColor='rgba(249,136,102,0)';
		elements[0].style.boxShadow = 'none';
		elements[1].style.boxShadow = 'none';
		elements[0].style.zIndex = '41';
		elements[1].style.zIndex = '41';
	}
	x=2;
	let elements = document.getElementsByClassName('region2');
	elements[0].style.backgroundColor='rgb(255,242,215)';
	elements[1].style.backgroundColor='rgb(255,242,215)';
	elements[0].style.boxShadow = '0.3255vw 0.5208vw 1.952vw 0.9765vw grey';
	elements[1].style.boxShadow = '0.3255vw 0.5208vw 1.952vw 0.9765vw grey';
	elements[0].style.zIndex = '42';
	elements[1].style.zIndex = '42';
}
function goto3(){
	if (x==1){
		let container1 = document.getElementById('main1');
		let container2 = document.getElementById('main2');
		container1.style.transition = 'all 1s ease-out';
		container2.style.transition = 'all 1s ease-out 0.6s'
		container1.style.backgroundImage='url("mix.jpeg")';
		container1.style.height='0px';
		container2.style.backgroundImage='url("mix.jpeg")';
		container2.style.height='0px';
		container1.style.visibility = 'hidden';
		container2.style.visibility = 'hidden';
		// container1.style.boxShadow='42px 42px 56px 14px grey';
		container2.style.boxShadow='42px 42px 56px 14px grey';
		let hides = container1.getElementsByClassName('area');
		hides[0].style.transition = container1.style.transition;
		hides[0].style.backgroundColor='grey';
		hides[1].style.transition = container1.style.transition;
		hides[1].style.backgroundColor='grey';
		hides = container2.getElementsByClassName('area');
		hides[0].style.transition = container2.style.transition;
		hides[0].style.backgroundColor='grey';
		hides[1].style.transition = container2.style.transition;
		hides[1].style.backgroundColor='grey';
		let elements = document.getElementsByClassName('region1');
		elements[0].style.backgroundColor='rgba(249,136,102,0)';
		elements[1].style.backgroundColor='rgba(249,136,102,0)';
		elements[0].style.boxShadow = 'none';
		elements[1].style.boxShadow = 'none';
		elements[0].style.zIndex = '41';
		elements[1].style.zIndex = '41';
	}
	else if (x==2){
		let container = document.getElementById('main2');
		container.style.transition='all 1s ease-out';
		container.style.backgroundImage = 'url("mix.jpeg")';
		container.style.height = '0px';
		container.style.visibility = 'hidden';
		container.style.boxShadow='42px 42px 56px 14px grey';
		let hides = container.getElementsByClassName('area');
		hides[0].style.transition = container.style.transition;
		hides[0].style.backgroundColor='grey';
		hides[1].style.transition = container.style.transition;
		hides[1].style.backgroundColor='grey';
		let elements = document.getElementsByClassName('region2');
		elements[0].style.backgroundColor='rgba(249,136,102,0)';
		elements[1].style.backgroundColor='rgba(249,136,102,0)';
		elements[0].style.boxShadow = 'none';
		elements[1].style.boxShadow = 'none';
		elements[0].style.zIndex = '41';
		elements[1].style.zIndex = '41';
	}
	x=3;
	let elements = document.getElementsByClassName('region3');
	elements[0].style.backgroundColor='rgb(255,242,215)';
	elements[1].style.backgroundColor='rgb(255,242,215)';
	elements[0].style.boxShadow = '0.3255vw 0.5208vw 1.952vw 0.9765vw grey';
	elements[1].style.boxShadow = '0.3255vw 0.5208vw 1.952vw 0.9765vw grey';
	elements[0].style.zIndex = '42';
	elements[1].style.zIndex = '42';
}

// Canvas Operations
function update_tools(event, index){
	if (event && !ispen[index]){
		ispen[index]=true;
		pencils[index].style.bottom = '5px';
		pencils[index].src = 'pen_grey.jpg';
		erasers[index].style.bottom = '0px';
		erasers[index].src = 'eraser_plain.jpg';
		drawings[index].style.cursor = "url('pen_cursor.jpg') 0 19, auto";
	}
	else if (ispen[index]){
		ispen[index]=false;
		pencils[index].style.bottom = '0px';
		pencils[index].src = 'pen.jpg';
		erasers[index].style.bottom = '5px';
		erasers[index].src = 'eraser_grey.jpg';
		drawings[index].style.cursor = "url('eraser_cursor.jpg'), auto";
	}
}

function draw_canvas(){
	for (let i=0;i<6;i++){
		pencils[i].style.bottom = '5px';
		// pencils[i].style.border = '1px solid black';
		pencils[i].src= 'pen_grey.jpg';

		headings[i].innerHTML = names[i];
		links[i].innerHTML = names[i];
	}
}

function startDraw(event, index){
	mousedown=true;
	ctx[index].beginPath();
	draw(event, index);
}
function endDraw(index){mousedown=false;ctx[index].beginPath();}
function draw(event, index){
	if (mousedown){
		const rect = drawings[index].getBoundingClientRect();
		let x; let y;
    	if (event.touches) {
            x = event.touches[0].clientX - rect.left;
            y = event.touches[0].clientY - rect.top;
        } else {
            x = event.clientX - rect.left;
            y = event.clientY - rect.top;
        }
    	// console.log(x,y);
    	if (x >= 0 && x < drawings[index].width && y >= 0 && y < drawings[index].height) {
        	array[index][Math.floor(y)][Math.floor(x)] = 1;
    	}
    	if (x<1 || x>502 || y<1 || y>501){mousedown=false;}

    	ctx[index].lineWidth = 10; // Line width
    	ctx[index].lineCap = 'round';
    	ctx[index].lineTo(x, y);
    	ctx[index].stroke();
    	ctx[index].beginPath();
    	ctx[index].moveTo(x, y);
	}
}

document.addEventListener('DOMContentLoaded', (event) => {
	x = 1; // Page Number
	ispen = [true,true,true,true,true,true];
	pencils = document.getElementsByClassName('pencil');
	erasers = document.getElementsByClassName('eraser');
	clears = document.getElementsByClassName('clear');
	drawings = document.getElementsByClassName('drawing');
	startBtn = document.getElementById('start');
	submitBtn = document.getElementById('submit');
	headings = document.querySelectorAll('.area h2');
	links = document.getElementsByClassName('btns');
	const clock = document.getElementById('clock');
	clock.style.transition = 'all 0.1s linear';
	clock.style.boxShadow = "inset 1px 1px 10px 1px green";
	clock.style.transition = "all 80s linear";
	array = Array.from({ length: 6 }, () => Array.from({ length: drawings[0].height }, () => Array.from({ length: drawings[0].width }, () => 0)));
	for (let i=0;i<6;i++){ctx[i] = drawings[i].getContext('2d');}

	submitBtn.addEventListener('click', async () =>{
		document.getElementById('play_area').style.height="0px";
	    const response = await fetch('/submit', {
	        method: 'POST',
	        headers: {
	            'Content-Type': 'application/json',
	        },
	        body: JSON.stringify({ array }),
	    });
	    const data = await response.json();
	    console.log(data);
	    answers = Object.values(data)[0];
	    answers = answers.split(',');
	    console.log(answers[0]);
	});
    startBtn.addEventListener('click', async () =>{
    	document.getElementById('home').style.height = '0px';
    	clock.style.boxShadow = "inset 1px 1px 10px 1px red";
    	let timeremaining = 900;
    	const updateTimer = () =>{
    		if (timeremaining==0){
    			clearInterval(timerInterval);
    			submitBtn.click();
    		}
    		else{
    			timeremaining--;
    			if (timeremaining>100){
    				clock.textContent = Math.floor(timeremaining/10)+'s';
    			}
    			else if (timeremaining==100){
    				clock.style.transition = "all 0.5s linear";
    				clock.style.boxShadow = "inset 1px 1px 10px 2px red";
    			}
    			else{
    				clock.textContent=timeremaining/10+'s';
    				if (timeremaining%10==5){clock.style.boxShadow = "inset 1px 1px 10px 2px red";}
    				else if (timeremaining%10==0){clock.style.boxShadow = "inset 1px 1px 10px 2px black";}
    			}
    		}
    	};
    	const timerInterval = setInterval(updateTimer,100);
		const response = await fetch('/start',{
			method: 'POST',
			headers: {'Content-Type': 'application/json',},
		});
		names = await response.json();
		// names=names.split(',');
		names=names.output.split(',');
		draw_canvas();

		for (let i=0;i<6;i++){
			drawings[i].addEventListener('mousedown',(event)=>startDraw(event,i));
			drawings[i].addEventListener('mouseup',()=>endDraw(i));
			drawings[i].addEventListener('mousemove',(event)=>draw(event,i));
			drawings[i].addEventListener('touchstart',(event)=>startDraw(event,i));
			drawings[i].addEventListener('touchend',()=>endDraw(i));
			drawings[i].addEventListener('touchmove',(event)=>draw(event,i));
		}
	});
});