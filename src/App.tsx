import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Home from '@/pages/Home';
import CaseStudy from '@/pages/CaseStudy';
import Contact from '@/pages/Contact';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="srinivas-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
