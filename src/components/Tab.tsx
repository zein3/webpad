import { useState } from "react";

type TabData = {
  id: string;
  name: string;
  text: string;
};

type TabProps = {
  tab: TabData;
  active: boolean;
  onClick: () => void;
  onRename: (name: string) => void;
  onDelete: () => void;
  darkMode: boolean;
};

export default function Tab({
  tab,
  active,
  onClick,
  onRename,
  onDelete,
  darkMode,
}: TabProps) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(tab.name);

  const finishEdit = () => {
    setEditing(false);
    onRename(name);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "6px 10px",
        borderRight: "1px solid #444",
        background: active
          ? (darkMode ? "#333" : "#fff")
          : (darkMode ? "#222" : "#eaeaea"),
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {editing ? (
        <input
          value={name}
          autoFocus
          onChange={(e) => setName(e.target.value)}
          onBlur={finishEdit}
          onKeyDown={(e) => e.key === "Enter" && finishEdit()}
          style={{ width: 80 }}
        />
      ) : (
        <span onDoubleClick={() => setEditing(true)}>{tab.name}</span>
      )}

      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        style={{
          marginLeft: 6,
          background: "transparent",
          border: "none",
          color: "#aaa",
          cursor: "pointer",
        }}
      >
        ✕
      </button>
    </div>
  );
}