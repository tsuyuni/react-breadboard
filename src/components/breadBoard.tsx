import { createContext, JSX, useEffect, useRef, useState } from "react";
import { PowerRails } from "../ctx/powerRail";
import { Cols } from "../ctx/col";
import { CenterDivider } from "../ctx/centerDivider";

type BreadBoardProviderProps = { canvas?: HTMLCanvasElement };
export const breadBoardContext = createContext<BreadBoardProviderProps>(null!);

type BreadBoardProps = {
  children?: JSX.Element | JSX.Element[];
  row?: number;
  col?: number;
};
export const BreadBoard = ({
  children,
  row = 10,
  col = 30,
}: BreadBoardProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<HTMLCanvasElement>();

  useEffect(() => {
    if (!canvasRef.current) return;
    setCanvas(canvasRef.current);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = "#f3f1e9";
    ctx.fillRect(0, 0, 400, 600);

    const centerDivider = new CenterDivider(30, 600);
    ctx.drawImage(centerDivider.getCanvas(), 185, 0);

    ctx.lineWidth = 2;

    const newCanvas = document.createElement("canvas");
    newCanvas.width = 100;
    newCanvas.height = 100;
    const newCtx = newCanvas.getContext("2d")!;
    newCtx.font = "96px serif";
    newCtx.fillStyle = "#ff0000";
    newCtx.beginPath();
    newCtx.fillText("+", 45, 50);
    newCtx.stroke();

    ctx.drawImage(newCanvas, 0, 370, 25, 25);

    ctx.fillStyle = "#00ffff";
    ctx.fillText("-", 10, 350);

    const pr = new PowerRails(5);
    ctx.drawImage(
      pr.getCanvas(),
      370 - pr.getWidth(),
      300 - pr.getHeight() / 2
    );
    ctx.drawImage(pr.getCanvas(), 20, 300 - pr.getHeight() / 2);

    const cols = new Cols(row / 2, col);
    ctx.drawImage(cols.getCanvas(), 90, 100);

    ctx.strokeStyle = "#c8c7c0";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(70, 0);
    ctx.lineTo(70, 600);
    ctx.stroke();

    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(10, 60);
    ctx.lineTo(10, 540);
    ctx.stroke();

    ctx.strokeStyle = "#0088ff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(60, 60);
    ctx.lineTo(60, 540);
    ctx.stroke();
  }, [canvasRef]);

  return (
    <breadBoardContext.Provider value={{ canvas }}>
      <canvas ref={canvasRef} id="breadboard" width={400} height={600} />
      {children}
    </breadBoardContext.Provider>
  );
};
