
import { Shield, FileText, Scale, AlertTriangle } from 'lucide-react';

const Legal = () => {
  const legalSections = [
    {
      icon: FileText,
      title: "Terms of Service",
      description: "Understanding your rights and responsibilities when using Vega Research platform and services.",
      lastUpdated: "December 1, 2024"
    },
    {
      icon: Shield,
      title: "Privacy Policy", 
      description: "How we collect, use, and protect your personal information and data across our platform.",
      lastUpdated: "November 15, 2024"
    },
    {
      icon: Scale,
      title: "Investment Disclaimers",
      description: "Important legal notices regarding investment advice, risk factors, and regulatory compliance.",
      lastUpdated: "November 20, 2024"
    },
    {
      icon: AlertTriangle,
      title: "Risk Disclosures",
      description: "Comprehensive overview of financial risks associated with various investment strategies.",
      lastUpdated: "December 1, 2024"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-light mb-6">Legal</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Important legal information, terms of service, and compliance guidelines. 
              Please review these documents carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Documents Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {legalSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                      <Icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium mb-2">{section.title}</h3>
                      <p className="text-sm text-gray-500">Last updated: {section.lastUpdated}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{section.description}</p>
                  
                  <button className="inline-flex items-center text-sm font-medium hover:text-gray-600 transition-colors">
                    Read Document
                    <FileText className="ml-2 w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-12 text-center">Key Legal Highlights</h2>
            
            <div className="space-y-12">
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-medium mb-4">Investment Advisory Notice</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Vega Research provides educational content and market analysis for informational purposes only. 
                  All content should not be construed as personalized investment advice or recommendations to buy or sell securities.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Past performance does not guarantee future results. All investments carry risk of loss, 
                  and you should consult with a qualified financial advisor before making investment decisions.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-medium mb-4">Regulatory Compliance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our research and educational content comply with applicable securities laws and regulations. 
                  We maintain transparency in our methodologies and potential conflicts of interest.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Vega Research is committed to providing accurate, timely, and unbiased information while 
                  adhering to the highest standards of financial industry ethics.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-medium mb-4">Data Protection</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We take data privacy seriously and implement industry-standard security measures to protect 
                  your personal information. We do not sell or share your data with third parties without consent.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  You have the right to access, modify, or delete your personal data at any time. 
                  Contact our privacy team for any data-related requests or concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-6">Legal Questions?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            If you have questions about our legal terms, privacy practices, or compliance matters, 
            our legal team is here to help.
          </p>
          <button className="inline-flex items-center px-8 py-4 border border-gray-300 rounded-full hover:border-gray-400 transition-all duration-300">
            Contact Legal Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Legal;
