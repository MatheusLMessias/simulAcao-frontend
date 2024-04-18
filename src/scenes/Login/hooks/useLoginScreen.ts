import { useState } from "react";

const UseLoginScreen = () => {
  const [name, setName] = useState<String>("Teste Matheus");

  return {
    name,
  };
};

export default UseLoginScreen;
