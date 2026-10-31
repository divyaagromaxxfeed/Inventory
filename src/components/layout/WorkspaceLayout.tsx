import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { useAuth } from "../../contexts/AuthContext";

export function WorkspaceLayout() {
  const { session, signOut } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoutError, setLogoutError] = useState("");

  async function handleLogout() {
    setLogoutError("");
    const result = await signOut();
    if (result.error) setLogoutError(result.error);
  }

  return (
    <div className="min-h-screen bg-canvas">
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onToggleCollapsed={() => setCollapsed((value) => !value)}
        onCloseMobile={() => setMobileOpen(false)}
        onLogout={() => void handleLogout()}
      />

      <div className={`workspace-main ${collapsed ? "workspace-main-collapsed" : "workspace-main-expanded"}`}>
        <Topbar email={session?.user.email ?? "Authenticated user"} onOpenMobile={() => setMobileOpen(true)} />
        <main className="min-h-[calc(100vh-70px)] px-4 py-7 sm:px-6 lg:px-8 lg:py-9">
          {logoutError && <div role="alert" className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">Could not log out: {logoutError}</div>}
          <Outlet />
          <footer className="mt-12 flex flex-col gap-1 border-t border-slate-200/80 pt-5 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} DIVYA AGRO FARMS</span>
            <span>ERP Workspace</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
