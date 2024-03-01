
function make_album(artist: string, title: string, tracks?: number): any {
    let album: any = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Creating albums
let album1 = make_album('Nusrat fateh ali khan', 'yeh jo halka halka suroor he',);
let album2 = make_album('Mehdi hassan sahab', 'ranjish hi sahi' );
let album3 = make_album('Atif aslam', 'aadat');



console.log(album1);
console.log(album2);
console.log(album3);
