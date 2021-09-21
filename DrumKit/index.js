let audio;

addEventListener("keypress", (evento) => {
  switch (evento.key) {
    case "w":
      audio = new Audio("/DrumKit/sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("/DrumKit/sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("/DrumKit/sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("/DrumKit/sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("/DrumKit/sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("/DrumKit/sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("/DrumKit/sounds/kick-bass.mp3");
      audio.play();
      break;
  }
});
