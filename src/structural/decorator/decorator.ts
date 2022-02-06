interface Shape {
  draw(): void;
}

export class Rectangle implements Shape {
  draw(): void {
    console.log('Shape: Rectangle');
  }
}

export class Circle implements Shape {
  draw(): void {
    console.log('Shape: Circle');
  }
}

export abstract class ShapeDecorator implements Shape {
  protected decoratedShape: Shape;

  constructor(decoratedShape: Shape) {
    this.decoratedShape = decoratedShape;
  }

  draw(): void {
    this.decoratedShape.draw();
  }
}

export class RedShapeDecorator extends ShapeDecorator {
  constructor(shape: Shape) {
    super(shape);
  }

  override draw(): void {
    this.decoratedShape.draw();
    this.setRedBorder();
  }

  private setRedBorder(): void {
    console.log('Border Color: Red');
  }
}
