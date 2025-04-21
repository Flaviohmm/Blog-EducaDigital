import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Share, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Subscribe from '@/components/blog/Subscribe';
import ArticleCard, { ArticleProps } from '@/components/blog/ArticleCard';

// Sample data for demo
const articles: ArticleProps[] = [
  {
    id: '1',
    title: 'Como a Inteligência Artificial Está Transformando a Educação em 2023',
    excerpt: 'Descubra as principais tendências e ferramentas de IA que estão revolucionando as salas de aula e criando novas oportunidades de aprendizado personalizado para estudantes de todas as idades.',
    coverImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    category: 'Educação',
    categorySlug: 'educacao',
    date: '15 de Abril, 2023',
    readTime: '8 min de leitura',
    slug: 'como-inteligencia-artificial-transforma-educacao'
  },
  {
    id: '2',
    title: 'Estratégias de Marketing de Conteúdo para Instituições Educacionais',
    excerpt: 'Aprenda a criar uma estratégia de marketing de conteúdo eficaz para atrair e engajar alunos, pais e educadores na era digital.',
    coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    category: 'Marketing Digital',
    categorySlug: 'marketing-digital',
    date: '10 de Abril, 2023',
    readTime: '6 min de leitura',
    slug: 'estrategias-marketing-conteudo-instituicoes-educacionais'
  },
];

// Sample content for the article
const articleContent = `
## Introdução à IA na Educação

A inteligência artificial (IA) está rapidamente se tornando uma força transformadora na educação, oferecendo novas maneiras de personalizar o aprendizado, automatizar tarefas administrativas e fornecer insights valiosos sobre o progresso dos alunos. À medida que avançamos em 2023, vemos uma adoção cada vez maior dessas tecnologias em salas de aula ao redor do mundo.

## Aprendizado Personalizado

Um dos benefícios mais significativos da IA na educação é a capacidade de personalizar a experiência de aprendizado para cada aluno. Algoritmos avançados podem analisar o desempenho do aluno, identificar pontos fortes e fracos, e adaptar o conteúdo de acordo com suas necessidades específicas.

Por exemplo, plataformas como o DuoLingo utilizam IA para ajustar o nível de dificuldade das lições com base no desempenho do usuário, garantindo que eles sejam constantemente desafiados sem ficarem frustrados.

## Assistentes Virtuais e Chatbots

Assistentes virtuais alimentados por IA, como o ChatGPT e similares, estão sendo cada vez mais utilizados em ambientes educacionais para fornecer suporte 24/7 aos alunos. Esses chatbots podem responder a perguntas frequentes, fornecer explicações adicionais sobre conceitos complexos e até mesmo oferecer orientação sobre tarefas e projetos.

## Avaliação Automatizada

A IA também está revolucionando a maneira como os educadores avaliam o trabalho dos alunos. Sistemas de avaliação automatizados podem analisar redações, projetos e respostas a perguntas abertas, fornecendo feedback detalhado e consistente muito mais rapidamente do que seria possível manualmente.

## Detecção Precoce de Dificuldades de Aprendizado

Algoritmos de IA podem identificar padrões que podem indicar dificuldades de aprendizado ou risco de abandono escolar. Isso permite que os educadores intervenham precocemente e forneçam o suporte necessário antes que os problemas se tornem mais graves.

## Considerações Éticas

Apesar de todos os benefícios, a integração da IA na educação também levanta importantes questões éticas sobre privacidade, viés algorítmico e o papel dos educadores humanos. É essencial abordar essas preocupações para garantir que a tecnologia seja utilizada de forma responsável e equitativa.

## Conclusão

A inteligência artificial tem o potencial de transformar fundamentalmente a educação, tornando-a mais personalizada, acessível e eficaz. À medida que continuamos a desenvolver e aprimorar essas tecnologias, é importante manter o foco no objetivo final: melhorar os resultados de aprendizagem para todos os estudantes.

Os educadores que abraçarem essas ferramentas, enquanto mantêm um olhar crítico sobre suas limitações e implicações éticas, estarão bem posicionados para preparar seus alunos para um futuro cada vez mais digital.
`;

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the article based on slug (in a real app, this would be a DB fetch)
  const article = articles.find(a => a.slug === slug) || articles[0];
  
  // Related articles (excluding the current one)
  const relatedArticles = articles.filter(a => a.id !== article.id).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-white">
        {/* Article Header */}
        <header className="bg-white pt-8 md:pt-12 pb-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to={`/category/${article.categorySlug}`}
              className="inline-block mb-4"
            >
              <Badge variant="outline" className="bg-blog-lightBlue/10 text-blog-blue border-blog-blue/20 hover:bg-blog-blue hover:text-white transition-colors">
                {article.category}
              </Badge>
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm md:text-base">
              <div className="flex items-center">
                <Calendar size={18} className="mr-1" />
                <time dateTime={article.date}>{article.date}</time>
              </div>
              
              <div className="flex items-center">
                <Clock size={18} className="mr-1" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </header>
        
        {/* Featured Image */}
        <div className="w-full bg-gray-100 mb-8">
          <div className="max-w-5xl mx-auto">
            <img 
              src={article.coverImage} 
              alt={article.title} 
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </div>
        
        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 font-medium mb-8">
              {article.excerpt}
            </p>
            
            <div className="prose prose-lg prose-headings:text-gray-900 prose-a:text-blog-blue hover:prose-a:text-blog-darkBlue prose-img:rounded-lg">
              {/* This would normally be a rich text content from a CMS */}
              {articleContent.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('## ')) {
                  const heading = paragraph.replace('## ', '');
                  return <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">{heading}</h2>;
                }
                return <p key={idx} className="mb-4">{paragraph}</p>;
              })}
            </div>
            
            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="font-medium text-gray-700">Tags:</span>
                <Link to="/tag/inteligencia-artificial" className="text-blog-blue hover:text-blog-darkBlue">
                  #InteligênciaArtificial
                </Link>
                <Link to="/tag/educacao-digital" className="text-blog-blue hover:text-blog-darkBlue">
                  #EducaçãoDigital
                </Link>
                <Link to="/tag/tecnologia" className="text-blog-blue hover:text-blog-darkBlue">
                  #Tecnologia
                </Link>
              </div>
            </div>
          </article>
          
          {/* Share */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Share size={18} className="mr-2" />
              Compartilhe este artigo
            </h3>
            <div className="flex space-x-3">
              <a href="#" className="bg-[#1877f2] text-white p-2 rounded-full hover:bg-opacity-90 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-[#1da1f2] text-white p-2 rounded-full hover:bg-opacity-90 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-[#0a66c2] text-white p-2 rounded-full hover:bg-opacity-90 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Artigos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relArticle) => (
                <ArticleCard key={relArticle.id} article={relArticle} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Subscribe section */}
        <Subscribe />
      </main>

      <Footer />
    </div>
  );
};

export default BlogArticle;