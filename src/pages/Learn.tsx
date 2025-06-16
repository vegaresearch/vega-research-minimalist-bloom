
import { Play, Clock, Users } from 'lucide-react';

const Learn = () => {
  const modules = [
    {
      id: 1,
      title: "Financial Fundamentals",
      description: "Master the basics of personal finance, budgeting, and investment principles",
      duration: "2.5 hours",
      lessons: 12,
      playlistId: "PL9ECA8AEB409B3E4F", // Updated with the specific playlist
    },
    {
      id: 2,
      title: "Market Analysis",
      description: "Learn technical and fundamental analysis techniques for informed trading",
      duration: "3.2 hours", 
      lessons: 15,
      playlistId: "PLrAXtmRdnEQeijiB-jFKnbBhTNjuTlzAD",
    },
    {
      id: 3,
      title: "Portfolio Management",
      description: "Advanced strategies for building and managing diversified investment portfolios",
      duration: "4.1 hours",
      lessons: 18,
      playlistId: "PLrAXtmRdnEQeijiB-jFKnbBhTNjuTlzAD",
    },
    {
      id: 4,
      title: "Risk Management",
      description: "Understanding and mitigating various types of financial risks",
      duration: "2.8 hours",
      lessons: 14,
      playlistId: "PLrAXtmRdnEQeijiB-jFKnbBhTNjuTlzAD",
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-light mb-6">Learn</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive video modules designed to take you from beginner to advanced investor. 
              Each module builds upon the previous, creating a structured learning path.
            </p>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {modules.map((module) => (
              <div key={module.id} className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* YouTube Embed */}
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/videoseries?list=${module.playlistId}`}
                    title={module.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-medium mb-4">{module.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{module.description}</p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {module.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      {module.lessons} lessons
                    </div>
                  </div>
                  
                  <button className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors group">
                    Start Module
                    <Play className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Your Learning Journey</h2>
            <p className="text-gray-600 text-lg">Follow our recommended path for optimal results</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {modules.map((module, index) => (
                <div key={module.id} className="flex items-center gap-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-medium">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-2">{module.title}</h3>
                    <p className="text-gray-600">{module.description}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{module.duration}</span>
                    <span>•</span>
                    <span>{module.lessons} lessons</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;
