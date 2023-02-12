import "moment/locale/ka";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  loadLocalState,
  generateWeekDays,
  syncToStorage,
} from "services/diary";
import DiaryProvider from "contexts/diary";
import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <DiaryProvider
      history={loadLocalState() ?? generateWeekDays()}
      syncData={syncToStorage}
    >
      <App />
    </DiaryProvider>
  </React.StrictMode>
);

reportWebVitals();
