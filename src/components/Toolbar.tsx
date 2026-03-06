import React from "react";

type ToolbarProps = {
  fontSize: number;
  setFontSize: (size: number) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const Toolbar: React.FC<ToolbarProps> = ({
  fontSize,
  setFontSize,
  darkMode,
  setDarkMode,
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        padding: "10px",
        alignItems: "center",
        background: darkMode ? "#1e1e1e" : "#f5f5f5",
        color: darkMode ? "white" : "black",
        borderBottom: "1px solid #ccc",
      }}
    >
      <label>
        Font Size:
        <select
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          style={{ marginLeft: "5px" }}
        >
          <option value={12}>12</option>
          <option value={14}>14</option>
          <option value={16}>16</option>
          <option value={18}>18</option>
          <option value={20}>20</option>
          <option value={24}>24</option>
        </select>
      </label>

      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>
    </div>
  );
};

export default Toolbar;