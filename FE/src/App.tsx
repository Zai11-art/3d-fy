import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import NoNav from "./layout/no-nav";
import useMode from "./hooks/state";
import Feed from "./pages/Feed/feed";
import Post from "./pages/Post/post";
import Home from "./pages/Home/home";
import Login from "./pages/Auth/login";
import Learn from "./pages/Learn/learn";
import Error from "./pages/Error/error";
import About from "./pages/About/about";
import WithNav from "./layout/with-nav";
import Viewer from "./pages/Viewer/Viewer";
import Models from "./pages/Models/models";
import Upload from "./pages/Upload/upload";
import Register from "./pages/Auth/register";
import Profile from "./pages/Profile/profile";
import Showcase from "./pages/Showcase/showcase";
import Settings from "./pages/Settings/settings";
import Following from "./pages/Profile/following";
import Followers from "./pages/Profile/followers";
import MainViewer from "./components/main-viewer";
import AuthedRoute from "./layout/protected-route";
import Dashboard from "./pages/Dashboard/dashboard";
import PasswordForm from "./pages/Settings/password-setting";

// PROTECTED ROUTES
const routes = [
  { path: "/:userId/dashboard", element: <Dashboard /> },
  { path: "/:userId/profile", element: <Profile /> },
  { path: "/:userId/upload", element: <Upload /> },
  { path: "/user/settings", element: <Settings /> },
  { path: "/user/settings/password", element: <PasswordForm /> },
  { path: "/:userId/followers", element: <Followers /> },
  { path: "/:userId/following", element: <Following /> },
  { path: "/post/:postId", element: <Post /> },
];

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
          <Route path="/feed" element={<Feed />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/about" element={<About />}></Route>

          {routes.map((route) => (
            <Route
              path={route.path}
              element={
                <AuthedRoute isAuth={isAuth} user={user}>
                  {route.element}
                </AuthedRoute>
              }
            ></Route>
          ))}

          <Route
            path="/view-3d"
            element={<MainViewer showLeva={true} hdri={"sunset"} />}
          ></Route>

          <Route path="*" element={<Error />}></Route>
        </Route>

        {/* WITHOUT NAV */}
        <Route element={<NoNav />}>
          <Route
            path="/viewer"
            element={
              <Viewer
                showLeva={true}
                wireframe={false}
                normal={false}
                color={""}
                hdri={""}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
