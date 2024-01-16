// USE OUTLET AND WILL ACT AS CHILDREN OF A LAYOUT
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import InfoModal from "../components/info-modal";
import InputModal from "../components/input-confirmation-modal";
import Navbar from "../components/navbar";
import ScrollToTop from "../components/scroll-to-top-button";
import ConfirmationProvider from "../providers/confirmation-provider";
import InformationModalProvider from "../providers/information-provider";
import ModelModalProvider from "../providers/model-modal-provider";
import ToasterProvider from "../providers/toaster-provider";

export default () => {
  return (
    <>
      <ToasterProvider />
      <ModelModalProvider />
      <InformationModalProvider />
      <ConfirmationProvider />
      <InputModal />
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
