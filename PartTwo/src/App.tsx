import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDocumentHorizontalWheelScroll } from "@/hooks/useDocumentHorizontalWheelScroll";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => {
  useDocumentHorizontalWheelScroll();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/curso" element={<NotFound />} />
          <Route path="/projetos" element={<NotFound />} />
          <Route path="/comunidade" element={<NotFound />} />
          <Route path="/precos" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
