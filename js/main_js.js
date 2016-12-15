window.addEventListener('keydown',function(e){
		//Send event (e) to the playSound function
	  playSound(e);
});

function playSound(e){
	 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	 if(!audio){
			 console.log('null key pressed..doing nothing');
			 return;
		 }
	 console.log("const audio= " + audio);
	 //--
	 const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	 key.classList.add("playing");
	 console.log("const key= " + key);
	 //--
	 //--
	 audio.currentTime = 0; 
	 audio.play(); 
	
	 const keys = document.querySelectorAll(".key");
	 keys.forEach(key => key.addEventListener('transitionend', removeTransition));
} 


function removeTransition(e){
	if(e.propertyName !== 'transform') return; //only remove transition if it is a transform
	console.log(this);
	this.classList.remove("playing"); //remove class and revert to original style
}
												