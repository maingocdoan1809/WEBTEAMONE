import "./App.css";
import Login from "./pages/login/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./pages/register/Register";
import Main from "./pages/main/Main";
import Error from "./pages/error/Error";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/WEBTEAMONE/" element={<Main />} />
          <Route path="/WEBTEAMONE/register" element={<Register />} />
          <Route path="/WEBTEAMONE/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
