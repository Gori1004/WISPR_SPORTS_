import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

// Add your universal passwords here
const VALID_PASSWORDS = [
  "wispr2026",
  "teamaccess",
  "privatepreview",
];

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const accessGranted = localStorage.getItem("site_access");

    if (accessGranted === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    if (VALID_PASSWORDS.includes(password)) {
      localStorage.setItem("site_access", "true");
      setIsAuthenticated(true);
    } else {
      setError("Incorrect password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
        <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-2xl">
          <h1 className="text-3xl font-bold mb-2 text-center">
            Private Access
          </h1>

          <p className="text-zinc-400 text-center mb-6">
            Enter password to access the website
          </p>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleLogin();
            }}
            className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 outline-none focus:border-white"
          />

          {error && (
            <p className="text-red-500 text-sm mt-3">{error}</p>
          )}

          <button
            onClick={handleLogin}
            className="w-full mt-5 bg-white text-black py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Access Website
          </button>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;