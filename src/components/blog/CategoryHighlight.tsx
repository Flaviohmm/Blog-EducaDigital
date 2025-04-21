import { Link } from 'react-router-dom';

interface CategoryProps {
    title: string;
    description: string;
    slug: string;
    icon: string;
}

const CategoryHighlight = ({ categories }: { categories: CategoryProps[] }) => {
    return (
        <section className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Categorias em Destaque</h2>
                    <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore conteúdos especializados em educação e marketing digital
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {categories.map((category) => (
                        <Link
                            to={`/category/${category.slug}`}
                            key={category.slug}
                            className="flex flex-col items-center p-6 md:p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white hover:bg-gray-50"
                        >
                            <img src={category.icon} alt={category.title} className="w-16 h-16 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                            <p className="text-gray-600 text-center mt-2">{category.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryHighlight;