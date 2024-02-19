import React from 'react';
import Projects from './Projects';
import Links from './Links';
import Blog from './Blog';

function Home(){
    return (
        <div className="mx-8">
            <h1 className="mt-8 text-4xl font-bold">Barrett Kowalsky</h1>
            <h4 className="my-4 text-xl"> Full Stack Dev</h4>
            <p className="my-4 font-normal">Creating unique, meaningful, and user-friendly experiences. Inspired by outer space. Constantly learning.</p>
            <Projects />
            <Blog/>
            <Links />
        </div>
    )

}

export default Home;