import Tab from "./Tab";

export type TabData = {
  id: string;
  name: string;
  text: string;
};

type Props = {
  tabs: TabData[];
  setTabs: React.Dispatch<React.SetStateAction<TabData[]>>;
  activeId: string;
  setActiveId: (id: string) => void;
};

export default function TabList({
  tabs,
  setTabs,
  activeId,
  setActiveId,
}: Props) {
  const renameTab = (id: string, name: string) => {
    setTabs((prev) =>
      prev.map((t) => (t.id === id ? { ...t, name } : t))
    );
  };

  const deleteTab = (id: string) => {
    if (tabs.length === 1) return;

    const newTabs = tabs.filter((t) => t.id !== id);
    setTabs(newTabs);

    if (activeId === id) {
      setActiveId(newTabs[0].id);
    }
  };

  const addTab = () => {
    const newTab: TabData = {
      id: crypto.randomUUID(),
      name: `Tab ${tabs.length + 1}`,
      text: "",
    };

    setTabs([...tabs, newTab]);
    setActiveId(newTab.id);
  };

  return (
    <div
      style={{
        display: "flex",
        background: "#222",
        borderBottom: "1px solid #444",
      }}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          tab={tab}
          active={tab.id === activeId}
          onClick={() => setActiveId(tab.id)}
          onRename={(name) => renameTab(tab.id, name)}
          onDelete={() => deleteTab(tab.id)}
        />
      ))}

      <button
        onClick={addTab}
        style={{
          padding: "6px 12px",
          background: "transparent",
          border: "none",
          color: "#aaa",
          cursor: "pointer",
        }}
      >
        +
      </button>
    </div>
  );
}