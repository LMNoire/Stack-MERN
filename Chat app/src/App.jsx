import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Chat from "./pages/chat/chat";
import ProfilteUpdate from "./pages/profileUpdate/profilteUpdate";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<ProfilteUpdate />} />
      </Routes>
    </>
  );
};

export default App;
