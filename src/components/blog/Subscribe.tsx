import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setMessage({ 
        text: 'Obrigado por se inscrever! Em breve você receberá nossos conteúdos.',
        type: 'success'
      });
      setEmail('');
      
      // Clear message after 5 seconds
      setTimeout(() => setMessage(null), 5000);
    }, 1000);
  };

  return (
    <section className="bg-blog-blue text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Receba nossas atualizações</h2>
            <p className="mt-4 text-blue-100">
              Inscreva-se para receber os melhores conteúdos sobre educação e marketing digital 
              diretamente na sua caixa de entrada.
            </p>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-blue-300" aria-hidden="true" />
                </div>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu email"
                  required
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder-blue-200 w-full focus:ring-blog-accent focus:border-blog-accent"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-blog-accent hover:bg-blog-lightAccent text-white"
              >
                {isSubmitting ? 'Enviando...' : 'Inscrever'}
              </Button>
            </form>
            
            {message && (
              <div className={`mt-3 text-sm ${message.type === 'success' ? 'text-blog-accent' : 'text-red-400'}`}>
                {message.text}
              </div>
            )}
            
            <p className="text-xs text-blue-200 mt-3">
              Ao se inscrever, você concorda com nossa Política de Privacidade. 
              Não enviaremos spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;