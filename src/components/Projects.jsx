import fundOS from '../assets/fundOS.pdf'

function Projects(){
    return (
        <section className="max-w-7xl mb-24">
            <div className="mb-12">
                <h2 className="mb-4">Featured Projects</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* DIMO SDK */}
                <div className="glass-card group">
                    <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-semibold">
                            <a target="_blank" href="https://github.com/DIMO-Network/dimo-python-sdk" rel="noopener noreferrer">
                                DIMO Data SDK 🚗
                            </a>
                        </h3>
                    </div>
                    <h4 className="mb-3">Python · Web3 · Open-Source</h4>
                    <p className="leading-relaxed">
                        Before I was employed at DIMO, I built an open source data sdk in Python, making it easy for developers to interact with the DIMO APIs.
                    </p>
                </div>

                {/* Sirch */}
                <div className="glass-card group">
                    <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-semibold">
                            <a target="_blank" href="https://sirchcoin.com/" rel="noopener noreferrer">
                                Sirch 🔎
                            </a>
                        </h3>
                    </div>
                    <h4 className="mb-3">React · Supabase · Postgres · Stripe</h4>
                    <p className="leading-relaxed">
                        <a href="https://sirch.ai/" target="_blank" rel="noopener noreferrer">Sirch</a> is an AI powered search engine, powered by Sirch Coins. I built out the entire frontend and backend experience for Sirch Coins.
                    </p>
                </div>

                {/* fundOS */}
                <div className="glass-card group">
                    <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-semibold">
                            <a target="_blank" href="https://github.com/barrettk8090/fundOS" rel="noopener noreferrer">
                                fundOS 💰
                            </a>
                        </h3>
                    </div>
                    <h4 className="mb-3">React · Solidity · SQL · Web3</h4>
                    <p className="leading-relaxed">
                        A decentralized crowdfunding dApp built as my capstone project at Flatiron School. Users can connect their ETH wallets to post projects to the blockchain.
                    </p>
                </div>

                {/* DoomScroll */}
                <div className="glass-card group">
                    <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-semibold">
                            <a target="_blank" href="https://github.com/barrettk8090/doomscroll" rel="noopener noreferrer">
                                DoomScroll 🔥
                            </a>
                        </h3>
                    </div>
                    <h4 className="mb-3">React · Python · Supabase · Open Source</h4>
                    <p className="leading-relaxed">
                        A news aggregator focused on climate and environmental issues. Open source project with disaster preparedness resources for at-risk communities.
                    </p>
                </div>

                {/* SweatSpectrum */}
                {/* <div className="glass-card group">
                    <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-semibold">
                            <a target="_blank" href="https://github.com/barrettk8090/Sweat-Spectrum-FullStack-Project" rel="noopener noreferrer">
                                SweatSpectrum 💦
                            </a>
                        </h3>
                    </div>
                    <h4 className="mb-3">React · Python · SQL</h4>
                    <p className="leading-relaxed">
                        Built in collaboration with <a target="_blank" href="https://github.com/Dominik137" rel="noopener noreferrer">@Dom Arment</a> during our time at Flatiron School, we created a simple web app that allows users to track their workout progress, group workouts into sets, display detailed graphs to show progress, and highlight key fitness indicators.
                    </p>
                </div> */}

                {/* GooderReads */}
                {/* <div className="glass-card group">
                    <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-semibold">
                            <a target="_blank" href="https://github.com/barrettk8090/book-tracker" rel="noopener noreferrer">
                                GooderReads 📖
                            </a>
                        </h3>
                    </div>
                    <h4 className="mb-3">Python · CLI Application</h4>
                    <p className="leading-relaxed">
                        GooderReads is a distraction-free book tracker, conveniently running in your terminal. You can create bookshelves to track books that you've read, want to read, or are currently reading. Get interesting stats about your books, like the total number of pages you've read, your percentage completion of your current book, and more!
                    </p>
                </div> */}

                {/* Magnet */}
                {/* <div className="glass-card group">
                    <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-semibold">
                            <a target="_blank" href="https://github.com/barrettk8090/magNet" rel="noopener noreferrer">
                                Magnet 🧲
                            </a>
                        </h3>
                    </div>
                    <h4 className="mb-3">Frontend</h4>
                    <p className="leading-relaxed">
                        I wanted to up my styling game, and learn Tailwind CSS in the process. So I build Magnet, a proof of concept for a mobile app that is a new way for creatives & small businesses to support one another. Inspired from my own experience as a freelance photographer who was just starting out.
                    </p>
                </div> */}
            </div>
        </section>
    )
}

export default Projects;