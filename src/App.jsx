import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import WatchLater from "./pages/WatchLater";
import Filter from "./pages/Filter";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1f1f1f",
            color: "#fff",
            border: "1px solid #dc2626",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;