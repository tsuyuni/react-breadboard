export class CenterDivider {
  private ctx: OffscreenCanvasRenderingContext2D;

  constructor(width: number, height: number) {
    this.ctx = new OffscreenCanvas(width, height).getContext("2d")!;

    const gradient = this.ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, "#d8d7d0");
    gradient.addColorStop(0.3, "#e8e7e0");
    gradient.addColorStop(0.7, "#e8e7e0");
    gradient.addColorStop(1, "#d8d7d0");
    this.ctx.fillStyle = gradient;

    this.ctx.fillRect(0, 0, width, height);
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
