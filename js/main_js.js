window.addEventListener('keydown',function(e){
		//Send event (e) to the playSound function
	  playSound(e);
});

window.addEventListener('click',function(e){
		//Send event (e) to the playSound function
	  playSound(e);
});

function playSound(e){
	 var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	 //if the keycode doesn't match anything, check to see if element was clicked instead
	 if(!audio){
		 		console.log(e); //Show which element was clicked
		 		var datakey = e.target.parentElement.getAttribute("data-key");
		    audio = document.querySelector(`audio[data-key="`+ datakey +`"]`);
		 }
	 //if no audio element matches keycode or click, then do nothing
	 if(!audio){
		 	console.log('null key pressed..doing nothing');
			return;
	 }
	 console.log("const audio= " + audio);
	 //--
	 var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	 //If the keycode doesn't match, check to see if element was clicked
	 if (key === null){
		 //Try getting it based on click target instead of keycode
		 key = document.querySelector(`.key[data-key="`+ datakey +`"]`);
	 }
	 key.classList.add("playing");
	 console.log("const key= " + key);
	 //--
	 //--
	 audio.currentTime = 0; 
	 audio.play(); 
	
	 const audiokeys = document.querySelectorAll(".key");
	//removed because of arrow function compatibility on iOS
//	 keys.forEach(key => key.addEventListener('transitionend', removeTransition));
	 Array.prototype.forEach.call (audiokeys, function(key){ 
		 key.addEventListener('transitionend', removeTransition);
	 });
} 


function removeTransition(e){
	if(e.propertyName !== 'transform') return; //only remove transition if it is a transform
	console.log(this);
	this.classList.remove("playing"); //remove class and revert to original style
}

