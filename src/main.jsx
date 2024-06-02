import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Web3ModalProvider } from "./Wallet/Wallet.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Web3ModalProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Web3ModalProvider>
);
