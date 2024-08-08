

function Projects(){
    return (
        <div className="max-w-xl">
            <h2 className="mb-4 text-3xl font-semibold">Projects</h2>

            <div className="mb-4 ">
                <h3 className="text-2xl font-medium"><a target="_blank" href="https://github.com/DIMO-Network/dimo-python-sdk">→ DIMO Software Development Kit (SDK) 🚙</a></h3>
                <h4 className="my-2 text-xl font-medium"> Python, Web3 | Open-Source </h4>
                <p className="font-normal"><a href="https://dimo.zone/" target="_blank">DIMO</a> is an open, decentralized, and secure mobility platform, powering the next generation of connected car applications and services. As the DIMO team has been ramping up developer tooling, I built an SDK in Python to allow devs to easily plug into the DIMO network. The SDK allows developers to quickly get access to massive amounts of car data, either through the DIMO REST API or via graphQL queries. The SDK also integrates web3 to allow users to share car privileges with developers who are building the next generation of connected vehicle applications. </p>
            </div>

            <div className="mb-4 ">
                <h3 className="text-2xl font-medium"><a target="_blank" href="https://sirchcoin.com/">→ Sirch 🔎</a></h3>
                <h4 className="my-2 text-xl font-medium"> React, Supabase, Postgres, Stripe </h4>
                <p className="font-normal"><a href="https://sirch.ai/" target="_blank"> Sirch</a> is an AI search engine that places a core emphasis on human ingenuity. I joined the Sirch team in March of 2024 because I was intrigued by the combination of human-generated content intermingling with AI – something that's lacking in nearly all ML projects to date. I'm part of the Sirch Coins team, building a new currency that will power the Sirch engine. I lead frontend development in React, along with the configuration of our Postgres Supabase db. I integrated Stripe payments to allow users to purchase Sirch coins with cold hard cash.</p>
            </div>
            
            <div className="mb-4">
                <h3 className="text-2xl font-medium"><a target="_blank" href="https://github.com/barrettk8090/fundOS">→ fundOS 💰</a></h3>
                <h4 className="my-2 text-xl font-medium"> React, Solidity, SQL, Web3 </h4>
                <p className="font-normal">I built fundOS as a part of my capstone project at Flation School. I only had three weeks to build this, and had to include a technology I'd never used before. I immediately knew I wanted to build a decentralized app (dApp) with Solidity. I successfully built the project on time, and even got to deliver a presentation to get my classmates quickly up to speed on blockchain tech. The dApp is a crowdfunding website a-la Kickstarter, and users can connect their ETH wallets to post their projects to the blockchain.</p>
            </div>

            <div className="mb-4 ">
                <h3 className="text-2xl font-medium"><a target="_blank" href="https://github.com/barrettk8090/doomscroll">→ DoomScroll 🔥</a></h3>
                <h4 className="my-2 text-xl font-medium"> React, Python, Supabase | Open Source </h4>
                <p className="font-normal">Doomscroll is a news aggregator built in React, all geared toward the demise of planet earth. A tongue-in-cheek response to our collective doomscrolling, I'm building this news aggregator as a reminder of what's coming if we don't change our ways and policies. I'm also planning to include helpful resources for those who live in disaster-prone areas, such as hurricane & earthquake preparedness. I'd like this to be an open source project with additional contributions from the community.</p>
            </div>


            <div className="mb-4">
                <h3 className="text-2xl font-medium"><a target="_blank" href="https://github.com/barrettk8090/Sweat-Spectrum-FullStack-Project">→ SweatSpectrum 💦</a></h3>
                <h4 className="my-2 text-xl font-medium"> React, Python, SQL </h4>
                <p className="font-normal">Built in collaboration with <a target="_blank" href="https://github.com/Dominik137">@Dom Arment</a> during our time at Flatiron School, we created a simple web app that allows users to track their workout progress, group workouts into sets, display detailed graphs to show progress, and highlight key fitness indicators.</p>
            </div>

            <div className="mb-4">
                <h3 className="text-2xl font-medium"><a target="_blank" href="https://github.com/barrettk8090/book-tracker">→ GooderReads 📖</a></h3>
                <h4 className="my-2 text-xl font-medium"> Python | CLI Application </h4>
                <p className="font-normal">GooderReads is a distraction-free book tracker, conveniently running in your terminal. You can create bookshelves to track books that you've read, want to read, or are currently reading. Get interesting stats about your books, like the total number of pages you've read, your percentage completion of your current book, and more!</p>
            </div>

            <div className="mb-4">
                <h3 className="text-2xl font-medium"><a target="_blank" href="https://github.com/barrettk8090/magNet">→ Magnet 🧲</a></h3>
                <h4 className="my-2 text-xl font-medium"> Frontend </h4>
                <p className="font-normal">I wanted to up my styling game, and learn Tailwind CSS in the process. So I build Magnet, a proof of concept for a mobile app that is a new way for creatives & small businesses to support one another. Inspired from my own experience as a freelance photographer who was just starting out. </p>
            </div>

        </div>
    )
}

export default Projects;