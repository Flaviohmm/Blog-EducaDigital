import { useTheme } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookOpen, Users, Target } from "lucide-react";

const Sobre = () => {
    const { theme } = useTheme();

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className={`
                flex-grow ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}
            `}>
                {/* Hero Section */}
                <section className={`
                    py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}
                `}>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className={`
                            text-4xl md:text-5xl font-bold mb-6 
                            ${theme === 'dark' ? 'text-white' : 'text-gray-600'}
                        `}>
                            Sobre o EducaDigital
                        </h1>
                        <p className={`
                            text-lg md:text-xl 
                            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                        `}>
                            Conectando educação e tecnologia para transformar o futuro do aprendizado
                        </p>
                    </div>
                </section>

                {/* Mission & Values */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className={`
                                p-6 rounded-lg
                                ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
                                border shadow-sm
                            `}>
                                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blog-blue/10">
                                    <BookOpen className="w-6 h-6 text-blog-blue" />
                                </div>
                                <h3 className={`
                                    text-xl font-semibold mb-3
                                    ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                                `}>
                                    Nossa Missão
                                </h3>
                                <p className={`
                                    ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                                `}>
                                    Democratizar o conhecimento sobre educação digital e marketing, tornando-o acessível a todos.
                                </p>
                            </div>

                            <div className={`
                                p-6 rounded-lg
                                ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
                                border shadow-sm
                            `}>
                                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blog-accent/10">
                                    <Users className="w-6 h-6 text-blog-accent" />
                                </div>
                                <h3 className={`
                                    text-xl font-semibold mb-3
                                    ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                                `}>
                                    Nossa Comunidade
                                </h3>
                                <p className={`
                                    ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                                `}>
                                    Uma rede de educadores, profissionais e entusiastas compartilhando conhecimento e experiências.
                                </p>
                            </div>

                            <div className={`
                                p-6 rounded-lg
                                ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
                                border shadow-sm
                            `}>
                                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-500/10">
                                    <Target className="w-6 h-6 text-green-500" />
                                </div>
                                <h3 className={`
                                    text-xl font-semibold mb-3
                                    ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                                `}>
                                    Nossos Objetivos
                                </h3>
                                <p className={
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                }>
                                    Capacitar pessoas para prosperar no mundo digital através de conteudo de qualidade.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Content */}
                <section className={`
                    py-16
                    ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}
                `}>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className={`
                            prose max-w-none 
                            ${theme === 'dark' ? 'prose-invert' : ''}
                        `}>
                            <h2 className={`
                                text-3xl font-bold mb-6
                                ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                            `}>
                                Nossa História
                            </h2>
                            <div className={`
                                space-y-6
                                ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                            `}>
                                <p>
                                    O EducaDigital nasceu da necessidade de criar uma ponte entre a educação tradicional
                                    e as novas tecnologias digitais. Nosso blog é dedicado a explorar e compartilhar as 
                                    melhores práticas em educação digital e marketing
                                </p>
                                <p>
                                    Com anos de experiência no setor educacional e digital, nossa equipe trabalha
                                    incansavelmente para trazer conteúdo relevante e atualizado, ajudando educadores 
                                    e profissionais a se manterem à frente das últimas tendências e inovações.
                                </p>
                                <p>
                                    Acreditamos que a educação é a chave para o desenvolvimento pessoal e profissional,
                                    e que a tecnologia pode ser uma poderosa aliada nesse processo. Por isso, nos
                                    dedicamos a criar conteúdo que inspire e capacite nossos leitores.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Sobre;