import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="">
      <Router>
        <Routes path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
