import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FeaturedArticle from '@/components/blog/FeaturedArticle';
import ArticleCard, { ArticleProps } from '@/components/blog/ArticleCard';
import CategoryHighlight from '@/components/blog/CategoryHighlight';
import Subscribe from '@/components/blog/Subscribe';
import { useTheme } from '@/components/layout/ThemeProvider';

// Sample data for demo purposes
const featuredArticle: ArticleProps = {
  id: '1',
  title: 'Como a Inteligência Artificial Está Transformando a Educação em 2023',
  excerpt: 'Descubra as principais tendências e ferramentas de IA que estão revolucionando as salas de aula e criando novas oportunidades de aprendizado personalizado para estudantes de todas as idades.',
  coverImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
  category: 'Educação',
  categorySlug: 'educacao',
  date: '15 de Abril, 2023',
  readTime: '8 min de leitura',
  slug: 'como-inteligencia-artificial-transforma-educacao'
};

const recentArticles: ArticleProps[] = [
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
  {
    id: '3',
    title: 'Ensino Híbrido: Como Implementar um Modelo Educacional Misto',
    excerpt: 'Um guia completo sobre como combinar o ensino presencial e online de forma eficaz, aproveitando o melhor dos dois mundos.',
    coverImage: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    category: 'Educação',
    categorySlug: 'educacao',
    date: '5 de Abril, 2023',
    readTime: '10 min de leitura',
    slug: 'ensino-hibrido-implementar-modelo-educacional-misto'
  },
  {
    id: '4',
    title: 'SEO para Blogs Educativos: Como Aumentar sua Visibilidade Online',
    excerpt: 'Técnicas e estratégias de SEO específicas para blogs e sites educacionais, ajudando educadores e instituições a alcançarem mais pessoas.',
    coverImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    category: 'Marketing Digital',
    categorySlug: 'marketing-digital',
    date: '1 de Abril, 2023',
    readTime: '7 min de leitura',
    slug: 'seo-blogs-educativos-aumentar-visibilidade-online'
  },
  {
    id: '5',
    title: 'Gamificação na Educação: Engajando Alunos com Elementos de Jogos',
    excerpt: 'Descubra como a gamificação pode transformar a experiência de aprendizagem, aumentando a motivação e o envolvimento dos estudantes.',
    coverImage: 'https://images.unsplash.com/photo-1511377107391-65562aee1e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    category: 'Educação',
    categorySlug: 'educacao',
    date: '28 de Março, 2023',
    readTime: '8 min de leitura',
    slug: 'gamificacao-educacao-engajando-alunos'
  },
  {
    id: '6',
    title: 'Redes Sociais para Educadores: Criando uma Presença Digital Efetiva',
    excerpt: 'Como professores e instituições de ensino podem utilizar as redes sociais para construir comunidade, compartilhar conhecimento e aumentar seu alcance.',
    coverImage: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    category: 'Marketing Digital',
    categorySlug: 'marketing-digital',
    date: '25 de Março, 2023',
    readTime: '5 min de leitura',
    slug: 'redes-sociais-educadores-presenca-digital'
  }
];

const categories = [
  {
    title: 'Educação',
    description: 'Tendências, metodologias e tecnologias transformando o ensino e aprendizagem',
    slug: 'educacao',
    icon: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png'
  },
  {
    title: 'Marketing Digital',
    description: 'Estratégias, ferramentas e insights para impulsionar sua presença digital',
    slug: 'marketing-digital',
    icon: 'https://cdn-icons-png.flaticon.com/512/2518/2518048.png'
  }
];

const Index = () => {
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={
        `flex-grow ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`
      }>
        {/* Hero section */}
        <section className={
          `${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} 
          pt-8 pb-12`
        }>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturedArticle article={featuredArticle} />
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className={
                `text-2xl md:text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`
              }>
                Artigos Recentes
              </h2>
              <p className={
                `mt-3 text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`
              }>
                Fique por dentro das últimas novidades em educação e marketing digital
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {recentArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <CategoryHighlight categories={categories} />

        {/* Subscribe section */}
        <Subscribe />
      </main>

      <Footer />
    </div>
  );
};

export default Index;