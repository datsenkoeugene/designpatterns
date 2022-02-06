import Singleton from '../src/creational/singleton/singleton';

describe('singleton', () => {
  test(`singleton1.timeStamp === singleton2.timeStamp`, () => {
    const singleton1 = Singleton.instance;
    const singleton2 = Singleton.instance;
    expect(singleton1.timeStamp).toEqual(singleton2.timeStamp);
  });

  test(`Singleton.instance === Singleton.instance`, () => {
    const singleton1 = Singleton.instance;
    const singleton2 = Singleton.instance;
    expect(singleton1 === singleton2).toBe(true);
  });
});
