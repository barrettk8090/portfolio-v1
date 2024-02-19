import React from 'react';
import Projects from './Projects';
import Links from './Links';
import Blog from './Blog';

function Home(){
    return (
        <div>
            <h1 className="mt-12 text-4xl font-bold">Barrett Kowalsky</h1>
            <h4 className="my-6 text-xl"> Full Stack Dev</h4>
            <Projects />
            <Blog/>
            <Links />
        </div>
    )

}

export default Home;