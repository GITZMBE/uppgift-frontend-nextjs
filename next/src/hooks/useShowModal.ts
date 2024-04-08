import { useEffect, useState } from "react";

export const useShowModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (!showModal) {
      return;
    }

    setTimeout(() => {
      setShowModal(false);
    }, 1500);
  }, [showModal]);

  return {showModal, setShowModal};
};