import React from "react";

export const ProfileCard = ({
  name = "John Doe",
  bio = "Software Engineer | Tech Enthusiast",
  avatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&q=80",
  accent = "#6366f1",
  bg = "#0f172a",
  onFollowClick = () => {},
  onMessageClick = () => {}
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{ background: bg, borderRadius: "20px", padding: "24px", width: "280px", color: "#fff", fontFamily: "system-ui,sans-serif", boxShadow: "0 10px 40px rgba(0,0,0,0.5)", border: "1px solid " + alpha(accent, 0.25), position: "relative", overflow: "hidden" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
        <div style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", border: "3px solid " + alpha(accent, 0.3) }}>
          <img src={avatar} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ fontSize: "18px", fontWeight: "700", color: "#fff" }}>{name}</div>
        <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", textAlign: "center" }}>{bio}</div>
        <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
          <button onClick={onFollowClick} style={{ padding: "8px 16px", borderRadius: "8px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")" , color: "#fff", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}>Follow</button>
          <button onClick={onMessageClick} style={{ padding: "8px 16px", borderRadius: "8px", border: "1px solid " + alpha(accent, 0.3), background: "transparent", color: accent, fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}>Message</button>
        </div>
      </div>
    </div>
  );
};