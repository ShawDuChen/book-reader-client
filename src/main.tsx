import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "normalize.css/normalize.css";
import "./index.css";
import { ConfigProvider, theme, App as AntdApp } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AntdApp>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          components: {
            Breadcrumb: {
              itemColor: "#FFFFFFA6",
              lastItemColor: "#FFFFFF",
              separatorColor: "#FFFFFF",
            },
          },
        }}>
        <App />
      </ConfigProvider>
    </AntdApp>
  </React.StrictMode>,
);
