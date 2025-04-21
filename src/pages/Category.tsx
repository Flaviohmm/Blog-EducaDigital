import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ArticleCard, { ArticleProps } from '@/components/blog/ArticleCard';
import Subscribe from '@/components/blog/Subscribe';

// Sample data
const articlesData: Record<string, {title: string, description: string, articles: ArticleProps[]}> = {
  'educacao': {
    title: 'Educação',
    description: 'Artigos sobre tendências, metodologias e tecnologias transformando o ensino e aprendizagem.',
    articles: [
      {
        id: '1',
        title: 'Como a Inteligência Artificial Está Transformando a Educação em 2023',
        excerpt: 'Descubra as principais tendências e ferramentas de IA que estão revolucionando as salas de aula.',
        coverImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
        category: 'Educação',
        categorySlug: 'educacao',
        date: '15 de Abril, 2023',
        readTime: '8 min de leitura',
        slug: 'como-inteligencia-artificial-transforma-educacao'
      },
      {
        id: '3',
        title: 'Ensino Híbrido: Como Implementar um Modelo Educacional Misto',
        excerpt: 'Um guia completo sobre como combinar o ensino presencial e online de forma eficaz.',
        coverImage: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
        category: 'Educação',
        categorySlug: 'educacao',
        date: '5 de Abril, 2023',
        readTime: '10 min de leitura',
        slug: 'ensino-hibrido-implementar-modelo-educacional-misto'
      },
      {
        id: '5',
        title: 'Gamificação na Educação: Engajando Alunos com Elementos de Jogos',
        excerpt: 'Descubra como a gamificação pode transformar a experiência de aprendizagem.',
        coverImage: 'https://images.unsplash.com/photo-1511377107391-65562aee1e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
        category: 'Educação',
        categorySlug: 'educacao',
        date: '28 de Março, 2023',
        readTime: '8 min de leitura',
        slug: 'gamificacao-educacao-engajando-alunos'
      }
    ]
  },
  'marketing-digital': {
    title: 'Marketing Digital',
    description: 'Artigos sobre estratégias, ferramentas e insights para impulsionar sua presença digital.',
    articles: [
      {
        id: '2',
        title: 'Estratégias de Marketing de Conteúdo para Instituições Educacionais',
        excerpt: 'Aprenda a criar uma estratégia de marketing de conteúdo eficaz para atrair e engajar alunos.',
        coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
        category: 'Marketing Digital',
        categorySlug: 'marketing-digital',
        date: '10 de Abril, 2023',
        readTime: '6 min de leitura',
        slug: 'estrategias-marketing-conteudo-instituicoes-educacionais'
      },
      {
        id: '4',
        title: 'SEO para Blogs Educativos: Como Aumentar sua Visibilidade Online',
        excerpt: 'Técnicas e estratégias de SEO específicas para blogs e sites educacionais.',
        coverImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
        category: 'Marketing Digital',
        categorySlug: 'marketing-digital',
        date: '1 de Abril, 2023',
        readTime: '7 min de leitura',
        slug: 'seo-blogs-educativos-aumentar-visibilidade-online'
      },
      {
        id: '6',
        title: 'Redes Sociais para Educadores: Criando uma Presença Digital Efetiva',
        excerpt: 'Como professores e instituições de ensino podem utilizar as redes sociais efetivamente.',
        coverImage: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
        category: 'Marketing Digital',
        categorySlug: 'marketing-digital',
        date: '25 de Março, 2023',
        readTime: '5 min de leitura',
        slug: 'redes-sociais-educadores-presenca-digital'
      }
    ]
  }
};

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const categoryData = slug && articlesData[slug] 
    ? articlesData[slug] 
    : {
        title: 'Categoria', 
        description: 'Artigos desta categoria', 
        articles: []
      };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Category Header */}
        <header className="bg-blog-blue text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{categoryData.title}</h1>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              {categoryData.description}
            </p>
          </div>
        </header>
        
        {/* Articles */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryData.articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            
            {categoryData.articles.length === 0 && (
              <div className="text-center py-12">
                <h2 className="text-xl text-gray-600">Nenhum artigo encontrado nesta categoria.</h2>
              </div>
            )}
          </div>
        </section>
        
        {/* Subscribe section */}
        <Subscribe />
      </main>

      <Footer />
    </div>
  );
};

export default Category;