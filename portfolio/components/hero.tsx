export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-[#020617] px-6 pt-20">
        
        {/* Background glow */}
        <div className="absolute left-1/2 top-1/2 z-0 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
            
            {/* Text */}
            <div className="relative z-10">
            <p className="mb-4 font-mono text-sm text-blue-500">
                &gt; hello, world_
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Gustavo <span className="text-blue-500">Braz</span>
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-slate-400 sm:text-3xl">
                Full Stack Developer
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                Desenvolvedor apaixonado por criar experiências digitais
                modernas, funcionais e bem construídas através do código.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
                <a
                href="#projects"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.35)]"
                >
                view projects
                </a>

                <a
                href="#contact"
                className="rounded-lg border border-blue-500/30 px-6 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-blue-500 hover:text-white"
                >
                contact me
                </a>
            </div>
            </div>

            {/* Code window */}
            <div className="relative z-10">
            <div className="overflow-hidden rounded-xl border border-blue-500/20 bg-[#050b18] shadow-[0_0_40px_rgba(37,99,235,0.08)]">
                
                {/* Window header */}
                <div className="flex items-center gap-2 border-b border-blue-500/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />

                <span className="ml-3 font-mono text-xs text-slate-500">
                    developer.ts
                </span>
                </div>

                {/* Code */}
                <div className="overflow-x-auto p-6 font-mono text-sm leading-7">
                <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">developer</span>{" "}
                    <span className="text-slate-400">=</span>{" "}
                    <span className="text-slate-300">{"{"}</span>
                </p>

                <p className="pl-6">
                    <span className="text-blue-300">name</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-green-400">"Your Name"</span>
                    <span className="text-slate-400">,</span>
                </p>

                <p className="pl-6">
                    <span className="text-blue-300">role</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-green-400">
                    "Full Stack Developer"
                    </span>
                    <span className="text-slate-400">,</span>
                </p>

                <p className="pl-6">
                    <span className="text-blue-300">stack</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-slate-300">[</span>
                </p>

                <p className="pl-12 text-green-400">
                    "React",
                </p>

                <p className="pl-12 text-green-400">
                    "Next.js",
                </p>

                <p className="pl-12 text-green-400">
                    "TypeScript"
                </p>

                <p className="pl-6">
                    <span className="text-slate-300">],</span>
                </p>

                <p className="pl-6">
                    <span className="text-blue-300">available</span>
                    <span className="text-slate-400">:</span>{" "}
                    <span className="text-purple-400">true</span>
                </p>

                <p>
                    <span className="text-slate-300">{"};"}</span>
                </p>

                <p className="mt-4 text-slate-500">
                    // building things that matter.
                </p>
                </div>
            </div>
            </div>

        </div>
        </section>
    );
}