import React from 'react';
import Projects from './Projects';
import Links from './Links';

function Home(){
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Barrett Kowalsky</h1>
            <h2>Full Stack Dev</h2>
            <Projects />
            <Links />
        </div>
    )

}

export default Home;