import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface ArticleProps {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  categorySlug: string;
  date: string;
  readTime: string;
  slug: string;
}

const ArticleCard = ({ article }: { article: ArticleProps }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <Link to={`/blog/${article.slug}`} className="block">
        <img 
          src={article.coverImage} 
          alt={article.title} 
          className="w-full h-48 object-cover hover:opacity-90 transition-opacity" 
        />
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-sm mb-3">
          <Link 
            to={`/category/${article.categorySlug}`}
            className="mb-2"
          >
            <Badge variant="outline" className="bg-blog-lightBlue/10 text-blog-blue border-blog-blue/20 hover:bg-blog-blue hover:text-white transition-colors">
              {article.category}
            </Badge>
          </Link>
          
          <div className="flex items-center text-gray-500 text-xs ml-auto">
            <Calendar size={14} className="mr-1" />
            <time dateTime={article.date}>{article.date}</time>
            <span className="mx-1">·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
        
        <Link to={`/blog/${article.slug}`} className="block">
          <h2 className="text-xl font-bold mb-2 text-gray-800 hover:text-blog-blue transition-colors line-clamp-2">
            {article.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
          {article.excerpt}
        </p>
        
        <Link 
          to={`/blog/${article.slug}`}
          className="text-blog-blue font-medium hover:text-blog-darkBlue flex items-center mt-auto"
        >
          Ler mais
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;