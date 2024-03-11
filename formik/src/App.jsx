import "./App.css";
import { Routes, Route } from "react-router-dom";
import GeneralForm from "./components/GeneralForm";
import Portal from "./components/Portal";
import Gecersiz from "./components/Gecersiz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GeneralForm />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="*" element={<Gecersiz />} />
      </Routes>
    </div>
  );
}

export default App;
