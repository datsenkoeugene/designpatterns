export default class Singletone {
  private static _instance: Singletone = new Singletone();
  private _timeStamp: number;
  private constructor() {
    this._timeStamp = Date.now();
  }

  get timeStamp() {
    return this._timeStamp;
  }

  public static get instance(): Singletone {
    return this._instance;
  }
}
