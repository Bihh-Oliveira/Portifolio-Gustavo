export default function Contact() {
    return (
        <section
        id="contact"
        className="relative overflow-hidden bg-[#020617] px-6 py-24"
        >
        {/* Background glow */}
        <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl">
            {/* Section title */}
            <div className="mb-14 text-center">
            <p className="mb-2 font-mono text-sm text-blue-500">
                ./contact
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let's build something<span className="text-blue-500">.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-slate-400">
                Tem uma ideia, projeto ou oportunidade? Entre em contato e vamos
                transformar essa ideia em algo real.
            </p>
            </div>

            {/* Contact terminal */}
            <div className="overflow-hidden rounded-xl border border-blue-500/15 bg-[#050b18] shadow-[0_0_40px_rgba(37,99,235,0.06)]">
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-blue-500/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />

                <span className="ml-3 font-mono text-xs text-slate-500">
                contact.sh
                </span>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
                <div className="mb-8 font-mono text-sm">
                <p className="text-slate-500">
                    <span className="text-blue-500">$</span>{" "}
                    ./connect.sh
                </p>

                <p className="mt-2 text-slate-400">
                    Initializing connection...
                </p>

                <p className="text-green-400">
                    Connection ready.
                </p>
                </div>

                {/* Contact links */}
                <div className="grid gap-4 sm:grid-cols-3">
                <a
                    href="#"
                    className="group rounded-lg border border-blue-500/10 bg-[#020617] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/5"
                >
                    <span className="font-mono text-xs text-blue-500">
                    email
                    </span>

                    <p className="mt-2 text-sm text-slate-300 transition-colors group-hover:text-white">
                    your@email.com
                    </p>
                </a>

                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-lg border border-blue-500/10 bg-[#020617] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/5"
                >
                    <span className="font-mono text-xs text-blue-500">
                    github
                    </span>

                    <p className="mt-2 text-sm text-slate-300 transition-colors group-hover:text-white">
                    github.com/username
                    </p>
                </a>

                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-lg border border-blue-500/10 bg-[#020617] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/5"
                >
                    <span className="font-mono text-xs text-blue-500">
                    linkedin
                    </span>

                    <p className="mt-2 text-sm text-slate-300 transition-colors group-hover:text-white">
                    linkedin.com/in/username
                    </p>
                </a>
                </div>

                {/* Final command */}
                <div className="mt-8 border-t border-blue-500/10 pt-6 font-mono text-xs text-slate-600">
                <span className="text-blue-500">$</span>{" "}
                ready_to_build<span className="animate-pulse">_</span>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}