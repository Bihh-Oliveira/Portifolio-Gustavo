const projects = [
    {
        title: "Project One",
        description:
        "Uma aplicação moderna desenvolvida para resolver problemas reais através de uma experiência simples e intuitiva.",
        technologies: ["React", "TypeScript", "Tailwind"],
        github: "#",
        demo: "#",
    },
    {
        title: "Project Two",
        description:
        "Projeto focado em performance, responsividade e uma interface moderna para diferentes dispositivos.",
        technologies: ["Next.js", "TypeScript", "API"],
        github: "#",
        demo: "#",
    },
    {
        title: "Project Three",
        description:
        "Aplicação desenvolvida com foco em organização, escalabilidade e uma experiência de usuário eficiente.",
        technologies: ["React", "Node.js", "SQL"],
        github: "#",
        demo: "#",
    },
    ];

    export default function Projects() {
    return (
        <section
        id="projects"
        className="relative overflow-hidden bg-[#020617] px-6 py-24"
        >
        {/* Background glow */}
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
            {/* Section title */}
            <div className="mb-14">
            <p className="mb-2 font-mono text-sm text-blue-500">
                ./projects
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Featured projects<span className="text-blue-500">.</span>
            </h2>

            <p className="mt-4 max-w-2xl text-slate-400">
                Alguns projetos que representam minhas habilidades e experiências
                com desenvolvimento.
            </p>
            </div>

            {/* Projects grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <article
                key={project.title}
                className="group overflow-hidden rounded-xl border border-blue-500/10 bg-[#050b18] transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_0_35px_rgba(37,99,235,0.1)]"
                >
                {/* Project image */}
                <div className="relative flex h-52 items-center justify-center overflow-hidden border-b border-blue-500/10 bg-[#030817]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_65%)]" />

                    <div className="relative font-mono text-5xl font-bold text-blue-500/20 transition-all duration-500 group-hover:scale-110 group-hover:text-blue-500/30">
                    {"</>"}
                    </div>

                    <span className="absolute left-4 top-4 font-mono text-xs text-slate-600">
                    0{index + 1}
                    </span>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">
                        {project.title}
                    </h3>

                    <span className="font-mono text-xs text-blue-500">
                        0{index + 1}
                    </span>
                    </div>

                    <p className="min-h-[84px] text-sm leading-6 text-slate-400">
                    {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <span
                        key={technology}
                        className="rounded-md border border-blue-500/10 bg-blue-500/5 px-2.5 py-1 font-mono text-[11px] text-blue-300"
                        >
                        {technology}
                        </span>
                    ))}
                    </div>

                    {/* Links */}
                    <div className="mt-6 flex items-center gap-5 border-t border-blue-500/10 pt-5">
                    <a
                        href={project.github}
                        className="font-mono text-xs text-slate-400 transition-colors hover:text-blue-400"
                    >
                        github ↗
                    </a>

                    <a
                        href={project.demo}
                        className="font-mono text-xs text-slate-400 transition-colors hover:text-blue-400"
                    >
                        live demo ↗
                    </a>
                    </div>
                </div>
                </article>
            ))}
            </div>
        </div>
        </section>
    );
}