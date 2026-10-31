import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";
import { modules } from "../../config/navigation";

type TopbarProps = {
  email: string;
  onOpenMobile: () => void;
};

export function Topbar({ email, onOpenMobile }: TopbarProps) {
  const location = useLocation();
  const currentModule = modules.find((item) => item.path === location.pathname) ?? modules[0];
  const initials = email.trim().charAt(0).toUpperCase() || "U";

  return (
    <header className="sticky top-0 z-20 flex h-[70px] items-center justify-between border-b border-slate-200/80 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobile}
          aria-label="Open navigation"
          className="-ml-1 rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 lg:hidden"
        >
          <Menu size={20} />
        </button>
        <div className="min-w-0">
          <div className="hidden text-[10px] font-semibold tracking-[0.16em] text-slate-400 sm:block">DIVYA AGRO FARMS <span className="px-1.5 text-slate-300">/</span> ERP</div>
          <div className="truncate text-sm font-semibold text-ink sm:mt-0.5">{currentModule.label}</div>
        </div>
      </div>

      <div className="ml-4 flex min-w-0 items-center gap-3 sm:gap-4">
        <div className="hidden min-w-0 text-right sm:block">
          <div className="max-w-[230px] truncate text-xs font-semibold text-slate-700">{email}</div>
          <div className="mt-0.5 text-[10px] text-slate-400">Signed in</div>
        </div>
        <div aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brand-100 bg-brand-50 text-xs font-bold text-brand-700">{initials}</div>
      </div>
    </header>
  );
}
