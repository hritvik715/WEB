const posts = [
    { id: 1, content: "Good Post" },
    { id: 1, content: "funny Post" },
    { id: 1, content: "sad Post" },
    { id: 4, content: "Good Post" },
];

const postRes = posts.find((post) => post.content === "Good Post");//to get the first one only
const postRes1 = posts.filter((post) => post.content === "Good Post");//imp-> to get all 


console.log(postRes);
console.log(postRes1);