
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, Plus } from 'lucide-react';
import ArticleManager from '@/components/admin/ArticleManager';
import ModuleManager from '@/components/admin/ModuleManager';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('admin_authenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    } else {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    navigate('/admin/login');
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Articles</CardTitle>
              <CardDescription>Manage research articles</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">6</p>
              <p className="text-sm text-gray-500">Total articles</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Modules</CardTitle>
              <CardDescription>Manage learning modules</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">4</p>
              <p className="text-sm text-gray-500">Total modules</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>System</CardTitle>
              <CardDescription>System status</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600">Online</p>
              <p className="text-sm text-gray-500">All systems operational</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="articles" className="space-y-4">
          <TabsList>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="modules">Modules</TabsTrigger>
          </TabsList>
          
          <TabsContent value="articles" className="space-y-4">
            <ArticleManager />
          </TabsContent>
          
          <TabsContent value="modules" className="space-y-4">
            <ModuleManager />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
