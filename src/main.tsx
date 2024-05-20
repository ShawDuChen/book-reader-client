import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "normalize.css/normalize.css";
import "./index.css";
import { ConfigProvider, theme } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
      }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
