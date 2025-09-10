import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import UsagePage from "./pages/usage";
import ISPMPage from "./pages/ispm";
import POUploadPage from "./pages/po-upload";
import ActivationSuccessPage from "./pages/activation-success";
import ISPMLicensedPage from "./pages/ispm-licensed";
import UsagePOUploadPage from "./pages/usage-po-upload";
import UsageActivationSuccessPage from "./pages/usage-activation-success";
import UsageLicensedPage from "./pages/usage-licensed";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/usage" element={<UsagePage />} />
          <Route path="/ispm" element={<ISPMPage />} />
          <Route path="/po-upload" element={<POUploadPage />} />
          <Route path="/activation-success" element={<ActivationSuccessPage />} />
          <Route path="/ispm-licensed" element={<ISPMLicensedPage />} />
          <Route path="/usage-po-upload" element={<UsagePOUploadPage />} />
          <Route path="/usage-activation-success" element={<UsageActivationSuccessPage />} />
          <Route path="/usage-licensed" element={<UsageLicensedPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
