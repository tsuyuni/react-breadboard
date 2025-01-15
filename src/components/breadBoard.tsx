import { createContext, JSX, useEffect, useRef, useState } from "react";
import { powerRail } from "../ctx/powerRail";

export const breadBoardContext = createContext<{ canvas?: HTMLCanvasElement }>(
  null!
);

export const BreadBoard = ({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<HTMLCanvasElement>();

  useEffect(() => {
    if (!canvasRef.current) return;
    setCanvas(canvasRef.current);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = "#f3f1e9"; // 描画の塗り色を決める
    ctx.fillRect(0, 0, 600, 400);

    ctx.fillStyle = "#d8d7d0";
    ctx.fillRect(0, 185, 600, 30);

    ctx.lineWidth = 2;

    ctx.strokeStyle = "#00ffff";
    ctx.beginPath();
    ctx.moveTo(30, 20);
    ctx.lineTo(590, 20);
    ctx.stroke();

    ctx.strokeStyle = "#ff0000";
    ctx.beginPath();
    ctx.moveTo(30, 60);
    ctx.lineTo(590, 60);
    ctx.stroke();

    ctx.strokeStyle = "#ff0000";
    ctx.beginPath();
    ctx.moveTo(30, 380);
    ctx.lineTo(590, 380);
    ctx.stroke();

    ctx.strokeStyle = "#00ffff";
    ctx.beginPath();
    ctx.moveTo(30, 340);
    ctx.lineTo(590, 340);
    ctx.stroke();

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

    ctx.fillStyle = "#000000";
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        ctx.fillRect(40 + 96 * i + 16 * j, 29, 6, 6);
        ctx.fillRect(40 + 96 * i + 16 * j, 45, 6, 6);
      }
    }

    const pr = powerRail(5);
    ctx.drawImage(pr.canvas, 300, 100);
  }, [canvasRef]);

  return (
    <breadBoardContext.Provider value={{ canvas }}>
      <canvas ref={canvasRef} id="breadboard" width={600} height={400} />
      {children}
    </breadBoardContext.Provider>
  );
};
