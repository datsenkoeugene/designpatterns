export enum Level {
  ERROR,
  DEBUG,
  INFO,
}

export abstract class Logger {
  priority: number;
  next: Logger | undefined;

  constructor(priority: number) {
    this.priority = priority;
  }

  setNext(next: Logger): void {
    this.next = next;
  }

  writeMessage(message: String, level: number): void {
    if (level <= this.priority) {
      this.write(message);
    }

    if (this.next !== null) {
      this.next?.writeMessage(message, level);
    }
  }

  abstract write(message: String): void;
}

export class ConsoleLogger extends Logger {
  constructor(priority: number) {
    super(priority);
  }
  write(message: String): void {
    console.log('Console: ', message);
  }
}

export class FileLogger extends Logger {
  constructor(priority: number) {
    super(priority);
  }

  write(message: String): void {
    console.log('File: ', message);
  }
}
