var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var volume = document.querySelector("#slider").value; 
	document.querySelector("#volume").innerHTML =  volume + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
 
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= .9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up video");
	video.playbackRate *= 1.1;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current video time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmute")

	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Mute")

	}
});

document.querySelector("#slider").addEventListener("click", function(){
	console.log("Volume Slider")
	console.log("Current volume is " + video.volume)
	video = document.querySelector("#player1"); 
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML =  video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
});
