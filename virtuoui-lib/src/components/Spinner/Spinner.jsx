import React from "react";

export const Spinner = ({
  size = "40px",
  color = "#6366f1",
  speed = "0.8s",
  thickness = "4px",
  bg = "rgba(255,255,255,0.1)"
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: "50%",
      border: thickness + " solid " + bg,
      borderTopColor: color,
      animation: "spin " + speed + " linear infinite",
      margin: "0 auto"
    }} />
  );
};