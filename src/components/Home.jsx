import React from 'react';
import Projects from './Projects';
import Links from './Links';
import Blog from './Blog';

function Home(){
    return (
        <div className="mx-8">
            <h1 className="mt-8 text-4xl font-bold">Barrett Kowalsky</h1>
            <h4 className="my-4 text-xl"> Full Stack Developer</h4>
            <p className="my-4 font-normal">Interested in creating unique, meaningful, and user-friendly experiences.<br/> Inspired by outer space. </p>
            <Projects />
            <Blog/>
            <Links />
        </div>
    )

}

export default Home;