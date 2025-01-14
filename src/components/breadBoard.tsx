import { createContext, JSX, useEffect, useRef, useState } from "react";

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

    ctx.font = "20px serif";
    ctx.fillStyle = "#ff0000";
    ctx.fillText("+", 10, 380);

    ctx.fillStyle = "#00ffff";
    ctx.fillText("-", 10, 350);

    ctx.fillStyle = "#000000";
    ctx.fillRect(40, 29, 6, 6);
    ctx.fillRect(40, 45, 6, 6);
    ctx.fillRect(56, 29, 6, 6);
    ctx.fillRect(56, 45, 6, 6);
    ctx.fillRect(72, 29, 6, 6);
    ctx.fillRect(72, 45, 6, 6);
    ctx.fillRect(88, 29, 6, 6);
    ctx.fillRect(88, 45, 6, 6);
    ctx.fillRect(104, 29, 6, 6);
    ctx.fillRect(104, 45, 6, 6);
  }, [canvasRef]);

  return (
    <breadBoardContext.Provider value={{ canvas }}>
      <canvas ref={canvasRef} id="breadboard" width={600} height={400} />
      {children}
    </breadBoardContext.Provider>
  );
};
