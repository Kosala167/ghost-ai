import { XIcon, PlusIcon, FolderOpenIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "cn";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-14 z-40 flex h-[calc(100vh-3.5rem)] w-72 flex-col border-r border-border bg-background/95 shadow-lg backdrop-blur-sm transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex items-center justify-between border-b border-border p-4">
        <h2 className="text-lg font-semibold text-foreground">Projects</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <XIcon className="h-5 w-5" />
          <span className="sr-only">Close sidebar</span>
        </Button>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <Tabs defaultValue="my-projects" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="my-projects">My Projects</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
          </TabsList>
          
          <TabsContent value="my-projects" className="mt-4 flex flex-col items-center justify-center space-y-4 py-8 text-center">
            <div className="rounded-full bg-muted p-4">
              <FolderOpenIcon className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">No projects found</p>
              <p className="text-sm text-muted-foreground">Create a new project to get started.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="shared" className="mt-4 flex flex-col items-center justify-center space-y-4 py-8 text-center">
            <div className="rounded-full bg-muted p-4">
              <FolderOpenIcon className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">No shared projects</p>
              <p className="text-sm text-muted-foreground">Projects shared with you will appear here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="border-t border-border p-4">
        <Button className="w-full" size="lg">
          <PlusIcon className="mr-2 h-5 w-5" />
          New Project
        </Button>
      </div>
    </aside>
  );
}

