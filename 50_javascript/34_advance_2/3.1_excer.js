// Create a factory function that generates different types of vehicles. Each vehicle object should have properties like  type, brand, model, and year.



function createVehicle(type, brand, model, year) {
    return { type, brand, model, year }
}

const vehicle1 = createVehicle("car", "TATA", "x123", 2020)
console.log(vehicle1)