export interface Wath {
  showTime(): void;
}

export class MechanicalWatch implements Wath {
  showTime(): void {
    console.log('MechanicalWatch show time');
  }
}

export class DigitalWatch implements Wath {
  showTime(): void {
    console.log('DigitalWatch show time');
  }
}

export interface WatchMaker {
  createWatch(): Wath;
}

export class MechanicalWatchMaker implements WatchMaker {
  createWatch(): Wath {
    return new MechanicalWatch();
  }
}

export class DigitalWatchMaker implements WatchMaker {
  createWatch(): Wath {
    return new DigitalWatch();
  }
}

export class FactoryWatch {
  static getMakerByName(maker: string): WatchMaker {
    const makerLowerCase = maker.toLowerCase();
    if (makerLowerCase === 'digital') {
      return new DigitalWatchMaker();
    }
    if (makerLowerCase === 'mechanical') {
      return new MechanicalWatchMaker();
    }
    throw new Error('unknown watch type');
  }
}
