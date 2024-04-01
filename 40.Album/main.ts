function makeAlbum(artist : string, title : string): {artist : string, title : string}{
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
let album = makeAlbum('Edward', 'light')
console.log(album)
album = makeAlbum('Steve', 'red wave')
console.log(album)
album = makeAlbum('Joseph', 'seabreeze')
console.log(album)
