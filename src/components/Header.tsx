import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';

interface HeaderProps {
  onNavigate?: {
    about?: () => void;
    experience?: () => void;
    caseStudies?: () => void;
    skills?: () => void;
    testimonials?: () => void;
    contact?: () => void;
  };
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (handler?: () => void) => {
    if (handler) {
      handler();
      closeMenu();
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-primary">
              Srinivas N
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            {isHomePage ? (
              <>
                <button 
                  onClick={() => handleNavigation(onNavigate?.about)}
                  className="nav-link"
                >
                  About
                </button>
                <button 
                  onClick={() => handleNavigation(onNavigate?.experience)}
                  className="nav-link"
                >
                  Experience
                </button>
                <button 
                  onClick={() => handleNavigation(onNavigate?.caseStudies)}
                  className="nav-link"
                >
                  Case Studies
                </button>
                <button 
                  onClick={() => handleNavigation(onNavigate?.skills)}
                  className="nav-link"
                >
                  Skills
                </button>
                <button 
                  onClick={() => handleNavigation(onNavigate?.testimonials)}
                  className="nav-link"
                >
                  Testimonials
                </button>
              </>
            ) : (
              <>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </>
            )}
            
            <Button 
              onClick={() => handleNavigation(onNavigate?.contact)}
              variant={isHomePage ? "default" : "outline"}
              className={isHomePage ? "bg-primary hover:bg-primary-700 text-white" : "border-primary text-primary hover:bg-primary-50"}
            >
              Contact
            </Button>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-md text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {isHomePage ? (
              <>
                <button 
                  onClick={() => handleNavigation(onNavigate?.about)}
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-muted transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => handleNavigation(onNavigate?.experience)}
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-muted transition-colors"
                >
                  Experience
                </button>
                <button 
                  onClick={() => handleNavigation(onNavigate?.caseStudies)}
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-muted transition-colors"
                >
                  Case Studies
                </button>
                <button 
                  onClick={() => handleNavigation(onNavigate?.skills)}
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-muted transition-colors"
                >
                  Skills
                </button>
                <button 
                  onClick={() => handleNavigation(onNavigate?.testimonials)}
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-muted transition-colors"
                >
                  Testimonials
                </button>
              </>
            ) : (
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md hover:bg-muted transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
            )}
            
            <div className="pt-2 flex items-center justify-between">
              <Button 
                onClick={() => handleNavigation(onNavigate?.contact)}
                variant="default"
                className="bg-primary hover:bg-primary-700 text-white"
              >
                Contact
              </Button>
              
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-md text-foreground hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
