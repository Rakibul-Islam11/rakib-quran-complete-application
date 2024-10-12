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
// tv start
//for tv start
let catchTv = document.getElementById("forTv");
const modal = document.getElementById('my_modal_3');
const videoPlayer = document.getElementById('videoPlayer');
const m3u8Url = 'https://dzkyvlfyge.erbvr.com/PeaceTvBangla/index.m3u8';

function tvFunc() {
    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(m3u8Url);
        hls.attachMedia(videoPlayer);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            videoPlayer.play(); // Automatically play the video when the manifest is parsed
        });
    } else if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
        videoPlayer.src = m3u8Url;
        videoPlayer.addEventListener('loadedmetadata', function () {
            videoPlayer.play(); // Automatically play the video when metadata is loaded
        });
    } else {
        alert('Your browser does not support HLS streaming.');
    }
}

catchTv.addEventListener("click", function () {
    tvFunc(); // Call the function to play the video
});

modal.addEventListener("close", function () {
    videoPlayer.pause(); // Pause the video when the modal is closed
});



// tv two

const catchTvTwo = document.getElementById("forTvTwo");
const catchvideoPlaTwo = document.getElementById("videoPlayerTwo");
const catchModalTwo = document.getElementById("my_modal_4");
const m3u8UrlTwo = 'https://media2.streambrothers.com:1936/8122/8122/playlist.m3u8';

function tvFuncTwo() {
    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(m3u8UrlTwo);
        hls.attachMedia(catchvideoPlaTwo);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            catchvideoPlaTwo.play(); // Automatically play the video when the manifest is parsed
        });
    } else if (catchvideoPlaTwo.canPlayType('application/vnd.apple.mpegurl')) {
        catchvideoPlaTwo.src = m3u8UrlTwo;
        catchvideoPlaTwo.addEventListener('loadedmetadata', function () {
            catchvideoPlaTwo.play(); // Automatically play the video when metadata is loaded
        });
    } else {
        alert('Your browser does not support HLS streaming.');
    }
}

catchTvTwo.addEventListener("click", function () {
    tvFuncTwo(); // Call the function to play the video
});

catchModalTwo.addEventListener("close", function () {
    catchvideoPlaTwo.pause(); // Pause the video when the modal is closed
});
