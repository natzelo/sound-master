//Create a song class for every song
class Song {
    constructor(title, artist, src) {
        this.title = title;
        this.artist = artist;
        this.playable = new Audio(src);
    }
}

// Register all playable songs
const jazz_before = new Song('Kagen No Tsuki', 'John Doe', '../sounds/jazz_before.mp3');
const jazz_after = new Song('Cascade', 'Ikimogakari', '../sounds/jazz_after.mp3');
const pop_before = new Song('Ruzaki', 'Kutyi', '../sounds/pop_before.mp3');
const pop_after = new Song('Lelouch', 'VI Britania', '../sounds/pop_after.mp3');

//Create songs objects for all songs
const songs = {
    pop_after,
    pop_before,
    jazz_after,
    jazz_before
}

let song;

//Click Listener for play button
$('.play').click(() => {
    let val = $('#song-select').val() + '_' + $("input[type='radio']:checked").val() ;
    song = songs[val];
    $('#title').html(song.title);
    $('#artist').html(song.artist);
    song.playable.play();
})

//Click Listener for pause button
$('.pause').click(() => {
    if(song) {
        song.playable.pause();
    }
})