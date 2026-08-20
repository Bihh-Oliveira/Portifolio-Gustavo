export default function About() {
    return (
        <section
        id="about"
        className="relative overflow-hidden bg-[#020617] px-6 py-24"
        >
        {/* Background glow */}
        <div className="absolute right-0 top-1/2 h-87 w-87 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
            {/* Section title */}
            <div className="mb-14">
            <p className="mb-2 font-mono text-sm text-blue-500">
                ./about
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                About me<span className="text-blue-500">.</span>
            </h2>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div>
                <p className="text-lg leading-8 text-slate-300">
                Sou um desenvolvedor apaixonado por tecnologia e por transformar
                ideias em experiências digitais.
                </p>

                <p className="mt-6 leading-7 text-slate-400">
                Gosto de criar aplicações modernas, funcionais e intuitivas,
                sempre buscando aprender novas tecnologias e melhorar minhas
                habilidades como desenvolvedor.
                </p>

                <p className="mt-6 leading-7 text-slate-400">
                Meu foco está em escrever código limpo, construir interfaces
                bem pensadas e desenvolver soluções que realmente façam
                diferença.
                </p>
            </div>

            {/* Developer card */}
            <div className="relative">
                <div className="rounded-xl border border-blue-500/15 bg-[#050b18] p-6 shadow-[0_0_35px_rgba(37,99,235,0.05)]">
                
                {/* Card header */}
                <div className="mb-6 flex items-center gap-2 border-b border-blue-500/10 pb-4">
                    <span className="font-mono text-sm text-blue-400">
                    developer.json
                    </span>
                </div>

                {/* Code */}
                <div className="font-mono text-sm leading-8">
                    <p>
                    <span className="text-slate-500">{"{"}</span>
                    </p>

                    <p className="pl-5">
                    <span className="text-blue-300">"focus"</span>
                    <span className="text-slate-500">:</span>{" "}
                    <span className="text-green-400">
                        "Web Development"
                    </span>
                    <span className="text-slate-500">,</span>
                    </p>

                    <p className="pl-5">
                    <span className="text-blue-300">"experience"</span>
                    <span className="text-slate-500">:</span>{" "}
                    <span className="text-green-400">
                        "Building digital products"
                    </span>
                    <span className="text-slate-500">,</span>
                    </p>

                    <p className="pl-5">
                    <span className="text-blue-300">"learning"</span>
                    <span className="text-slate-500">:</span>{" "}
                    <span className="text-green-400">
                        true
                    </span>
                    <span className="text-slate-500">,</span>
                    </p>

                    <p className="pl-5">
                    <span className="text-blue-300">"coffee"</span>
                    <span className="text-slate-500">:</span>{" "}
                    <span className="text-purple-400">
                        Infinity
                    </span>
                    </p>

                    <p>
                    <span className="text-slate-500">{"}"}</span>
                    </p>
                </div>
                </div>

                {/* Decorative line */}
                <div className="absolute -bottom-3 left-6 h-px w-24 bg-blue-500/50" />
            </div>
            </div>
        </div>
        </section>
    );
}