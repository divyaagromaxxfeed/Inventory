import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight, Leaf, LogOut, X } from "lucide-react";
import { modules } from "../../config/navigation";

type SidebarProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  onToggleCollapsed: () => void;
  onCloseMobile: () => void;
  onLogout: () => void;
};

export function Sidebar({
  collapsed,
  mobileOpen,
  onToggleCollapsed,
  onCloseMobile,
  onLogout,
}: SidebarProps) {
  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-[1px] lg:hidden"
        />
      )}

      <aside
        className={[
          "sidebar-shell",
          collapsed ? "sidebar-collapsed" : "sidebar-expanded",
          mobileOpen ? "sidebar-mobile-open" : "sidebar-mobile-closed",
        ].join(" ")}
        aria-label="Main navigation"
      >
        <div className="flex h-[78px] shrink-0 items-center border-b border-white/[0.09] px-4">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-600 text-white">
            <Leaf size={22} strokeWidth={2.1} />
          </div>
          <div className={`ml-3 min-w-0 flex-1 ${collapsed ? "lg:hidden" : ""}`}>
            <div className="truncate text-[13px] font-bold tracking-[0.025em] text-white">Divya Agro Farms</div>
            <div className="mt-1 text-[9px] font-semibold tracking-[0.2em] text-[#8fa39a]">ERP WORKSPACE</div>
          </div>
          <button
            type="button"
            onClick={onCloseMobile}
            aria-label="Close menu"
            className="ml-auto rounded-md p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white lg:hidden"
          >
            <X size={18} />
          </button>
          <button
            type="button"
            onClick={onToggleCollapsed}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="ml-auto hidden rounded-md p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white lg:inline-flex"
          >
            {collapsed ? <ChevronRight size={17} /> : <ChevronLeft size={17} />}
          </button>
        </div>

        <div className="px-3 pb-3 pt-6">
          {!collapsed && <div className="mb-3 px-3 text-[9px] font-bold tracking-[0.2em] text-[#80938a]">MAIN MENU</div>}
          <nav className="space-y-1" aria-label="ERP modules">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <NavLink
                  key={module.path}
                  to={module.path}
                  end={module.path === "/"}
                  onClick={onCloseMobile}
                  title={collapsed ? module.label : undefined}
                  aria-label={module.label}
                  className={({ isActive }) => `sidebar-link ${isActive ? "sidebar-link-active" : ""} ${collapsed ? "sidebar-link-collapsed" : ""}`}
                >
                  <Icon size={18} strokeWidth={1.8} className="shrink-0" />
                  <span className={`truncate ${collapsed ? "lg:hidden" : ""}`}>{module.label}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto border-t border-white/[0.09] p-3">
          <button
            type="button"
            onClick={onLogout}
            title={collapsed ? "Logout" : undefined}
            aria-label="Logout"
            className={`sidebar-link sidebar-logout ${collapsed ? "sidebar-link-collapsed" : ""}`}
          >
            <LogOut size={18} strokeWidth={1.8} className="shrink-0" />
            <span className={collapsed ? "lg:hidden" : ""}>Logout</span>
          </button>
          <div className={`px-3 pb-1 pt-3 text-[9px] tracking-[0.06em] text-[#71847a] ${collapsed ? "lg:hidden" : ""}`}>DIVYA AGRO FARMS · ERP</div>
        </div>
      </aside>
    </>
  );
}
