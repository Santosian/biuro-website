const playButton = document.querySelector('.control-button:nth-child(2)');
const prevButton = document.querySelector('.control-button:nth-child(1)');
const nextButton = document.querySelector('.control-button:nth-child(3)');
const progressBar = document.querySelector('.progress-bar');
const timecode = document.querySelector('.timecode');
const audio = new Audio();

const songs = [
  { title: "Fernanda Abreu - Space Sound to Dance", file: "music/Playlist_01/Fernanda Abreu - Space Sound to Dance.mp3", duration: "03:10" },
  { title: "furious_frank_feat._ivy_barkakati-ahora_si_(franks_sunrise_mix", file: "music/Playlist_01/02-furious_frank_feat._ivy_barkakati-ahora_si_(franks_sunrise_mix)-a6b89154.mp3", duration: "05:32" }
  // Add more songs here
];

let currentSongIndex = 0;

function loadSong(index) {
  const song = songs[index];
  document.querySelector('.track-title').textContent = song.title;
  audio.src = song.file;
  timecode.textContent = `00:00|${song.duration}`;
}

function playPauseAudio() {
  if (audio.paused) {
    audio.play();
    playButton.textContent = '❚❚'; // Pause symbol
  } else {
    audio.pause();
    playButton.textContent = '►'; // Play symbol
  }
}

function updateProgress() {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
  timecode.textContent = `${formatTime(audio.currentTime)}|${songs[currentSongIndex].duration}`;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
}

// Event Listeners
audio.addEventListener('timeupdate', updateProgress);


// Set progress bar to zero on page load
audio.addEventListener('loadedmetadata', () => {
  progressBar.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
});

playButton.addEventListener('click', playPauseAudio);
nextButton.addEventListener('click', nextSong);
prevButton.addEventListener('click', prevSong);
const volumeSlider = document.querySelector('.volume-slider');



// Adjust volume when the slider value changes
volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value / 100; // Convert slider value (0-100) to 0-1 range
});
volumeSlider.value = audio.volume * 100; // Set slider to match the default audio volume



// Initialize
loadSong(currentSongIndex);


// Second Music Player Variables
const playButton2 = document.querySelector('.play-2');
const prevButton2 = document.querySelector('.prev-2');
const nextButton2 = document.querySelector('.next-2');
const progressBar2 = document.querySelector('.progress-bar-2');
const timecode2 = document.querySelector('.timecode-2');
const volumeSlider2 = document.querySelector('.volume-slider-2');
const trackTitle2 = document.querySelector('.track-title-2');
const audio2 = new Audio();

const songs2 = [
  { title: "Tom Tom Club - Wordy Rappinghood (12'' Version)", file: "music/Playlist_02/Tom Tom Club - Wordy Rappinghood (12'' Version).mp3", duration: "06:28" },
  { title: "Alejandro Molinari - Black Light (Vocal Mix)", file: "music/Playlist_02/Alejandro Molinari - Black Light (Vocal Mix) - MASTER.mp3", duration: "06:28" }
];

let currentSongIndex2 = 0;

// Load Song Function
function loadSong2(index) {
  const song = songs2[index];
  trackTitle2.textContent = song.title;
  audio2.src = song.file;
  timecode2.textContent = `00:00|${song.duration}`;
}

function playPauseAudio2() {
  if (audio2.paused) {
    audio2.play();
    playButton2.textContent = '❚❚'; // Pause symbol
  } else {
    audio2.pause();
    playButton2.textContent = '►'; // Play symbol
  }
}

function updateProgress2() {
  const progress = (audio2.currentTime / audio2.duration) * 100;
  progressBar2.style.width = `${progress}%`;
  timecode2.textContent = `${formatTime2(audio2.currentTime)}|${songs2[currentSongIndex2].duration}`;
}

function formatTime2(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function nextSong2() {
  currentSongIndex2 = (currentSongIndex2 + 1) % songs2.length;
  loadSong2(currentSongIndex2);
  audio2.play();
}

function prevSong2() {
  currentSongIndex2 = (currentSongIndex2 - 1 + songs2.length) % songs2.length;
  loadSong2(currentSongIndex2);
  audio2.play();
}

// Event Listeners for Player 2
audio2.addEventListener('timeupdate', updateProgress2);

playButton2.addEventListener('click', playPauseAudio2);
nextButton2.addEventListener('click', nextSong2);
prevButton2.addEventListener('click', prevSong2);

// Volume Control
volumeSlider2.addEventListener('input', () => {
  audio2.volume = volumeSlider2.value / 100;
});

volumeSlider2.value = audio2.volume * 100;

// Initialize Player 2
loadSong2(currentSongIndex2);



