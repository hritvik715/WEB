interface Song {
    songName: string;
    singerName: string;
    printSongInfo(songName: string, singerName: string): string
}


const song1: Song = {
    songName: "teri yaado mey",
    singerName: "kk",
    printSongInfo: (songName, singerName) => {
        return `Song: ${songName} , Singer: ${singerName};`
    }
}

console.log(song1.printSongInfo("teri yaado mey", "kk"))