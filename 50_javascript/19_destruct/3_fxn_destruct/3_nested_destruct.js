const songs = [
    { name: "Lucky You", singer: "Joyner", duration: 4.34 },
    { name: "Just Like you", singer: "NF", duration: 3.23 },
    { name: "Humble", singer: "Kendrick Lamar", duration: 2.33 },
    { name: "Old Town Road", singer: "Lil Nas X", duration: 1.43 },
    { name: "Cold SHolder", singer: "Central Cee", duration: 5.23 },
];

// const [, , { singer }] = songs;//imp-> comma ki vajah se first and secobd object delete ho gya
// console.log(singer);


const [, , , { singer: s }] = songs;
console.log(s);

