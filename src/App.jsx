import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./components/SearchParams";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CarDetails from "./components/CarDetail/CarDetails.cont";
import SelectedCarProvider from "./contexts/SelectedCarContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <SelectedCarProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="py-5 text-3xl font-bold tracking-tight text-gray-900">
                <Link to={"/"}>Velocity Vault</Link>
              </h2>
              <Routes>
                <Route path="/" element={<SearchParams />} />
                <Route path="/details/:id" element={<CarDetails />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </SelectedCarProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
