import { useState, useEffect } from "react";
import ConfirmationModal from "../components/confirmation-modal";

const ConfirmationProvider = () => {
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <ConfirmationModal />
    </>
  );
};

export default ConfirmationProvider;
