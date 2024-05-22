import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "normalize.css/normalize.css";
import "./index.css";
import { ConfigProvider, theme, App as AntdApp } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  </React.StrictMode>,
);
