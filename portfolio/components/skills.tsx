const skills = [
    {
        category: "frontend",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    },
    {
        category: "backend",
        technologies: ["Node.js", "Express", "APIs", "SQL"],
    },
    {
        category: "tools",
        technologies: ["Git", "GitHub", "Docker", "Figma"],
    },
    ];

    export default function Skills() {
    return (
        <section
        id="skills"
        className="relative overflow-hidden bg-[#020617] px-6 py-24"
        >
        {/* Background glow */}
        <div className="absolute left-0 top-1/2 h-100 w-100 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
            {/* Section title */}
            <div className="mb-14">
            <p className="mb-2 font-mono text-sm text-blue-500">
                ./skills
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Tech stack<span className="text-blue-500">.</span>
            </h2>

            <p className="mt-4 max-w-2xl text-slate-400">
                Tecnologias e ferramentas utilizadas para transformar ideias em
                aplicações modernas.
            </p>
            </div>

            {/* Skills */}
            <div className="grid gap-6 md:grid-cols-3">
            {skills.map((skill) => (
                <div
                key={skill.category}
                className="group rounded-xl border border-blue-500/10 bg-[#050b18] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.08)]"
                >
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                    <span className="font-mono text-sm text-blue-400">
                    {skill.category}
                    </span>

                    <span className="font-mono text-xs text-slate-600">
                    {"</>"}
                    </span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-md border border-slate-700/60 bg-slate-900/50 px-3 py-1.5 font-mono text-xs text-slate-300 transition-colors duration-300 group-hover:border-blue-500/20 group-hover:text-blue-300"
                    >
                        {technology}
                    </span>
                    ))}
                </div>
                </div>
            ))}
            </div>

            {/* Code line */}
            <div className="mt-12 flex items-center gap-3 font-mono text-xs text-slate-600">
            <span className="text-blue-500">$</span>
            <span>npm install creativity --save</span>
            <span className="h-4 w-px animate-pulse bg-blue-500" />
            </div>
        </div>
        </section>
    );
}