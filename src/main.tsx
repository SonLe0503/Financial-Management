import Routers from "@/app/layouts/Routers";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@/styles/index.css"
import { store } from "@/store";

ReactDOM.createRoot(document.querySelector('body')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </Provider>
)

