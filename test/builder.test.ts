import {
  Car,
  Director,
  SubaruBuilder,
  Transmission,
} from '../src/creational/builder/builder';

describe('builder', () => {
  test(`should return car name`, () => {
    const car = new Car();
    car.name = 'Ford';
    expect(car.name).toBe('Ford');
  });

  test(`should return car transmission`, () => {
    const car = new Car();
    car.maxSpeed = 230;
    expect(car.maxSpeed).toBe(230);
  });

  test(`should return car maxSpeed`, () => {
    const car = new Car();
    car.transmission = Transmission.AUTO;
    expect(car.transmission).toBe(Transmission.AUTO);
  });

  test(`should return constructor name "Car"`, () => {
    const car = new Director();
    car.carbuilder = new SubaruBuilder();
    car.buildCar();
    expect(car.buildCar().constructor.name).toBe('Car');
  });

  test(`should return car`, () => {
    const expectCar = new Director();
    expectCar.carbuilder = new SubaruBuilder();
    expectCar.buildCar();
    const car = new Car();
    car.name = 'Subaru';
    car.maxSpeed = 280;
    car.transmission = Transmission.MANUAL;
    expect(car).toEqual(car);
  });

  test(`should set car name "Subaru"`, () => {
    const subaruBuilder = new SubaruBuilder();
    subaruBuilder.createCar();
    subaruBuilder.buildName();
    expect(subaruBuilder.car.name).toBe('Subaru');
  });

  test(`should set car maxSpeed 280`, () => {
    const subaruBuilder = new SubaruBuilder();
    subaruBuilder.createCar();
    subaruBuilder.buildMaxSpeed();
    expect(subaruBuilder.car.maxSpeed).toBe(280);
  });

  test(`should set car transmission Transmission.MANUAL`, () => {
    const subaruBuilder = new SubaruBuilder();
    subaruBuilder.createCar();
    subaruBuilder.buildtransmission();
    expect(subaruBuilder.car.transmission).toBe(Transmission.MANUAL);
  });
});
