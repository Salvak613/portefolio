import "./App.css";
import NavBar from "./Components/NavBar.tsx";
import WindowsContainer from "./Components/WindowsContainer.tsx";
import { WindowProvider } from "./Context/WindowContext";
import { DraggableProvider } from "./Context/DraggableContext";

function App() {
  return (
    <WindowProvider>
      <DraggableProvider>
        <img className="monitor" src="/stock img/screen9.png" />
        <div className="screen-container">
          <div className="screen-content">
            <NavBar className="NavBar" />
          </div>
        </div>
      </DraggableProvider>
    </WindowProvider>
  );
}

export default App;
