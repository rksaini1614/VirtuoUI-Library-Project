import React, { useState } from "react";
 
export const Button = ({
  text = "Click me",
  onClick = () => {},
  color = "#6366f1",
  textColor = "#ffffff",
  size = "md",
  variant = "filled",
  disabled = false,
  fullWidth = false,
  icon = null,
}) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
 
  const sizes = {
    sm: { padding: "7px 14px", fontSize: "13px", borderRadius: "7px" },
    md: { padding: "10px 22px", fontSize: "15px", borderRadius: "9px" },
    lg: { padding: "14px 30px", fontSize: "17px", borderRadius: "11px" },
  };
 
  const getVariantStyle = () => {
    if (variant === "outline") {
      return {
        background: hovered ? color + "12" : "transparent",
        color: color,
        border: `2px solid ${color}`,
      };
    }
    if (variant === "ghost") {
      return {
        background: hovered ? color + "18" : "transparent",
        color: color,
        border: "none",
      };
    }
    // filled (default)
    return {
      background: hovered ? shadeColor(color, -15) : color,
      color: textColor,
      border: "none",
    };
  };
 
  const style = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "system-ui, sans-serif",
    fontWeight: 600,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? "100%" : "auto",
    boxShadow: variant === "filled" && !disabled && !pressed
      ? `0 4px 14px ${color}44`
      : "none",
    transform: pressed && !disabled ? "scale(0.96)" : "scale(1)",
    transition: "all 0.15s ease",
    ...sizes[size],
    ...getVariantStyle(),
  };
 
  return (
    <button
      style={style}
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={() => setPressed(false)}
      disabled={disabled}
    >
      {icon && <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>}
      {text}
    </button>
  );
};
 
// Darkens a hex color by `percent`
function shadeColor(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + percent));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + percent));
  const b = Math.min(255, Math.max(0, (num & 0xff) + percent));
  return `rgb(${r},${g},${b})`;
}