import { ClipboardList, Clock3 } from "lucide-react";
import type { ModuleDefinition } from "../../config/navigation";

type ModulePlaceholderProps = {
  module: ModuleDefinition;
};

export function ModulePlaceholder({ module }: ModulePlaceholderProps) {
  const Icon = module.icon;
  const isDashboard = module.label === "Dashboard";

  return (
    <div className="mx-auto max-w-[1420px]">
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="mb-2 text-[10px] font-bold tracking-[0.18em] text-brand-700">{isDashboard ? "BUSINESS WORKSPACE" : "MODULE WORKSPACE"}</div>
          <h1 className="text-[26px] font-semibold tracking-[-0.04em] text-ink sm:text-[30px]">{module.label}</h1>
          <p className="mt-1.5 text-sm text-slate-500">{module.description}</p>
        </div>
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[10px] font-semibold text-amber-800">
          <Clock3 size={13} /> Awaiting specifications
        </div>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white px-6 py-14 text-center shadow-soft sm:px-10">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-brand-100 bg-brand-50 text-brand-700">
          <Icon size={25} strokeWidth={1.7} />
        </div>
        <h2 className="mt-5 text-base font-semibold text-ink">{isDashboard ? "Dashboard setup is pending" : `${module.label} setup is pending`}</h2>
        <p className="mx-auto mt-2 max-w-[510px] text-sm leading-6 text-slate-500">
          This workspace is reserved for the requirements and reference format you approve. No fields, calculations, reports, or business rules have been assumed.
        </p>
        <div className="mx-auto mt-7 flex max-w-[430px] items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-4 text-left">
          <ClipboardList size={17} className="mt-0.5 shrink-0 text-slate-400" />
          <p className="text-xs leading-5 text-slate-500">
            Share the detailed {module.label.toLowerCase()} requirements and any reference screenshots. This module will be implemented after its scope is reviewed and approved.
          </p>
        </div>
      </section>
    </div>
  );
}
