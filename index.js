let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songList = document.getElementById("songList");
let songImg = document.getElementById("songImg");
let songTitle = document.getElementById("songTitle");
let songArtist = document.getElementById("songArtist");
let songListPopup = document.getElementById("songListPopup");

let songs = [
    {
        title: "Love Story",
        artist: "Taylor Swift",
        src: "./songs/Love Story - Taylor Swift.mpeg",
        img: "./images/Taylor_Swift_-_Love_Story.png "
    },
    {
        title: "Pretty Girl",
        artist: "Maggie Lindemann",
        src: "./songs/Pretty Girl - Maggie Lindemann.mpeg",
        img: "./images/pregirl.jpg"
    },
    {
        title: "Sugar & Brownies",
        artist: "Dharia",
        src: "./songs/Sugar & Brownies - Dharia.mpeg",
        img: "./images/sugar and brownies.jpg"
    },
    {
        title: "Love You With All My Heart",
        artist: "Crush",
        src: "./songs/Love You with All My Heart - Crush.mpeg",
        img: "./images/lywamh.jpg"
    },
    {
        title: "Isn't Lovely",
        artist: "Billie Eillish",
        src: "./songs/Isn't Lovely -Billie Eilish.mpeg",
        img: "./images/lovely.webp"
    },
    {
        title: "Mood(Lofi)",
        artist: "Yagih Mael",
        src: "./songs/Mood (Lofi) - Yagih Mael.mpeg",
        img: "./images/mood lofi.jpg"
    },
    {
        title: "Nothing Gonna Change My Love For You",
        artist: "Shania Yan ",
        src: "./songs/Nothing's Gonna Change My Love For You - Shania Yan.mpeg",
        img: "./images/ngcymd.jpg"
    },
    {
        title: "Ride It",
        artist: "Jay Sean",
        src: "./songs/Ride It - Jay Sean.mpeg",
        img: "./images/ri.png"
    },
    {
        title: "RunAway",
        artist: "Aurora",
        src: "./songs/Runaway - Aurora.mpeg",
        img: "./images/ra.jpg"
    },
    {
        title: "Sunshine in the Rain",
        artist: "Shania Yan",
        src: "./songs/Sunshine in The Rain - Shania Yan.mpeg",
        img: "./images/sun.jpg"
    },
    {
        title: "Neth Manema",
        artist: "Dilu Beats",
        src: "./songs/Neth Manema - Dilu Beats.mp3",
        img: "./images/Neth-Manema.webp"
    },
];

let currentSongIndex = 0;

function loadSong(index) {
    let songData = songs[index];
    song.src = songData.src;
    songImg.src = songData.img;
    songTitle.textContent = songData.title;
    songArtist.textContent = songData.artist;
    song.load();
    playPause();
}

function toggleSongList() {
    if (songListPopup.style.display === "none" || songListPopup.style.display === "") {
        songListPopup.style.display = "block";
    } else {
        songListPopup.style.display = "none";
    }
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
}



function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
        songImg.classList.remove("playing");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
        songImg.classList.add("playing");
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

function forward() {
    song.currentTime += 10; // Skip forward 10 seconds
}

function backward() {
    song.currentTime -= 10; // Skip backward 10 seconds
}

let ul = document.createElement("ul");
songs.forEach((song, index) => {
    let li = document.createElement("li");
    li.textContent = song.title + " - " + song.artist;
    li.onclick = () => {
        currentSongIndex = index;
        loadSong(index);
        toggleSongList();
    };
    ul.appendChild(li);
});
songList.appendChild(ul);

loadSong(currentSongIndex);