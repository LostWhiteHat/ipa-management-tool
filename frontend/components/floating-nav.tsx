import { NavLink, useLocation } from "react-router";
import {
  LayoutDashboard,
  CheckSquare,
  FolderOpen,
  ListChecks,
  Settings,
} from "lucide-react";

export function FloatingNav() {
  const pathname = useLocation().pathname;

  const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Tasks", href: "/tasks", icon: CheckSquare },
    { name: "Files", href: "/files", icon: FolderOpen },
    { name: "Criteria", href: "/criteria", icon: ListChecks },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="glass-strong nebula-glow rounded-full px-4 py-3">
        <ul className="flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={`group relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all
                    ${
                      isActive
                        ? "bg-linear-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/25"
                        : "text-muted-foreground hover:bg-white/10 hover:text-foreground"
                    }
                    `}
                >
                    <Icon  className="h-4 w-4"/>
                        <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
