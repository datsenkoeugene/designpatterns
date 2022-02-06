import {
  Circle,
  Rectangle,
  RedShapeDecorator,
} from '../src/structural/decorator/decorator';

describe('decorator', () => {
  test(`shold calls console.log with "Shape: Rectangle"`, () => {
    const rectangle = new Rectangle();
    console.log = jest.fn();
    rectangle.draw();
    expect(console.log).toHaveBeenCalledWith('Shape: Rectangle');
  });

  test(`shold calls console.log with "Shape: Circle"`, () => {
    const circle = new Circle();
    console.log = jest.fn();
    circle.draw();
    expect(console.log).toHaveBeenCalledWith('Shape: Circle');
  });

  test(`shold calls console.log with "Shape: Circle" and "Border Color: Red"`, () => {
    const redCircle = new RedShapeDecorator(new Circle());
    console.log = jest.fn();
    redCircle.draw();
    expect(console.log).toHaveBeenCalledWith('Shape: Circle');
    expect(console.log).toHaveBeenCalledWith('Border Color: Red');
  });
});
