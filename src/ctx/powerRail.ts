/* constants */
const ROW = 2;
const COL = 5;
const PITCH = 16;
const OUTER_HOLE_SIZE = 10;
const INNER_HOLE_SIZE = 6;
const OUTER_HOLE_COLOR = "#cccccc";
const INNER_HOLE_COLOR = "#000000";

const CHAMFER = (OUTER_HOLE_SIZE - INNER_HOLE_SIZE) / 2;

export const powerRailUnit = () => {
  const ctx = new OffscreenCanvas(
    PITCH * (ROW - 1) + OUTER_HOLE_SIZE,
    PITCH * (COL - 1) + OUTER_HOLE_SIZE
  ).getContext("2d")!;

  for (let ci = 0; ci < COL; ci++) {
    for (let ri = 0; ri < ROW; ri++) {
      ctx.fillStyle = OUTER_HOLE_COLOR;
      ctx.fillRect(PITCH * ri, PITCH * ci, OUTER_HOLE_SIZE, OUTER_HOLE_SIZE);
      ctx.fillStyle = INNER_HOLE_COLOR;
      ctx.fillRect(
        CHAMFER + PITCH * ri,
        CHAMFER + PITCH * ci,
        INNER_HOLE_SIZE,
        INNER_HOLE_SIZE
      );
    }
  }

  return ctx;
};

export const powerRail = (num: number) => {
  const canvas = document.createElement("canvas");
  canvas.width = 1000;
  canvas.height = 1000;
  const ctx = canvas.getContext("2d")!;

  const unitCtx = powerRailUnit();

  for (let i = 0; i < num; i++) {
    ctx.drawImage(unitCtx.canvas, 0, i * unitCtx.canvas.height);
  }

  return ctx;
};
