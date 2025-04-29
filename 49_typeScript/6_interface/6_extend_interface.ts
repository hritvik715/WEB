interface MovieDetails {
    readonly name: string;
    ratings: number;
    printMovieInfo1(name: string, price: number, ratings: number): string | number;//return ya toh string hogi ya number hogi
}


interface movieGenra extends MovieDetails {
    genra: string;
}

const movie12: movieGenra = {
    name: 'golu pandit',
    genra: 'Action',
    ratings: 8.9,
    printMovieInfo1(name: string, price: number, ratings: number): string | number {
        return `Movie name: ${name} Price: ${price} Ratings: ${ratings}`;
    }
}




const res56 = movie12.printMovieInfo1('John wick', 100, 8);
console.log(res56);