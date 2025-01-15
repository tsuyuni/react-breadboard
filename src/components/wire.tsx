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

    ctx.strokeStyle = "#c40000";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(43, 32);
    ctx.lineTo(43, 100);
    ctx.stroke();
  }

  return <></>;
};
