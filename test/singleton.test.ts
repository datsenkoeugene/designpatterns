import Singletone from '../src/creational/singletone/singleton';

describe('singleton', () => {
  test(`singleton1.timeStamp === singleton2.timeStamp`, () => {
    const singleton1 = Singletone.instance;
    const singleton2 = Singletone.instance;
    expect(singleton1.timeStamp).toEqual(singleton2.timeStamp);
  });

  test(`Singleton.instance === Singleton.instance`, () => {
    const singleton1 = Singletone.instance;
    const singleton2 = Singletone.instance;
    expect(singleton1 === singleton2).toBe(true);
  });
});
