import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import Experience from './Experience';
import Projects from './Projects';
import Links from './Links';
import Blog from './Blog';

function Home(){
    return (
        <>
            <AnimatedBackground />
            <div className="relative z-10 min-h-screen">
                {/* Hero Section */}
                <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-32 pb-16">
                    <div className="max-w-5xl">
                        <div className="mb-6 inline-block">
                            <span className="text-sm md:text-base font-medium tracking-wide uppercase text-blue-300/80 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-400/30">
                                Full Stack Developer
                            </span>
                        </div>

                        <h1 className="mb-8 leading-tight">
                            Barrett Kowalsky
                        </h1>

                        <div className="max-w-3xl mb-10">
                            <p className="text-lg md:text-xl leading-relaxed text-slate-300">
                                Hello there 👋 I am a software engineer based in{' '}
                                <span className="text-blue-300 font-semibold">Denver, CO</span>.
                                I currently work at DIMO as a  <span className="text-blue-300 font-semibold">Developer Relations Engineer</span>,
                                where I am bringing connected car services into the AI era.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pb-12">
                            <a href="https://github.com/barrettk8090" target="_blank" rel="noopener noreferrer">
                                <button>Github</button>
                            </a>
                            <a href="https://www.linkedin.com/in/barrettkowalsky/" target="_blank" rel="noopener noreferrer">
                                <button>LinkedIn</button>
                            </a>
                            <a href="mailto:barrettkowalsky@gmail.com" target="_blank" rel="noopener noreferrer">
                                <button>Email Me</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="container mx-auto px-6 md:px-12 lg:px-20 pb-20">
                    <Projects />
                    <Experience />
                    <Blog />
                    <Links />
                </div>
            </div>
        </>
    )
}

export default Home;