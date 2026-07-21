import React, { useState } from "react";

export const SideBar = ({
  items = ["Dashboard", "Projects", "Team", "Calendar", "Messages"],
  activeItem = "Dashboard",
  logo = "Company",
  accent = "#6366f1",
  bg = "#0f172a",
  width = "280px",
  onItemClick = () => {}
}) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{
      width: width,
      background: bg,
      height: "100vh",
      borderRight: "1px solid rgba(255,255,255,0.08)",
      fontFamily: "system-ui,sans-serif",
      display: "flex",
      flexDirection: "column",
      padding: "24px 0"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "0 24px",
        marginBottom: "32px"
      }}>
        <div style={{
          width: "32px",
          height: "32px",
          borderRadius: "8px",
          background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: "700",
          fontSize: "14px"
        }}>{logo[0]}</div>
        <div style={{ color: "#fff", fontWeight: "700", fontSize: "16px" }}>{logo}</div>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        padding: "0 16px"
      }}>
        {items.map((item) => (
          <button
            key={item}
            onClick={() => onItemClick(item)}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              background: activeItem === item ? alpha(accent, 0.15) : hoveredItem === item ? "rgba(255,255,255,0.03)" : "transparent",
              border: "none",
              padding: "10px 16px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              color: activeItem === item ? accent : "rgba(255,255,255,0.7)",
              fontWeight: activeItem === item ? "600" : "500",
              fontSize: "14px",
              transition: "all 0.2s"
            }}
          >
            <div style={{
              width: "24px",
              height: "24px",
              borderRadius: "6px",
              background: activeItem === item ? alpha(accent, 0.2) : "rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <div style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: activeItem === item ? accent : "rgba(255,255,255,0.3)"
              }} />
            </div>
            {item}
          </button>
        ))}
      </div>
      <div style={{
        marginTop: "auto",
        padding: "16px 24px",
        borderTop: "1px solid rgba(255,255,255,0.08)"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "8px 12px",
          borderRadius: "8px",
          background: "rgba(255,255,255,0.03)",
          cursor: "pointer"
        }}>
          <div style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)"
          }} />
          <div>
            <div style={{ color: "#fff", fontSize: "13px", fontWeight: "600" }}>John Doe</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};