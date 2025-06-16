
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "Chief Research Officer",
      bio: "Former Goldman Sachs analyst with 15 years in quantitative research and portfolio management.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Education",
      bio: "PhD in Economics from MIT, specializing in financial education and behavioral finance.",
      image: "/placeholder.svg"
    },
    {
      name: "Emily Watson",
      role: "Senior Market Analyst",
      bio: "Ex-JPMorgan strategist with expertise in emerging markets and ESG investing.",
      image: "/placeholder.svg"
    },
    {
      name: "David Kim",
      role: "Technology Lead",
      bio: "Former fintech entrepreneur building next-generation financial education platforms.",
      image: "/placeholder.svg"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We deliver accurate, data-driven insights backed by rigorous research and analysis."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Making sophisticated financial knowledge accessible to investors at every level."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in research quality and educational content."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Pioneering new approaches to financial education and market analysis."
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-light mb-6">About</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're a team of financial experts, educators, and technologists dedicated to democratizing 
              access to sophisticated investment knowledge and market research.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              To bridge the gap between institutional-grade financial research and individual investors, 
              providing the tools and knowledge needed to make informed investment decisions in an 
              increasingly complex financial landscape.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-light mb-2">10K+</div>
                <div className="text-gray-600">Active Learners</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">500+</div>
                <div className="text-gray-600">Research Articles</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">50+</div>
                <div className="text-gray-600">Video Modules</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">Financial experts committed to your success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 bg-gray-100 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">{member.name}</h3>
                <p className="text-gray-500 mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Our Story</h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="leading-relaxed mb-6">
              Vega Research was founded in 2020 with a simple observation: while institutional investors 
              had access to sophisticated research and analysis tools, individual investors were often 
              left to navigate complex financial markets with limited resources.
            </p>
            
            <p className="leading-relaxed mb-6">
              Our founders, having worked at top-tier investment firms, recognized the need for a platform 
              that could translate institutional-grade research into accessible, actionable insights for 
              everyday investors. We believe that financial education and market transparency are 
              fundamental rights, not privileges.
            </p>
            
            <p className="leading-relaxed">
              Today, Vega Research serves thousands of investors worldwide, providing comprehensive 
              educational content, cutting-edge market analysis, and the tools needed to make informed 
              investment decisions. We're committed to continuing this mission as we build the future 
              of financial education.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-6">Join Our Community</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Connect with fellow investors, ask questions, and stay updated on the latest market insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
            <button className="px-8 py-4 border border-gray-600 rounded-full hover:border-gray-400 transition-colors">
              Follow Updates
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
