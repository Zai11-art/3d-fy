import { Stats } from "@react-three/drei";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";


export default () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
