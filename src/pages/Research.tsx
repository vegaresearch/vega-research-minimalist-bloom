
import { useState } from 'react';
import { Calendar, TrendingUp, ArrowUpRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Research = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const articles = [
    {
      id: 1,
      title: "Federal Reserve Policy Changes and Their Market Impact",
      excerpt: "Analyzing how recent monetary policy shifts are affecting equity valuations and bond markets across different sectors.",
      category: "Monetary Policy",
      date: "December 15, 2024",
      readTime: "8 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Cryptocurrency Regulations: What Investors Need to Know",
      excerpt: "Latest regulatory developments in digital assets and their implications for portfolio allocation strategies.",
      category: "Regulation",
      date: "December 12, 2024", 
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 3,
      title: "Emerging Markets: Opportunities in Economic Uncertainty",
      excerpt: "Identifying undervalued assets and growth opportunities in developing economies amid global market volatility.",
      category: "Global Markets",
      date: "December 10, 2024",
      readTime: "10 min read",
      featured: true,
    },
    {
      id: 4,
      title: "ESG Investing: Performance vs. Principles",
      excerpt: "Comprehensive analysis of environmental, social, and governance factors in investment decision-making.",
      category: "ESG",
      date: "December 8, 2024",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 5,
      title: "Technology Sector Outlook: AI and Market Disruption",
      excerpt: "How artificial intelligence developments are reshaping tech valuations and creating new investment themes.",
      category: "Technology",
      date: "December 5, 2024",
      readTime: "9 min read",
      featured: false,
    },
    {
      id: 6,
      title: "Interest Rate Trends and Real Estate Investment",
      excerpt: "Understanding the relationship between monetary policy and real estate markets in the current economic climate.",
      category: "Real Estate",
      date: "December 3, 2024",
      readTime: "5 min read",
      featured: false,
    },
  ];

  const categories = ["All", "Monetary Policy", "Regulation", "Global Markets", "ESG", "Technology", "Real Estate"];

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "You've been subscribed to our research digest.",
      });
      setEmail('');
    }
  };

  const handleArticleClick = (articleId: number) => {
    toast({
      title: "Article Coming Soon",
      description: "This article will be available in the full version.",
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-light mb-6">Research</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              In-depth analysis and insights on financial markets, economic trends, and investment opportunities. 
              Stay informed with our research team's latest findings.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm border rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-black text-white border-black'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Featured Research</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {filteredArticles.filter(article => article.featured).map((article) => (
              <article 
                key={article.id} 
                className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleArticleClick(article.id)}
              >
                <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 relative">
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black text-white text-xs rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <TrendingUp className="w-8 h-8 text-gray-400" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-medium mb-3 group-hover:text-gray-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* All Articles */}
          <h2 className="text-3xl font-light mb-12">Latest Analysis</h2>
          
          <div className="space-y-6">
            {filteredArticles.map((article) => (
              <article 
                key={article.id} 
                className="group border-b border-gray-100 pb-8 last:border-b-0 cursor-pointer"
                onClick={() => handleArticleClick(article.id)}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">{article.date}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-medium mb-3 group-hover:text-gray-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{article.excerpt}</p>
                  </div>
                  
                  <div className="lg:flex-shrink-0">
                    <button className="inline-flex items-center gap-2 text-sm font-medium group-hover:text-gray-600 transition-colors">
                      Read Article
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-6">Stay Ahead of the Markets</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Get our weekly research digest delivered to your inbox. No spam, just insights.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-full text-black outline-none"
              required
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Research;
