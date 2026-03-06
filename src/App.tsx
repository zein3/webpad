import "./App.css"
import { useState } from 'react'
import Toolbar from './components/Toolbar';

function App() {
  const [fontSize, setFontSize] = useState<number>(16);
  const [darkMode, setDarkMode] = useState<boolean>(true);

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
    </div>
  )
}

export default App
