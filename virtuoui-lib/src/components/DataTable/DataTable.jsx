import React, { useState } from "react";

export const DataTable = ({
  columns = ["Name", "Email", "Status", "Role"],
  data = [
    ["Alex Johnson", "alex@example.com", "Active", "Admin"],
    ["Maria Garcia", "maria@example.com", "Pending", "User"],
    ["James Smith", "james@example.com", "Active", "Editor"],
    ["Sarah Williams", "sarah@example.com", "Inactive", "Viewer"]
  ],
  accent = "#6366f1",
  bg = "#0f172a",
  borderColor = "rgba(255,255,255,0.08)",
  onRowClick = () => {}
}) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };

  const sortedData = [...data];
  if (sortConfig.key !== null) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div style={{
      background: bg,
      borderRadius: "12px",
      overflow: "hidden",
      border: "1px solid " + borderColor,
      fontFamily: "system-ui, sans-serif",
      width: "100%",
      maxWidth: "800px",
      boxShadow: "0 10px 40px rgba(0,0,0,0.4)"
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
        background: alpha(accent, 0.05),
        borderBottom: "1px solid " + borderColor
      }}>
        {columns.map((column, index) => (
          <div 
            key={index}
            onClick={() => requestSort(index)}
            style={{
              padding: "14px 16px",
              fontWeight: "700",
              fontSize: "13px",
              color: "rgba(255,255,255,0.7)",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              borderRight: index < columns.length - 1 ? "1px solid " + borderColor : "none"
            }}
          >
            {column}
            {sortConfig.key === index && (
              <span style={{ fontSize: "12px" }}>
                {sortConfig.direction === "asc" ? "↑" : "↓"}
              </span>
            )}
          </div>
        ))}
      </div>
      {sortedData.map((row, rowIndex) => (
        <div 
          key={rowIndex}
          onClick={() => onRowClick(row)}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
            borderBottom: rowIndex < sortedData.length - 1 ? "1px solid " + borderColor : "none",
            cursor: "pointer",
            transition: "background 0.2s",
            "&:hover": {
              background: alpha(accent, 0.03)
            }
          }}
        >
          {row.map((cell, cellIndex) => (
            <div 
              key={cellIndex}
              style={{
                padding: "12px 16px",
                fontSize: "14px",
                color: cellIndex === 2 ? 
                  (cell === "Active" ? "#059669" : 
                   cell === "Pending" ? "#f59e0b" : "#ef4444") : 
                  "rgba(255,255,255,0.8)",
                borderRight: cellIndex < columns.length - 1 ? "1px solid " + borderColor : "none",
                fontWeight: cellIndex === 0 ? "600" : "400"
              }}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};