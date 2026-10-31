import { Navigate, Route, Routes } from "react-router-dom";
import { SignInPage } from "./components/auth/SignInPage";
import { ModulePlaceholder } from "./components/modules/ModulePlaceholder";
import { WorkspaceLayout } from "./components/layout/WorkspaceLayout";
import { modules } from "./config/navigation";
import { useAuth } from "./contexts/AuthContext";

function LoadingScreen() {
  return (
    <main className="grid min-h-screen place-items-center bg-canvas">
      <div className="flex items-center gap-3 text-sm text-slate-500">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-brand-200 border-t-brand-700" />
        Preparing your secure workspace…
      </div>
    </main>
  );
}

export default function App() {
  const { session, isLoading } = useAuth();

  if (isLoading) return <LoadingScreen />;
  if (!session) return <SignInPage />;

  return (
    <Routes>
      <Route element={<WorkspaceLayout />}>
        {modules.map((module) => (
          <Route
            key={module.path}
            path={module.path === "/" ? "/" : module.path.slice(1)}
            element={<ModulePlaceholder module={module} />}
          />
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
