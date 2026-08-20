export default function Footer() {
    return (
        <footer className="border-t border-blue-500/10 bg-[#020617] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            
            {/* Logo */}
            <div className="font-mono text-sm text-slate-500">
            <span className="text-blue-500">&lt;</span>
            dev
            <span className="text-blue-500">/&gt;</span>
            </div>

            {/* Copyright */}
            <p className="text-center text-xs text-slate-600">
            © 2026 Your Name. All rights reserved.
            </p>

            {/* Status */}
            <div className="flex items-center gap-2 font-mono text-xs text-slate-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            available
            </div>
        </div>
        </footer>
    );
}