var audio = new Audio();
audio.src = chrome.extension.getURL('bravo.mp3');
audio.play();