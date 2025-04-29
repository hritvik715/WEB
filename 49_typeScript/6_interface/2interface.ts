interface Movie {
    readonly name: string;
    ratings: number;
    genra?: string//question mark lga diya mtlb optional hai
}


const movie1: Movie = {
    name: "star wars",
    ratings: 8.9,
    // genra: "Action",//imp->as it is optional
}

console.log(movie1.name);


// movie1.name = 'some other movie'//imp-> cant change bcz name is read only