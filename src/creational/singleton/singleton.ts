export default class Singleton {
  private static _instance: Singleton = new Singleton();
  private _timeStamp: number;
  private constructor() {
    this._timeStamp = Date.now();
  }

  get timeStamp() {
    return this._timeStamp;
  }

  public static get instance(): Singleton {
    return this._instance;
  }
}
