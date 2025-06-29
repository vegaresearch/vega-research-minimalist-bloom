
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2 } from 'lucide-react';

const ArticleManager = () => {
  const { toast } = useToast();
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Federal Reserve Policy Changes and Their Market Impact",
      excerpt: "Analyzing how recent monetary policy shifts are affecting equity valuations and bond markets across different sectors.",
      category: "Monetary Policy",
      date: "December 15, 2024",
      readTime: "8 min read",
      featured: true,
      content: `The Federal Reserve's recent policy adjustments have sent ripples through financial markets, creating both opportunities and challenges for investors across various asset classes. As we analyze the implications of these monetary policy shifts, it becomes clear that understanding their nuanced effects is crucial for portfolio management in today's economic climate.

## Key Policy Changes

The Federal Open Market Committee (FOMC) has implemented several significant changes to monetary policy in recent months. The most notable include adjustments to the federal funds rate, modifications to quantitative easing programs, and updated forward guidance communications.

## Market Response Analysis

Equity markets have shown mixed reactions to these policy changes, with different sectors responding according to their sensitivity to interest rate fluctuations. Technology stocks, traditionally more vulnerable to rate increases due to their growth-oriented nature and higher valuations, have experienced increased volatility.

## Investment Strategy Considerations

For portfolio managers and individual investors, these policy changes necessitate a thorough review of asset allocation strategies. Traditional correlations between asset classes may be shifting, requiring more dynamic hedging approaches and risk management techniques.`
    },
    {
      id: 2,
      title: "Cryptocurrency Regulations: What Investors Need to Know",
      excerpt: "Latest regulatory developments in digital assets and their implications for portfolio allocation strategies.",
      category: "Regulation",
      date: "December 12, 2024", 
      readTime: "6 min read",
      featured: false,
      content: `The cryptocurrency landscape continues to evolve rapidly as regulatory frameworks take shape across global markets. Understanding these developments is essential for investors considering digital asset allocation within their portfolios.

## Regulatory Landscape Overview

Major economies are establishing clearer guidelines for cryptocurrency operations, trading, and taxation. These regulations aim to provide investor protection while fostering innovation in the digital asset space.

## Impact on Investment Strategies

New regulatory clarity is influencing how institutional investors approach cryptocurrency investments, with many now developing formal digital asset allocation strategies.`
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    category: '',
    readTime: '',
    featured: false,
    content: '',
  });

  const categories = ["Monetary Policy", "Regulation", "Global Markets", "ESG", "Technology", "Real Estate"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingArticle) {
      setArticles(articles.map(article => 
        article.id === editingArticle.id 
          ? { ...article, ...formData, date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }
          : article
      ));
      toast({ title: "Article Updated", description: "The article has been successfully updated." });
    } else {
      const newArticle = {
        id: Math.max(...articles.map(a => a.id)) + 1,
        ...formData,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      };
      setArticles([...articles, newArticle]);
      toast({ title: "Article Created", description: "A new article has been successfully created." });
    }
    
    resetForm();
  };

  const handleEdit = (article) => {
    setEditingArticle(article);
    setFormData({
      title: article.title,
      excerpt: article.excerpt,
      category: article.category,
      readTime: article.readTime,
      featured: article.featured,
      content: article.content || '',
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setArticles(articles.filter(article => article.id !== id));
    toast({ title: "Article Deleted", description: "The article has been successfully deleted." });
  };

  const resetForm = () => {
    setFormData({ title: '', excerpt: '', category: '', readTime: '', featured: false, content: '' });
    setEditingArticle(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Article Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => resetForm()}>
              <Plus className="w-4 h-4 mr-2" />
              Add Article
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingArticle ? 'Edit Article' : 'Add New Article'}</DialogTitle>
              <DialogDescription>
                {editingArticle ? 'Update the article information below.' : 'Fill in the details to create a new article.'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="readTime">Read Time</Label>
                  <Input
                    id="readTime"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    placeholder="e.g., 5 min read"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Article Content</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write your article content here. You can use ## for headings."
                  className="min-h-[300px]"
                  required
                />
                <p className="text-sm text-gray-500">
                  Tip: Use ## for section headings (e.g., ## Introduction)
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                />
                <Label htmlFor="featured">Featured Article</Label>
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
                <Button type="submit">{editingArticle ? 'Update' : 'Create'} Article</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Articles</CardTitle>
          <CardDescription>Manage your research articles</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Featured</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {articles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell className="font-medium">{article.title}</TableCell>
                  <TableCell>{article.category}</TableCell>
                  <TableCell>{article.date}</TableCell>
                  <TableCell>{article.featured ? 'Yes' : 'No'}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(article)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleDelete(article.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleManager;
