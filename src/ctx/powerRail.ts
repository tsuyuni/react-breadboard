import { PITCH } from "../constants";
import { Hole } from "./hole";

const ROW = 2;
const COL = 5;

export class PowerRails {
  private ctx: OffscreenCanvasRenderingContext2D;

  constructor(num: number) {
    const powerRailUnit = this.createPowerRailUnit();

    this.ctx = new OffscreenCanvas(
      powerRailUnit.width,
      powerRailUnit.height * num +
        (PITCH * 2 - new Hole().getHeight()) * (num - 1)
    ).getContext("2d")!;

    for (let i = 0; i < num; i++) {
      this.ctx.drawImage(
        powerRailUnit,
        0,
        (powerRailUnit.height + PITCH * 2 - new Hole().getHeight()) * i
      );
    }
  }

  private createPowerRailUnit() {
    const hole = new Hole();

    const ctx = new OffscreenCanvas(
      PITCH * (ROW - 1) + hole.getWidth(),
      PITCH * (COL - 1) + hole.getHeight()
    ).getContext("2d")!;

    for (let ci = 0; ci < COL; ci++) {
      for (let ri = 0; ri < ROW; ri++) {
        ctx.drawImage(hole.getCanvas(), PITCH * ri, PITCH * ci);
      }
    }

    return ctx.canvas;
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
