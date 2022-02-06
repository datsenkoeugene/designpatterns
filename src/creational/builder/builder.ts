export enum Transmission {
  MANUAL,
  AUTO,
}

export class Car {
  private _name!: string;
  private _transmission!: Transmission;
  private _maxSpeed!: number;

  set name(name: string) {
    this._name = name;
  }

  set transmission(transmission: Transmission) {
    this._transmission = transmission;
  }

  set maxSpeed(maxSpeed: number) {
    this._maxSpeed = maxSpeed;
  }

  get name() {
    return this._name;
  }

  get transmission() {
    return this._transmission;
  }

  get maxSpeed() {
    return this._maxSpeed;
  }
}

export abstract class CarBuilder {
  protected _car!: Car;

  createCar() {
    this._car = new Car();
  }

  abstract buildName(): void;

  abstract buildtransmission(): void;

  abstract buildMaxSpeed(): void;

  get car() {
    return this._car;
  }
}

export class FordBuilder extends CarBuilder {
  buildName(): void {
    this.car.name = 'Ford';
  }
  buildtransmission(): void {
    this.car.transmission = Transmission.AUTO;
  }
  buildMaxSpeed(): void {
    this.car.maxSpeed = 230;
  }
}

export class SubaruBuilder extends CarBuilder {
  buildName(): void {
    this.car.name = 'Subaru';
  }
  buildtransmission(): void {
    this.car.transmission = Transmission.MANUAL;
  }
  buildMaxSpeed(): void {
    this.car.maxSpeed = 280;
  }
}

export class Director {
  private _carbuilder!: CarBuilder;

  set carbuilder(carbuilder: CarBuilder) {
    this._carbuilder = carbuilder;
  }

  buildCar() {
    this._carbuilder.createCar();
    this._carbuilder.buildName();
    this._carbuilder.buildtransmission();
    this._carbuilder.buildMaxSpeed();    
    return this._carbuilder.car;
  }
}
