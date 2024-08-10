import React from 'react';
import Projects from './Projects';
import Links from './Links';
import Blog from './Blog';

function Home(){
    return (
        <div className="mx-8">
            <h1 className="mt-8 text-4xl font-bold">Barrett Kowalsky</h1>
            <h4 className="my-4 text-xl"> Full Stack Developer</h4>
            <div className="max-w-lg">
                <p className="my-6 font-normal">Hello there. I'm a software engineer based in Denver, CO. I enjoy programming in JavaScript & Python <a href="https://github.com/barrettk8090" target="_blank">(among other languages)</a>, and also have experience working in cross-functional teams. I love crafting full stack applications and have a special interest in crypto/web3 projects.</p>
            </div>
            <div className="pb-6">
                <a href="https://github.com/barrettk8090" target="_blank">
                    <button className="hover:bg-black">Github ↗</button>
                </a>
                <a href="https://www.linkedin.com/in/barrettkowalsky/" target="_blank">
                    <button className="hover:bg-black">LinkedIn ↗</button>
                </a>
                <a href="mailto:barrettkowalsky@gmail.com" target="_blank">
                    <button className="hover:bg-black">Email Me ↗</button>
                </a>
            </div>
            <Projects />
            <Blog/>
            <Links />
        </div>
    )

}

export default Home;