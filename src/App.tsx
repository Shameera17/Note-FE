import { useTranslation } from "react-i18next";
import "./App.css";

import logo from "./logo.svg";
import Login from "./Pages/auth/login/Login";
function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header ">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("common:welcome")}</p>
        <h1 className="text-3xl font-bold underline bg-orange-800">
          Hello world!
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Login />
      </header>
    </div>
  );
}

export default App;
