import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LandingPageBuilder from "./pages/LandingPageBuilder";
import RichMediaDisplay from "./pages/RichMediaDisplay";
import InteractiveVideoAds from "./pages/InteractiveVideoAds";
import Experiments from "./pages/Experiments";
import Trackers from "./pages/Trackers";
import AdFormats from "./pages/AdFormats";
import SelfServicePlatform from "./pages/SelfServicePlatform";
import Publishers from "./pages/Publishers";
import Agencies from "./pages/Agencies";
import Brands from "./pages/Brands";
import Support from "./pages/Support";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CreativePolicy from "./pages/CreativePolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Product Pages */}
          <Route path="/landing-page-builder" element={<LandingPageBuilder />} />
          <Route path="/rich-media-display" element={<RichMediaDisplay />} />
          <Route path="/interactive-video-ads" element={<InteractiveVideoAds />} />
          <Route path="/experiments" element={<Experiments />} />
          <Route path="/trackers" element={<Trackers />} />
          <Route path="/ad-formats" element={<AdFormats />} />
          <Route path="/self-service-platform" element={<SelfServicePlatform />} />
          {/* Customer Pages */}
          <Route path="/publishers" element={<Publishers />} />
          <Route path="/agencies" element={<Agencies />} />
          <Route path="/brands" element={<Brands />} />
          {/* Support */}
          <Route path="/support" element={<Support />} />
          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* Legal */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/creative-policy" element={<CreativePolicy />} />
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
