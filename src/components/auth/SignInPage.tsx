import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, Building2, Leaf, ShieldCheck } from "lucide-react";
import { isSupabaseConfigured } from "../../lib/supabase";
import { useAuth } from "../../contexts/AuthContext";

export function SignInPage() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const result = await signIn(email.trim(), password);
      if (result.error) setError(result.error);
    } catch {
      setError("Unable to sign in right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white lg:grid lg:grid-cols-[minmax(360px,0.92fr)_1.08fr]">
      <section className="relative hidden min-h-screen flex-col justify-between overflow-hidden bg-[#17251f] px-12 py-11 text-white lg:flex xl:px-16">
        <div className="absolute -right-40 -top-36 h-[520px] w-[520px] rounded-full border border-white/[0.07] shadow-[0_0_0_54px_rgba(255,255,255,0.025),0_0_0_108px_rgba(255,255,255,0.018)]" />
        <div className="relative z-10 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600 text-white shadow-lg shadow-black/15">
            <Leaf size={23} strokeWidth={2.1} />
          </div>
          <div>
            <div className="text-sm font-bold tracking-[0.04em]">DIVYA AGRO FARMS</div>
            <div className="mt-0.5 text-[10px] font-semibold tracking-[0.2em] text-white/45">ERP WORKSPACE</div>
          </div>
        </div>

        <div className="relative z-10 max-w-lg pb-8">
          <div className="mb-5 text-[11px] font-bold tracking-[0.2em] text-[#8cd4a6]">BUSINESS MANAGEMENT</div>
          <h1 className="text-4xl font-semibold leading-[1.16] tracking-[-0.04em] xl:text-[52px]">
            Your operations,<br />one clear view.
          </h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
            A dedicated workspace for the day-to-day operations of DIVYA AGRO FARMS.
          </p>
        </div>
        <div className="relative z-10 flex items-center gap-2 text-xs text-white/40">
          <ShieldCheck size={15} /> Secure access for authorised users
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-10">
        <div className="w-full max-w-[410px]">
          <div className="mb-12 flex items-center gap-3 lg:hidden">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-700 text-white"><Building2 size={21} /></div>
            <div>
              <div className="text-sm font-bold text-ink">DIVYA AGRO FARMS</div>
              <div className="mt-0.5 text-[10px] font-semibold tracking-[0.18em] text-slate-400">ERP WORKSPACE</div>
            </div>
          </div>

          <div className="mb-3 text-[11px] font-bold tracking-[0.2em] text-brand-700">WELCOME BACK</div>
          <h2 className="text-[29px] font-semibold tracking-[-0.04em] text-ink">Sign in to your ERP</h2>
          <p className="mt-2 text-sm text-slate-500">Use your authorised account to continue.</p>

          <form className="mt-9 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-semibold text-slate-700">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-2 block text-xs font-semibold text-slate-700">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                className="form-input"
              />
            </div>

            {error && <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-3 text-xs leading-5 text-red-700">{error}</div>}

            {!isSupabaseConfigured && (
              <div role="status" className="rounded-lg border border-amber-200 bg-amber-50 px-3.5 py-3 text-xs leading-5 text-amber-800">
                Supabase setup required. Add <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to your local environment file, then restart the app.
              </div>
            )}

            <button type="submit" disabled={isSubmitting || !isSupabaseConfigured} className="primary-button mt-2 w-full">
              <span>{isSubmitting ? "Signing in…" : "Sign in"}</span>
              <ArrowRight size={17} />
            </button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck size={14} /> Protected with Supabase authentication
          </div>
        </div>
      </section>
    </main>
  );
}
