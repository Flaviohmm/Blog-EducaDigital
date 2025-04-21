import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and description */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold">
              <span className="text-white">Educa</span>
              <span className="text-blog-accent">Digital</span>
            </h2>
            <p className="text-gray-300 max-w-md">
              Seu portal de conteúdo sobre educação moderna e marketing digital.
              Transformando conhecimento em estratégias eficazes.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="mailto:contato@educadigital.com" className="text-gray-300 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Links section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/category/educacao" className="text-gray-300 hover:text-white">Educação</Link>
              </li>
              <li>
                <Link to="/category/marketing-digital" className="text-gray-300 hover:text-white">Marketing Digital</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-white">Sobre</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-white">Contato</Link>
              </li>
            </ul>
          </div>
          
          {/* Topics section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Tópicos Populares</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tag/ensino-hibrido" className="text-gray-300 hover:text-white">Ensino Híbrido</Link>
              </li>
              <li>
                <Link to="/tag/inteligencia-artificial" className="text-gray-300 hover:text-white">Inteligência Artificial</Link>
              </li>
              <li>
                <Link to="/tag/marketing-de-conteudo" className="text-gray-300 hover:text-white">Marketing de Conteúdo</Link>
              </li>
              <li>
                <Link to="/tag/seo" className="text-gray-300 hover:text-white">SEO</Link>
              </li>
              <li>
                <Link to="/tag/social-media" className="text-gray-300 hover:text-white">Social Media</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} EducaDigital. Todos os direitos reservados.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-400">
            <Link to="/termos" className="hover:text-white">Termos de Uso</Link>
            <Link to="/privacidade" className="hover:text-white">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;