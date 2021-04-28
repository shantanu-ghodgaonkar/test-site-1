let myImg = document.querySelector('img');

myImg.onclick = function(){
	let mySrc = myImg.getAttribute('src');
	if(mySrc === 'images/Edit3_DSC_0395-1.jpg')
		myImg.setAttribute('src', 'images/IMG_20190425_120636_SQR.jpg');
	else
		myImg.setAttribute('src', 'images/Edit3_DSC_0395-1.jpg');
}

let myBtn = document.querySelector('.cusr');
let myH2 = document.querySelector('h2');

function setUserName(){
	let myName = prompt('Please enter your name:');
	if(!myName)
		setUserName();
	else{
		localStorage.setItem('name', myName);
		myH2.textContent = 'Hello ' + myName + '!';
	}
}

if(!localStorage.getItem('name'))
	setUserName();
else{
	let storedName = localStorage.getItem('name');
	myH2.textContent = 'Hello ' + storedName + '!';
}

myBtn.onclick = function(){
	setUserName();
}

let btnSkil = document.querySelector('.skil');
btnSkil.onclick = function(){
	window.location.href='skills/index.html';
}
	