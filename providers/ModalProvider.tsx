"use client";

import PreviewModal from "@/components/PreviewModal";
import useIsMounted from "@/hooks/useIsMounted";
import React, { useEffect } from "react";

const ModalProvider = () => {
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;
