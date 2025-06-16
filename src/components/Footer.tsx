
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-semibold tracking-tight">
              Vega Research
            </Link>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-300">EDUCATION</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/learn" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Fundamentals
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Advanced Trading
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Risk Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-300">RESOURCES</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/research" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Market Research
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Daily Reports
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Economic Calendar
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Financial News
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-300">OUR SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/learn" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Financial Education
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Market Intelligence
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Investment Research
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Compliance Guidance
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Consulting Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2025 Vega Research. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link to="/legal" className="text-gray-400 hover:text-white transition-colors">
              Privacy and Cookies
            </Link>
            <Link to="/legal" className="text-gray-400 hover:text-white transition-colors">
              Your Privacy Choices
            </Link>
            <Link to="/legal" className="text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/legal" className="text-gray-400 hover:text-white transition-colors">
              Security & Fraud Awareness
            </Link>
            <Link to="/legal" className="text-gray-400 hover:text-white transition-colors">
              Regulatory Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
