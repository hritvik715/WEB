interface Vehicle {
    start(): void;
    stop(): void;
}

class Car1 implements Vehicle {
    start(): void {
        console.log(`Car is starting........`);
    }

    stop(): void {
        console.log(`Car is stopped`);
    }
}


const mycar = new Car1();
mycar.start();
mycar.stop();