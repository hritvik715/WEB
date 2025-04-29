//original interface
interface Car1 {
    brand: string;
    start(): void;
}

//Declaration merging (interface extension)

interface Car1 {
    model: string;
    stop(): void;
}


const myCar: Car1 = {
    brand: 'BMW',
    model: 'M3',
    start() {
        console.log(`start.......`);
    },
    stop() {
        console.log(`Stop.........`);
    }
}


myCar.start();
myCar.stop();