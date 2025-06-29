
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2 } from 'lucide-react';

const ModuleManager = () => {
  const { toast } = useToast();
  const [modules, setModules] = useState([
    {
      id: 1,
      title: "Financial Fundamentals",
      description: "Master the basics of personal finance, budgeting, and investment principles",
      duration: "2.5 hours",
      lessons: 12,
      playlistId: "PL9ECA8AEB409B3E4F",
    },
    {
      id: 2,
      title: "Market Analysis",
      description: "Learn technical and fundamental analysis techniques for informed trading",
      duration: "3.2 hours", 
      lessons: 15,
      playlistId: "PLrAXtmRdnEQeijiB-jFKnbBhTNjuTlzAD",
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingModule, setEditingModule] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    lessons: 0,
    playlistId: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingModule) {
      setModules(modules.map(module => 
        module.id === editingModule.id 
          ? { ...module, ...formData }
          : module
      ));
      toast({ title: "Module Updated", description: "The module has been successfully updated." });
    } else {
      const newModule = {
        id: Math.max(...modules.map(m => m.id)) + 1,
        ...formData,
      };
      setModules([...modules, newModule]);
      toast({ title: "Module Created", description: "A new module has been successfully created." });
    }
    
    resetForm();
  };

  const handleEdit = (module) => {
    setEditingModule(module);
    setFormData({
      title: module.title,
      description: module.description,
      duration: module.duration,
      lessons: module.lessons,
      playlistId: module.playlistId,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setModules(modules.filter(module => module.id !== id));
    toast({ title: "Module Deleted", description: "The module has been successfully deleted." });
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', duration: '', lessons: 0, playlistId: '' });
    setEditingModule(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Module Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => resetForm()}>
              <Plus className="w-4 h-4 mr-2" />
              Add Module
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingModule ? 'Edit Module' : 'Add New Module'}</DialogTitle>
              <DialogDescription>
                {editingModule ? 'Update the module information below.' : 'Fill in the details to create a new learning module.'}
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
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="e.g., 2.5 hours"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lessons">Number of Lessons</Label>
                  <Input
                    id="lessons"
                    type="number"
                    value={formData.lessons}
                    onChange={(e) => setFormData({ ...formData, lessons: parseInt(e.target.value) })}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="playlistId">YouTube Playlist ID</Label>
                <Input
                  id="playlistId"
                  value={formData.playlistId}
                  onChange={(e) => setFormData({ ...formData, playlistId: e.target.value })}
                  placeholder="e.g., PL9ECA8AEB409B3E4F"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
                <Button type="submit">{editingModule ? 'Update' : 'Create'} Module</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Modules</CardTitle>
          <CardDescription>Manage your learning modules</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Lessons</TableHead>
                <TableHead>Playlist ID</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {modules.map((module) => (
                <TableRow key={module.id}>
                  <TableCell className="font-medium">{module.title}</TableCell>
                  <TableCell>{module.duration}</TableCell>
                  <TableCell>{module.lessons}</TableCell>
                  <TableCell>{module.playlistId}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(module)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleDelete(module.id)}>
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

export default ModuleManager;
