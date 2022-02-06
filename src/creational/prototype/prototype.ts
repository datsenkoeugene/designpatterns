export interface Prototype {
  clone(): Prototype;
}

export default class User implements Prototype {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  clone() {
    return new User(this._name);
  }
}
