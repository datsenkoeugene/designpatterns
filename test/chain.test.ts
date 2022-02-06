import {
  ConsoleLogger,
  FileLogger,
  Level,
} from '../src/behavioral/chain/chain';

describe('chain', () => {
  test(`shold calls console.log with "Console:  error"`, () => {
    const logger0 = new ConsoleLogger(Level.ERROR);
    console.log = jest.fn();
    logger0.writeMessage('error', Level.ERROR);
    expect(console.log).toHaveBeenCalledWith('Console: ', 'error');
  });

  test(`shold calls console.log with "Console:  error"`, () => {
    const logger0 = new ConsoleLogger(Level.ERROR);
    console.log = jest.fn();
    logger0.writeMessage('error', Level.ERROR);
    expect(console.log).toHaveBeenCalledWith('Console: ', 'error');
  });

  test(`shold calls console.log with "Console:  error" "File:  error" "File:  debug"`, () => {
    const logger0 = new ConsoleLogger(Level.ERROR);
    logger0.setNext(new FileLogger(Level.DEBUG));
    console.log = jest.fn();
    logger0.writeMessage('error', Level.ERROR);
    logger0.writeMessage('ok', Level.INFO);
    logger0.writeMessage('debug', Level.DEBUG);
    expect(console.log).toHaveBeenCalledWith('Console: ', 'error');
    expect(console.log).toHaveBeenCalledWith('File: ', 'error');
    expect(console.log).toHaveBeenCalledWith('File: ', 'debug');
  });
});
