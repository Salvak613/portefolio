import './App.css'
import NavBar from "./Components/NavBar.tsx";
import WindowsContainer from './Components/WindowsContainer.tsx';

function App() {
  return (
    <>
    <img className="monitor" src="/stock img/screen9.png" />
    <div className="screen-container">
      
      <div className="screen-content">
      
        <NavBar className="NavBar" />
      </div>
    </div>
    </>
  )
}

export default App
