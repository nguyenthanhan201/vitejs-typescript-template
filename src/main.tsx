import ReactDOM from "react-dom/client";
import Router from "./routers/Router";
import "./styles/main.scss";

function App() {
  return <Router />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
);
