import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BookingProvider } from "./lib/providers/StepsContext.tsx";
import { FormProvider } from "./lib/providers/BookingContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <FormProvider>
      <BookingProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </BookingProvider>
    </FormProvider>
  </BrowserRouter>,
);
