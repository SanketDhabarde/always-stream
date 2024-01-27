import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  FilterProvider,
  SearchProvider,
  UserListsProvider,
} from "./context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FilterProvider>
          <UserListsProvider>
            <SearchProvider>
              <App />
            </SearchProvider>
          </UserListsProvider>
        </FilterProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
