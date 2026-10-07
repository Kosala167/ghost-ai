import { PanelLeftOpen, PanelLeftClose } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export function EditorNavbar({ isSidebarOpen, toggleSidebar }: EditorNavbarProps) {
  return (
    <nav className="flex h-14 w-full items-center justify-between border-b border-border bg-background px-4">
      <div className="flex flex-1 items-center justify-start">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </div>
      <div className="flex flex-1 items-center justify-center">
        {/* Center section */}
      </div>
      <div className="flex flex-1 items-center justify-end">
        {/* Right section */}
      </div>
    </nav>
  );
}

