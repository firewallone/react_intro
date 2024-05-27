import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./components/SearchParams";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CarDetailsContainer from "./components/CarDetail/CarDetails.cont";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="py-5 text-3xl font-bold tracking-tight text-gray-900">
              <Link to={"/"}>Velocity Vault</Link>
            </h2>
            <Routes>
              <Route path="/" element={<SearchParams />} />
              <Route path="/details/:id" element={<CarDetailsContainer />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
