import React, { useEffect, useState } from "react";
import ModelModal from "../components/model-modal";

const ModelModalProvider = () => {
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ModelModal />
    </>
  );
};

export default ModelModalProvider;
