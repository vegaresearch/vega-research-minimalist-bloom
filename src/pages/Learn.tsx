
import { Play, Clock, Users, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const Learn = () => {
  const [selectedModule, setSelectedModule] = useState(null);

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

  const handleStartModule = (module) => {
    setSelectedModule(module);
  };

  const handleBackToModules = () => {
    setSelectedModule(null);
  };

  // If a module is selected, show the dedicated module view
  if (selectedModule) {
    return (
      <div className="pt-16 min-h-screen bg-white">
        {/* Module Header */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <button 
              onClick={handleBackToModules}
              className="flex items-center text-gray-600 hover:text-black mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Modules
            </button>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-light mb-4">{selectedModule.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {selectedModule.description}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {selectedModule.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  {selectedModule.lessons} lessons
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Player Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-black rounded-2xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/videoseries?list=${selectedModule.playlistId}&autoplay=1`}
                  title={selectedModule.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* Module Info */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-medium mb-4">About This Module</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {selectedModule.description}
                </p>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-medium mb-3">What You'll Learn</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Fundamental concepts and principles</li>
                    <li>• Practical applications and examples</li>
                    <li>• Real-world scenarios and case studies</li>
                    <li>• Best practices and expert insights</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-medium mb-4">Module Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span>{selectedModule.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lessons</span>
                      <span>{selectedModule.lessons}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Level</span>
                      <span>Beginner to Advanced</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

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
                  
                  <button 
                    onClick={() => handleStartModule(module)}
                    className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors group"
                  >
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
