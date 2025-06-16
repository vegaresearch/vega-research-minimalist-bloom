
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, TrendingUp, Shield, Users } from 'lucide-react';

const Index = () => {
  return <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-6 leading-tight">
            Financial Intelligence.
            <br />
            <span className="font-medium">Simplified.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
            Beyond the Ordinary
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover comprehensive financial education and cutting-edge market research 
            that empowers intelligent investment decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/learn" className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 group">
              Start Learning
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/research" className="inline-flex items-center px-8 py-4 border border-gray-300 rounded-full hover:border-gray-400 transition-all duration-300">
              Explore Research
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Everything you need to succeed</h2>
            <p className="text-gray-600 text-lg">Four essential pillars of financial excellence</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 transition-colors">
                <BookOpen className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-medium mb-3">Learn</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive video modules covering fundamental to advanced financial concepts
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 transition-colors">
                <TrendingUp className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-medium mb-3">Research</h3>
              <p className="text-gray-600 leading-relaxed">
                In-depth analysis of market trends and financial instruments that impact your portfolio
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 transition-colors">
                <Shield className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-medium mb-3">Legal</h3>
              <p className="text-gray-600 leading-relaxed">
                Clear guidance on compliance, regulations, and legal considerations in finance
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 transition-colors">
                <Users className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-medium mb-3">About</h3>
              <p className="text-gray-600 leading-relaxed">
                Meet our team of financial experts dedicated to democratizing financial education
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;
