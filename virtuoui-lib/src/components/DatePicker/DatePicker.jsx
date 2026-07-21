import React, { useState, useRef, useEffect } from "react";

export const DatePicker = ({
  value = null,
  onChange = () => {},
  placeholder = "Select date",
  color = "#6366f1",
  textColor = "#1f2937",
  size = "md",
  variant = "filled",
  disabled = false,
  fullWidth = false,
  icon = null,
}) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState(value ? new Date(value) : new Date());
  const [selected, setSelected] = useState(value ? new Date(value) : null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      background: hovered ? shadeColor(color, -15) : "#ffffff",
      color: textColor,
      border: `1.5px solid ${hovered ? shadeColor(color, -15) : "#e5e7eb"}`,
    };
  };

  const triggerStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "8px",
    fontFamily: "system-ui, sans-serif",
    fontWeight: 600,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? "100%" : "auto",
    minWidth: "180px",
    boxShadow:
      variant === "filled" && !disabled && !pressed
        ? `0 4px 14px ${color}22`
        : "none",
    transform: pressed && !disabled ? "scale(0.96)" : "scale(1)",
    transition: "all 0.15s ease",
    ...sizes[size],
    ...getVariantStyle(),
  };

  const formatDate = (date) => {
    if (!date) return placeholder;
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const buildCalendarDays = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const total = daysInMonth(year, month);
    const startOffset = firstDayOfMonth(year, month);
    const days = [];
    for (let i = 0; i < startOffset; i++) days.push(null);
    for (let d = 1; d <= total; d++) days.push(d);
    return days;
  };

  const isSameDay = (a, b) =>
    a &&
    b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const handleSelectDay = (day) => {
    if (!day) return;
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    setSelected(newDate);
    onChange(newDate);
    setOpen(false);
  };

  const changeMonth = (delta) => {
    setViewDate(
      new Date(viewDate.getFullYear(), viewDate.getMonth() + delta, 1)
    );
  };

  const monthLabel = viewDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const weekdayLabels = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", display: fullWidth ? "block" : "inline-block" }}
    >
      <button
        style={triggerStyle}
        onClick={!disabled ? () => setOpen((o) => !o) : undefined}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setPressed(false);
        }}
        onMouseDown={() => !disabled && setPressed(true)}
        onMouseUp={() => setPressed(false)}
        disabled={disabled}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {icon || <CalendarIcon color={variant === "filled" ? textColor : color} />}
          <span>{formatDate(selected)}</span>
        </span>
      </button>

      {open && !disabled && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            zIndex: 20,
            background: "#ffffff",
            border: "1.5px solid #e5e7eb",
            borderRadius: "12px",
            boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
            padding: "16px",
            width: "280px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <NavButton onClick={() => changeMonth(-1)} color={color}>
              ‹
            </NavButton>
            <span style={{ fontWeight: 600, fontSize: "14px", color: "#1f2937" }}>
              {monthLabel}
            </span>
            <NavButton onClick={() => changeMonth(1)} color={color}>
              ›
            </NavButton>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "4px",
              marginBottom: "6px",
            }}
          >
            {weekdayLabels.map((w, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#9ca3af",
                }}
              >
                {w}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "4px",
            }}
          >
            {buildCalendarDays().map((day, i) => {
              const dateObj = day
                ? new Date(viewDate.getFullYear(), viewDate.getMonth(), day)
                : null;
              const isSelected = isSameDay(dateObj, selected);
              const isToday = isSameDay(dateObj, new Date());

              return (
                <button
                  key={i}
                  onClick={() => handleSelectDay(day)}
                  disabled={!day}
                  style={{
                    aspectRatio: "1",
                    border: "none",
                    borderRadius: "7px",
                    background: isSelected ? color : "transparent",
                    color: isSelected
                      ? "#ffffff"
                      : day
                      ? "#1f2937"
                      : "transparent",
                    fontWeight: isToday && !isSelected ? 700 : 500,
                    fontSize: "13px",
                    cursor: day ? "pointer" : "default",
                    transition: "all 0.12s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (day && !isSelected) e.currentTarget.style.background = color + "18";
                  }}
                  onMouseLeave={(e) => {
                    if (day && !isSelected) e.currentTarget.style.background = "transparent";
                  }}
                >
                  {day || ""}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const NavButton = ({ onClick, color, children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: "none",
        background: hovered ? color + "18" : "transparent",
        color: color,
        width: "26px",
        height: "26px",
        borderRadius: "6px",
        fontSize: "16px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.12s ease",
      }}
    >
      {children}
    </button>
  );
};

const CalendarIcon = ({ color = "#1f2937" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke={color} strokeWidth="2" />
    <path d="M16 2v4M8 2v4M3 10h18" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Darkens a hex color by `percent`
function shadeColor(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + percent));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + percent));
  const b = Math.min(255, Math.max(0, (num & 0xff) + percent));
  return `rgb(${r},${g},${b})`;
}