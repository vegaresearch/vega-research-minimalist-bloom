
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
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
            <h3 className="text-sm font-semibold mb-4 text-gray-600">EDUCATION</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/learn" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Fundamentals
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Advanced Trading
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Risk Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-600">RESOURCES</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/research" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Market Research
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Daily Reports
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Economic Calendar
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Financial News
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-700 hover:text-black transition-colors">
                  About Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-600">OUR SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/learn" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Financial Education
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Market Intelligence
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Investment Research
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Compliance Guidance
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-700 hover:text-black transition-colors">
                  Consulting Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-200" />

        {/* Bottom section - similar to the image */}
        <div className="space-y-4">
          <div className="text-sm text-gray-600">
            © 2025 The Vega Research Project
          </div>
          <div className="text-sm text-gray-600">
            Need to get in Contact? support@vegaresearch.in
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <Link to="/legal" className="hover:text-black transition-colors">
              Legal: Terms & Conditions
            </Link>
            <span>|</span>
            <Link to="/legal" className="hover:text-black transition-colors">
              Disclaimer
            </Link>
          </div>
          <div className="text-sm text-gray-600">
            Need a Press Kit? Get our Public Brand Guide
          </div>
          <div className="text-sm text-gray-600">
            PayPal: paypal.me/VegaResearch
          </div>
          <div className="text-sm text-gray-600">
            Patreon: patreon.com/VegaResearch
          </div>
          <div className="text-sm text-gray-600">
            Note: Vega Research LLC is not a 501(c)(3) non-profit, as such donations are not tax-exempt.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
