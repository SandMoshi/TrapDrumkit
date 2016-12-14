window.addEventListener('keydown',function(e){
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	 if(!audio){
		 console.log('null key pressed..doing nothing');
		 return;
	 }
 console.log("const audio= " + audio);
 audio.currentTime = 0;
 audio.play();
});
												
										