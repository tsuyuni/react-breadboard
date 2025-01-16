import { useContext } from "react";
import { breadBoardContext } from "./breadBoard";

export const Wire = ({
  from,
  to,
  via,
}: {
  from: string;
  to: string;
  via?: string[];
}) => {
  const { canvas } = useContext(breadBoardContext);
  console.log(canvas);

  if (canvas) {
    const ctx = canvas.getContext("2d")!;

    const wireCtx = new OffscreenCanvas(100, 20).getContext("2d")!;
    const gradient = wireCtx.createLinearGradient(0, 0, 6, 0);
    gradient.addColorStop(0, "#aa0000");
    gradient.addColorStop(0.5, "red");
    gradient.addColorStop(1, "#aa0000");

    wireCtx.strokeStyle = "#d0d0d0";
    wireCtx.lineWidth = 3;
    wireCtx.lineCap = "round";
    wireCtx.beginPath();
    wireCtx.moveTo(3, 1);
    wireCtx.lineTo(3, 19);
    wireCtx.stroke();

    wireCtx.strokeStyle = gradient;
    wireCtx.lineWidth = 6;
    wireCtx.lineCap = "butt";
    wireCtx.beginPath();
    wireCtx.moveTo(3, 3);
    wireCtx.lineTo(3, 17);
    // ctx.quadraticCurveTo(43, 100, 53, 100);
    // ctx.lineTo(100, 100);
    wireCtx.stroke();

    ctx.drawImage(wireCtx.canvas, 346, 298);
  }

  return <></>;
};
