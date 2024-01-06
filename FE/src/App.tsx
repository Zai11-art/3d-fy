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
import Auth from "./pages/Auth/login";
import About from "./pages/About/About";
import Register from "./pages/Auth/register";
import Login from "./pages/Auth/login";
import useMode from "./hooks/state";
import AuthedRoute from "./layout/protected-route";
import Upload from "./pages/Upload/upload";

function App() {
  const isAuth = useMode((state) => state.isLoggedIn);
  const user = useMode((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        {/* WITH NAV */}
        <Route element={<WithNav />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/models" element={<Models />}></Route>
          <Route path="/showcase" element={<Showcase />}></Route>
          <Route path="/learn" element={<Learn />}></Route>
          <Route
            path="/user/dashboard"
            element={
              <AuthedRoute user={user}>
                <Dashboard />
              </AuthedRoute>
            }
          ></Route>
          <Route
            path="/user/profile"
            element={
              <AuthedRoute user={user}>
                <UserProfile />
              </AuthedRoute>
            }
          ></Route>
          <Route
            path="/user/upload"
            element={
              <AuthedRoute user={user}>
                <Upload />
              </AuthedRoute>
            }
          ></Route>
          <Route path="/feed" element={<Register />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
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
