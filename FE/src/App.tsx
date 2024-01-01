import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import WithNav from "./layout/with-nav";
import NoNav from "./layout/no-nav";
import Home from "./pages/Home/Home";
import Viewer from "./pages/Viewer/Viewer";
import Models from "./pages/Models/Models";
import Showcase from "./pages/Showcase/Showcase";
import Learn from "./pages/Learn/Learn";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserProfile from "./pages/UserProfile/UserProfile";
import Auth from "./pages/Auth/Auth";
import About from "./pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* WITH NAV */}
        <Route element={<WithNav />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/models" element={<Models />}></Route>
          <Route path="/showcase" element={<Showcase />}></Route>
          <Route path="/learn" element={<Learn />}></Route>
          <Route path="/user/dashboard" element={<Dashboard />}></Route>
          <Route path="/user" element={<UserProfile />}></Route>
          <Route path="/register" element={<Auth />}></Route>
          <Route path="/login" element={<Auth />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>

        {/* WITHOUT NAV */}
        <Route element={<NoNav />}>
          <Route path="/viewer" element={<Viewer />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
