import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Route } from "react-router-dom";

import en from "./shared/locales/en.json";
import he from "./shared/locales/he.json";
import HomeScreen from "./screens/components/HomeScreen";

i18n.use(initReactI18next).init({
  resources: {
    en,
    he,
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  return (
    <>
      <Route path="/" exact>
        <HomeScreen />
      </Route>
    </>
  );
};

export default App;
