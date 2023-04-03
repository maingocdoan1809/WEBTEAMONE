import "./App.css";
import Login from "./pages/login/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./pages/register/Register";
import Main from "./pages/main/Main";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/WEBTEAMONE/" element={<Main />} />
          <Route path="/WEBTEAMONE/register" element={<Register />} />
          <Route path="/WEBTEAMONE/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
