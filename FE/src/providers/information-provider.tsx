import { useEffect, useState } from "react";
import InfoModal from "../components/info-modal";

const InformationModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <InfoModal />
    </>
  );
};

export default InformationModalProvider;
