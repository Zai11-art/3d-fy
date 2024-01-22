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
import Feed from "./pages/Feed/feed";
import Post from "./pages/Post/post";
import Followers from "./pages/UserProfile/followers";
import Following from "./pages/UserProfile/following";
import Playground from "./pages/playground/playground";
import MainViewer from "./components/main-viewer";
import Settings from "./pages/Settings/settings";
import PasswordForm from "./pages/Settings/password-setting";
import Error from "./pages/Error/error";

const routes = [
  { path: "/:userId/dashboard", element: <Dashboard /> },
  { path: "/:userId/profile", element: <UserProfile /> },
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
              element={<AuthedRoute user={user}>{route.element}</AuthedRoute>}
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
