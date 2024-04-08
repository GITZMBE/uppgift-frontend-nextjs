import { useState } from "react";

export const useOrderDetails = () => {
  const [input, setInput] = useState({
    cardNumber: "",
    expire: "",
    cvc: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: ""
  });

  return { input, setInput };
};