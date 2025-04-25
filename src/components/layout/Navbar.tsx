import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background border-b transition-colors duration-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-blog-blue">
                <span className="text-blog-darkBlue">Educa</span>
                <span className="text-blog-accent">Digital</span>
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 font-medium ${theme === 'dark'
                ? 'text-gray-200 hover:text-blog-lightBlue'
                : 'text-gray-700 hover:text-blog-blue'
                }`}>
              Home
            </Link>
            <Link
              to="/category/educacao"
              className={`px-3 py-2 font-medium ${theme === 'dark'
                ? 'text-gray-200 hover:text-blog-lightBlue'
                : 'text-gray-700 hover:text-blog-blue'
                }`}>
              Educação
            </Link>
            <Link
              to="/category/marketing-digital"
              className={`px-3 py-2 font-medium ${theme === 'dark'
                ? 'text-gray-200 hover:text-blog-lightBlue'
                : 'text-gray-700 hover:text-blog-blue'
                }`}>
              Marketing Digital
            </Link>
            <Link
              to="/sobre"
              className={`px-3 py-2 font-medium ${theme === 'dark'
                ? 'text-gray-200 hover:text-blog-lightBlue'
                : 'text-gray-700 hover:text-blog-blue'
                }`}>
              Sobre
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-2">
            <Button variant="ghost" size="icon" className="ml-2">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant='ghost' size='icon' onClick={toggleTheme}>
              {theme === 'dark' ? (
                <Sun className='h-5 w-5' />
              ) : (
                <Moon className='h-5 w-5' />
              )}
              <span className='sr-only'>Toggle theme</span>
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <Button variant='ghost' size='icon' onClick={toggleMenu} className='mr-2'>
              {theme === 'dark' ? (
                <Sun className='h-5 w-5' />
              ) : (
                <Moon className='h-5 w-5' />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blog-blue hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/category/educacao"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blog-blue hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Educação
          </Link>
          <Link
            to="/category/marketing-digital"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blog-blue hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Marketing Digital
          </Link>
          <Link
            to="/sobre"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blog-blue hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Sobre
          </Link>
          <div className="relative mt-3 px-3">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blog-blue focus:border-blog-blue"
                placeholder="Buscar artigos..."
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;