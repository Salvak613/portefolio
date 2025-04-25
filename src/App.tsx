import "./App.css";
import NavBar from "./Components/NavBar.tsx";
import { WindowProvider } from "./Context/WindowContext";
import { DraggableProvider } from "./Context/DraggableContext";

function App() {
  return (
    <WindowProvider>
      <DraggableProvider>
        <img className="monitor" src="/stock img/screen9.png" />
        <div className="screen-container">
          <div className="screen-content">
            <NavBar />
          </div>
        </div>
      </DraggableProvider>
    </WindowProvider>
  );
}

export default App;
