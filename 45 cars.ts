type Car = {
    manufacturer: string;
    model: string;
    [key: string]: any;
};

function createCar(manufacturer: string, model: string, ...extras: [string, any][]): Car {
    const car: Car = {
        manufacturer,
        model,
    };

    extras.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

//  function with required information 
const myCar = createCar("civic", "Carmy", ["color", "blue"], ["year", 2023]);

console.log(myCar);

