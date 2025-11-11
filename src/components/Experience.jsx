function Experience() {
    const experiences = [
        {
            company: "DIMO",
            role: "Software Engineer, Developer Relations",
            period: "Dec 2024 - Present",
            description: "Creator of developer tooling, documentation, APIs and SDKs.",
            link: "https://dimo.org/"
        },
        {
            company: "Sirch",
            role: "Software Engineer, Contract",
            period: "Feb 2024 - Nov 2024",
            description: "Built the full stack experience for Sirch Coins, a new digital currency.",
            link: "https://sirch.ai/"
        },
        {
            company: "Avex Designs",
            role: "Sr. Project Manager",
            period: "Apr 2019 - Nov 2022",
            description: "Managed design, development, and strategy teams across ecommerce projects.",
            link: "https://www.avexdesigns.com/"
        },
    ];

    return (
        <section className="max-w-7xl mb-24">
            <div className="mb-12">
                <h2 className="mb-4">Experience</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
            </div>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 opacity-30"></div>

                {/* Experience items */}
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-20 md:pl-28">
                            {/* Timeline dot */}
                            <div className="absolute left-8 md:left-12 top-6 w-5 h-5 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-4 border-slate-900 shadow-lg shadow-blue-500/50"></div>

                            {/* Content card */}
                            <div className="glass-card">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-1">
                                            {exp.link ? (
                                                <a href={exp.link} target="_blank" rel="noopener noreferrer">
                                                    {exp.company}
                                                </a>
                                            ) : (
                                                exp.company
                                            )}
                                        </h3>
                                        <h4 className="text-lg">{exp.role}</h4>
                                    </div>
                                    <span className="inline-block mt-2 md:mt-0 text-sm font-medium text-blue-300 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-400/30">
                                        {exp.period}
                                    </span>
                                </div>
                                {exp.description && (
                                    <p className="leading-relaxed">{exp.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
