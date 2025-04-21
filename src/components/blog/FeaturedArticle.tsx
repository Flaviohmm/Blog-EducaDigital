import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { ArticleProps } from './ArticleCard';

const FeaturedArticle = ({ article }: { article: ArticleProps }) => {
  return (
    <article className="relative overflow-hidden rounded-xl shadow-lg mb-8 group">
      <div className="relative h-[480px] md:h-[550px]">
        <div className="absolute inset-0">
          <img 
            src={article.coverImage} 
            alt={article.title} 
            className="w-full h-full object-cover brightness-[0.65] group-hover:brightness-[0.55] group-hover:scale-105 transition-all duration-500"
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <div className="mb-3">
            <Link to={`/category/${article.categorySlug}`}>
              <Badge className="bg-blog-accent text-white border-none hover:bg-blog-lightAccent">
                {article.category}
              </Badge>
            </Link>
          </div>

          <Link to={`/blog/${article.slug}`}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 hover:text-blog-lightAccent transition-colors">
              {article.title}
            </h1>
          </Link>
          
          <p className="text-white/90 mb-4 max-w-xl line-clamp-2 md:line-clamp-3">
            {article.excerpt}
          </p>
          
          <div className="flex items-center text-white/80 text-sm">
            <Calendar size={16} className="mr-1" />
            <time dateTime={article.date}>{article.date}</time>
            <span className="mx-1">·</span>
            <span>{article.readTime}</span>
          </div>
          
          <Link 
            to={`/blog/${article.slug}`}
            className="inline-flex items-center mt-4 text-white font-medium hover:text-blog-accent transition-colors" 
          >
            Ler artigo completo
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticle;