import logo from "./logo.svg";
import { ProfilePage } from "./pages/ProfilePage";
import "./App.css";
import { Register } from "./pages";
import { Route, Routes } from "react-router";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Register />}></Route>
        <Route exact path="/profilePage/*" element={<ProfilePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
