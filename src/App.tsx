import "./App.css"
import { useEffect, useState } from 'react'
import Toolbar from './components/Toolbar';
import type { TabData } from './components/TabList'
import TabList from "./components/TabList";
import WebPad from "./components/WebPad";

const STORAGE_KEY = "note_tabs";

function App() {
  const [fontSize, setFontSize] = useState<number>(16);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const [tabs, setTabs] = useState<TabData[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const parsed: TabData[] = JSON.parse(saved);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTabs(parsed);
      setActiveId(parsed[0].id);
    } else {
      const defaultTab: TabData = {
        id: crypto.randomUUID(),
        name: "Tab 1",
        text: "",
      };

      setTabs([defaultTab]);
      setActiveId(defaultTab.id);
    }
  }, []);

  useEffect(() => {
    if (tabs.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tabs));
    }
  }, [tabs]);

  const activeTab = tabs.find((t) => t.id === activeId);

  const setText = (text: string) => {
    setTabs((prev) =>
      prev.map((t) =>
        t.id === activeId ? { ...t, text } : t
      )
    );
  };


  return (
    <div
      style={{
        height: "100vh",
        background: darkMode ? "#121212" : "white",
        color: darkMode ? "white" : "black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Toolbar
        fontSize={fontSize}
        setFontSize={setFontSize}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <TabList
        tabs={tabs}
        setTabs={setTabs}
        activeId={activeId}
        setActiveId={setActiveId}
        darkMode={darkMode}
      />

      <WebPad
        text={activeTab?.text ?? ""}
        setText={setText}
        fontSize={fontSize}
      />
    </div>
  )
}

export default App
