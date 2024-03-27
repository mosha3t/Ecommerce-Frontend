import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "@routes/AppRouter";
import "@styles/global.css";
import { Provider } from "react-redux";
import store from "@store/index";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
