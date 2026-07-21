import React, { useState } from "react";

export const SearchBar = ({
  placeholder = "Search...",
  accent = "#6366f1",
  bg = "#0f172a",
  width = "400px",
  onSearch = (query) => {},
  debounceTime = 300
}) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  };
  
  return (
    <div style={{
      position: "relative",
      width: width,
      maxWidth: "100%"
    }}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "12px 16px 12px 42px",
          borderRadius: "12px",
          border: "1px solid " + (isFocused ? alpha(accent, 0.4) : "rgba(255,255,255,0.1)"),
          background: "rgba(255,255,255,0.03)",
          color: "#fff",
          fontSize: "14px",
          fontFamily: "system-ui, sans-serif",
          outline: "none",
          transition: "border 0.2s, box-shadow 0.2s",
          boxShadow: isFocused ? "0 0 0 3px " + alpha(accent, 0.15) : "none"
        }}
      />
      <div style={{
        position: "absolute",
        left: "16px",
        top: "50%",
        transform: "translateY(-50%)",
        color: isFocused ? accent : "rgba(255,255,255,0.4)",
        transition: "color 0.2s"
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
      {query && (
        <button
          onClick={() => {
            setQuery("");
            onSearch("");
          }}
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "transparent",
            border: "none",
            color: "rgba(255,255,255,0.3)",
            cursor: "pointer",
            padding: "4px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "color 0.2s"
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
};