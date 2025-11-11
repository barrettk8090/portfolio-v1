function Links(){
    return (
        <section className="max-w-7xl">
            <div className="mb-12">
                <h2 className="mb-4">Let's Connect</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <a
                    target="_blank"
                    href="https://github.com/barrettk8090"
                    rel="noopener noreferrer"
                    className="glass-card group text-center hover:scale-105 transition-transform duration-300"
                >
                    <h3 className="text-xl font-semibold">
                        GitHub
                    </h3>
                    <p className="text-sm text-slate-400 mt-2">@barrettk8090</p>
                </a>

                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/barrettkowalsky/"
                    rel="noopener noreferrer"
                    className="glass-card group text-center hover:scale-105 transition-transform duration-300"
                >
                    <h3 className="text-xl font-semibold">
                        LinkedIn
                    </h3>
                    <p className="text-sm text-slate-400 mt-2">Barrett Kowalsky</p>
                </a>

                <a
                    target="_blank"
                    href="https://barrettk.hashnode.dev/"
                    rel="noopener noreferrer"
                    className="glass-card group text-center hover:scale-105 transition-transform duration-300"
                >
                    <h3 className="text-xl font-semibold">
                        Blog
                    </h3>
                    <p className="text-sm text-slate-400 mt-2">Hashnode</p>
                </a>

                <a
                    target="_blank"
                    href="mailto:barrettkowalsky@gmail.com"
                    rel="noopener noreferrer"
                    className="glass-card group text-center hover:scale-105 transition-transform duration-300"
                >
                    <h3 className="text-xl font-semibold">
                        Email
                    </h3>
                    <p className="text-sm text-slate-400 mt-2">Get in touch</p>
                </a>
            </div>
        </section>
    )
}

export default Links;

