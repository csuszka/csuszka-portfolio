import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PageStateProvider } from "./context/page-state-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PageStateProvider>
    <App />
  </PageStateProvider>
);
