import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { breadBoardContext } from "./breadBoard";
export const Wire = () => {
    const { canvas } = useContext(breadBoardContext);
    console.log(canvas);
    if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx.strokeStyle = "#00ff00";
        ctx.beginPath();
        ctx.moveTo(30, 40);
        ctx.lineTo(590, 40);
        ctx.stroke();
    }
    return _jsx(_Fragment, {});
};
