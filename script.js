// 'use strict'

// const playPauseBtn = document.getElementById("playPauseBtn");
// const catchRadioBTN = document.getElementById("radioBTN");
// const catchAudioEngin = document.getElementById("radioEngin");


// //!radio program start

// let radioApiURL = 'https://mp3quran.net/api/v3/radios';
// let isPlaying = false;
// let myAudio;

// function resRadioAPI() {
//     fetch(radioApiURL)
//         .then(res => res.json())
//         .then(data => radioWork(data))
//         .catch(err => console.error('Error fetching radio data:', err));
// }

// function radioWork(receiveRadioData) {
//     let getRadioData = receiveRadioData;
//     let getRadioFileURL = getRadioData.radios[11].url;

//     catchAudioEngin.innerHTML = `<audio id="myAudio" src="${getRadioFileURL}"></audio>`;

//     // now assign myAudio value
//     myAudio = document.getElementById("myAudio");

//     // Play the audio automatically after loading
//     myAudio.play();
//     playPauseBtn.textContent = "⏸ Pause";
//     isPlaying = true; // Update the playing state
// }

// // Click event for the radio button
// catchRadioBTN.addEventListener('click', function () {
//     // Load the radio URL if not already done
//     if (!myAudio) {
//         resRadioAPI();
//         return; // Exit the function now
//     }

//     // Play or pause the audio
//     if (isPlaying) {
//         myAudio.pause();
//         playPauseBtn.textContent = "▶ Play";
//     } else {
//         myAudio.play();
//         playPauseBtn.textContent = "⏸ Pause";
//     }
//     isPlaying = !isPlaying;
// });
// //!radio program end

'use strict'

const playPauseBtn = document.getElementById("playPauseBtn");
const catchRadioBTN = document.getElementById("radioBTN");
const catchAudioEngin = document.getElementById("radioEngin");
const radioText = document.getElementById("radioText");

let radioApiURL = 'https://mp3quran.net/api/v3/radios';
let isPlaying = false;
let myAudio;

function resRadioAPI() {
    fetch(radioApiURL)
        .then(res => res.json())
        .then(data => radioWork(data))
        .catch(err => console.error('Error fetching radio data:', err));
}

function radioWork(receiveRadioData) {
    let getRadioData = receiveRadioData;
    let getRadioFileURL = getRadioData.radios[11].url;

    catchAudioEngin.innerHTML = `<audio id="myAudio" src="${getRadioFileURL}"></audio>`;

    // now assign myAudio value
    myAudio = document.getElementById("myAudio");

    // Play the audio automatically after loading
    myAudio.play();
    playPauseBtn.textContent = "⏸ Pause";
    isPlaying = true; // Update the playing state

    // Change text and add marquee effect
    radioText.textContent = "You are listening non-stop radio";
    radioText.classList.add('marquee-text');
}

// Click event for the radio button
catchRadioBTN.addEventListener('click', function () {
    // Load the radio URL if not already done
    if (!myAudio) {
        resRadioAPI();
        return; // Exit the function now
    }

    // Play or pause the audio
    if (isPlaying) {
        myAudio.pause();
        playPauseBtn.textContent = "▶ Play";

        // Revert text and remove marquee effect
        radioText.textContent = "listen live radio";  // Show default text when paused
        radioText.classList.remove('marquee-text');
    } else {
        myAudio.play();
        playPauseBtn.textContent = "⏸ Pause";

        // Change text and add marquee effect when playing
        radioText.textContent = "You are listening non-stop radio";
        radioText.classList.add('marquee-text');
    }
    isPlaying = !isPlaying;
});
