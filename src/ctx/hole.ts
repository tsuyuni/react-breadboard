import {
  OUTER_HOLE_SIZE,
  OUTER_HOLE_COLOR,
  INNER_HOLE_COLOR,
  INNER_HOLE_SIZE,
  CHAMFER,
} from "../constants";

export class Hole {
  private ctx: OffscreenCanvasRenderingContext2D;

  constructor() {
    const canvas = new OffscreenCanvas(OUTER_HOLE_SIZE, OUTER_HOLE_SIZE);
    this.ctx = canvas.getContext("2d")!;

    this.ctx.fillStyle = OUTER_HOLE_COLOR;
    this.ctx.fillRect(0, 0, OUTER_HOLE_SIZE, OUTER_HOLE_SIZE);

    this.ctx.fillStyle = INNER_HOLE_COLOR;
    this.ctx.fillRect(CHAMFER, CHAMFER, INNER_HOLE_SIZE, INNER_HOLE_SIZE);
  }

  getCanvas() {
    return this.ctx.canvas;
  }

  getWidth() {
    return this.ctx.canvas.width;
  }

  getHeight() {
    return this.ctx.canvas.height;
  }
}
