import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Exhibitions from "./pages/Exhibitions.tsx";
import ExhibitionDetail from "./pages/ExhibitionDetail.tsx";
import Artists from "./pages/Artists.tsx";
import ArtistDetail from "./pages/ArtistDetail.tsx";
import OpenCall from "./pages/OpenCall.tsx";
import Awards from "./pages/Awards.tsx";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/exhibition/:slug" element={<ExhibitionDetail />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artist/:slug" element={<ArtistDetail />} />
          <Route path="/open-call" element={<OpenCall />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
