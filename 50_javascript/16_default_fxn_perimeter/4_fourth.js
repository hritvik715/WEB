function rating(rate = 0) {
    if (rate === 5) {
        console.log("High Rating :)");
    } else if (rate === 0) {
        console.log("Low Rating :(");
    }
}

//imp-> default va;ue de rakha hai
rating();
rating(5);