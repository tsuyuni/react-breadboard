import { PITCH } from "../constants";
import { Hole } from "./hole";

export class ColUnit {
  private ctx: OffscreenCanvasRenderingContext2D;

  constructor(num: number) {
    const hole = new Hole();

    this.ctx = new OffscreenCanvas(
      hole.getWidth() * num + PITCH * (num - 1),
      hole.getHeight()
    ).getContext("2d")!;

    for (let i = 0; i < num; i++) {
      this.ctx.drawImage(hole.getCanvas(), PITCH * i, 0);
    }
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
