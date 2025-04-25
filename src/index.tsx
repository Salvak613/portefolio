import ReactDOM from "react-dom/client";
import App from "./App";
import { WindowProvider } from "./Context/WindowContext"; // Assurez-vous que le chemin est correct

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <WindowProvider>
    <App />
  </WindowProvider>
);
