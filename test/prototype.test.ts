import User from '../src/creational/prototype/prototype';

describe('prototype', () => {
  test(`user === cloneUser should return false`, () => {
    const user = new User('Name');
    const cloneUser = user.clone();
    expect(user === cloneUser).toBe(false);
  });


  test(`user.name === cloneUser.name should return true`, () => {
    const user = new User('Name');
    const cloneUser = user.clone();
    expect(user.name === cloneUser.name).toBe(true);
  });
});
