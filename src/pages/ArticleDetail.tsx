
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, TrendingUp } from 'lucide-react';

const ArticleDetail = () => {
  const { id } = useParams();

  // Mock article data - in a real app this would come from an API
  const article = {
    id: 1,
    title: "Federal Reserve Policy Changes and Their Market Impact",
    category: "Monetary Policy",
    date: "December 15, 2024",
    readTime: "8 min read",
    author: "Dr. Sarah Martinez",
    content: `
      The Federal Reserve's recent policy adjustments have sent ripples through financial markets, creating both opportunities and challenges for investors across various asset classes. As we analyze the implications of these monetary policy shifts, it becomes clear that understanding their nuanced effects is crucial for portfolio management in today's economic climate.

      ## Key Policy Changes

      The Federal Open Market Committee (FOMC) has implemented several significant changes to monetary policy in recent months. The most notable include adjustments to the federal funds rate, modifications to quantitative easing programs, and updated forward guidance communications. These changes reflect the Fed's response to evolving economic conditions, including inflation dynamics, employment metrics, and global economic uncertainties.

      Interest rate modifications have been particularly impactful, with the central bank adopting a more data-dependent approach to future policy decisions. This shift represents a departure from previous communication strategies and has introduced new variables for market participants to consider when making investment decisions.

      ## Market Response Analysis

      Equity markets have shown mixed reactions to these policy changes, with different sectors responding according to their sensitivity to interest rate fluctuations. Technology stocks, traditionally more vulnerable to rate increases due to their growth-oriented nature and higher valuations, have experienced increased volatility. Conversely, financial sector stocks have generally benefited from the prospect of improved net interest margins.

      The bond market response has been equally telling, with yield curve dynamics shifting significantly following policy announcements. Long-term treasury yields have adjusted to reflect changing expectations about future monetary policy paths, while corporate bond spreads have widened in certain credit categories as investors reassess risk premiums.

      ## Sector-Specific Implications

      Different economic sectors are experiencing varying degrees of impact from these policy changes. The real estate sector, highly sensitive to interest rate movements, has seen adjustments in both commercial and residential markets. REITs have experienced price volatility as investors recalibrate expected returns based on changing borrowing costs and discount rates.

      Technology companies, particularly those with high growth expectations and significant capital expenditure requirements, are navigating a more complex financing environment. The increased cost of capital is forcing these companies to reassess expansion plans and operational efficiency initiatives.

      ## Investment Strategy Considerations

      For portfolio managers and individual investors, these policy changes necessitate a thorough review of asset allocation strategies. Traditional correlations between asset classes may be shifting, requiring more dynamic hedging approaches and risk management techniques.

      Diversification strategies must account for the changing interest rate environment and its differential impact across sectors and geographies. International diversification may provide additional benefits as global central banks pursue varying monetary policy approaches.

      ## Forward-Looking Perspective

      As we look ahead, several key indicators will help determine the success and continued direction of current Federal Reserve policies. Employment data, inflation metrics, and GDP growth rates will remain central to policy decision-making processes.

      Market participants should prepare for continued volatility as the economy adjusts to new monetary policy frameworks. The transition period may create both risks and opportunities, making active portfolio management increasingly important.

      ## Conclusion

      The Federal Reserve's recent policy changes represent a significant shift in monetary policy approach, with far-reaching implications for financial markets and investment strategies. Success in navigating this environment will require careful analysis, adaptive strategies, and a thorough understanding of how policy changes translate into market dynamics.

      Investors and portfolio managers must remain vigilant and flexible, ready to adjust strategies as new data emerges and policy implications become clearer. The current environment, while challenging, also presents opportunities for those prepared to adapt to changing market conditions.
    `
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link 
          to="/research" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Research
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-black text-white text-sm rounded-full">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-4xl font-light mb-4 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-2 text-gray-600">
            <span>By {article.author}</span>
          </div>
        </div>

        <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mb-12 flex items-center justify-center">
          <TrendingUp className="w-16 h-16 text-gray-400" />
        </div>

        <div className="prose prose-lg max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-medium mt-12 mb-6">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            return (
              <p key={index} className="mb-6 leading-relaxed text-gray-700">
                {paragraph.trim()}
              </p>
            );
          })}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-medium mb-4">About the Author</h3>
            <p className="text-gray-600 leading-relaxed">
              Dr. Sarah Martinez is a senior economist at Vega Research with over 15 years of experience 
              in monetary policy analysis and financial market research. She holds a PhD in Economics 
              from Stanford University and has previously worked at the Federal Reserve Bank of San Francisco.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
