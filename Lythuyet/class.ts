class Car {
    brand: String;
    speed: number;
    constructor(carBrand: string) {
        this.brand = carBrand;
        this.speed = 0;
    }
    accelerate(): void {
        this.speed +=10;
        console.log('Xe chạy with speed ${this.speed} km/h');
        }
    }
    const myCar = new Car("Toyota");
    myCar.accelerate();