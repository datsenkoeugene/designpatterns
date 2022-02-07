import {
  DigitalWatch,
  DigitalWatchMaker,
  FactoryWatch,
  MechanicalWatch,
  MechanicalWatchMaker,
} from '../src/creational/factory/factory';

describe('factory', () => {
  test(`should calls console.log with "MechanicalWatch show time"`, () => {
    console.log = jest.fn();
    new MechanicalWatch().showTime();
    expect(console.log).toHaveBeenCalledWith('MechanicalWatch show time');
  });

  test(`should calls console.log with "MechanicalWatch show time"`, () => {
    console.log = jest.fn();
    new DigitalWatch().showTime();
    expect(console.log).toHaveBeenCalledWith('DigitalWatch show time');
  });

  test(`should return constructor name "MechanicalWatch"`, () => {    
    const mechanicalWatch = new MechanicalWatchMaker().createWatch();
    expect(mechanicalWatch.constructor.name).toBe('MechanicalWatch');
  });


  test(`should return constructor name "DigitalWatch"`, () => {    
    const digitalWatch = new DigitalWatchMaker().createWatch();
    expect(digitalWatch.constructor.name).toBe('DigitalWatch');
  });

  test(`should return constructor name "DigitalWatchMaker"`, () => {    
    expect(FactoryWatch.getMakerByName('Digital').constructor.name).toBe('DigitalWatchMaker');
  });

  test(`should return constructor name "MechanicalWatchMaker"`, () => {    
    expect(FactoryWatch.getMakerByName('Mechanical').constructor.name).toBe('MechanicalWatchMaker');
  });

  test(`should return throw new Error`, () => {    
    expect(() => FactoryWatch.getMakerByName('')).toThrow(Error);    
  });

  test(`should return error message "unknown watch type"`, () => {    
    expect(() => FactoryWatch.getMakerByName('')).toThrow('unknown watch type');
  });
});
