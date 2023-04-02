import "./App.css";
import Login from "./pages/login/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/WEBTEAMONE/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
