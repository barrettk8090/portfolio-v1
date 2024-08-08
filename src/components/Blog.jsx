

function Blog(){
    return (
        <div className="max-w-xl">
            <h2 className="py-4 text-3xl font-semibold">Read</h2>

            <div className="mb-4 ">
            <h3 className="text-2xl font-medium"><a target="_blank" href="https://barrettk.hashnode.dev/creating-your-first-full-stack-dapp-with-solidity-hardhat-and-react">→ Creating Your First dApp (Decentralized App)</a></h3>
            {/* <h4 className="my-2 text-xl font-medium"> 02.15.2024 </h4> */}
            <p className="font-normal">How to get yourself setup to write your first dApp using React, Solidity, and Hardhat for local blockchain development.</p>
            </div>

            <div className="mb-4 ">
            <h3 className="text-2xl font-medium"><a target="_blank" href="https://barrettk.hashnode.dev/understanding-the-differences-between-rest-api-and-restful-api-using-python">→ An Exploration of APIs with Python</a></h3>
            {/* <h4 className="my-2 text-xl font-medium"> 01.25.2024 </h4> */}
            <p className="font-normal">Learn the differences between REST & RESTful API conventions.</p>
            </div>

            <div className="mb-4 ">
            <h3 className="text-2xl font-medium"><a target="_blank" href="https://barrettk.hashnode.dev/recreating-a-simple-goodreads-book-tracker-using-python-sqlalchemy-and-inquirer">→ Creating a CLI Book Tracking App</a></h3>
            {/* <h4 className="my-2 text-xl font-medium"> 01.05.2024 </h4> */}
            <p className="font-normal">Mark books as Currently Reading, Want to Read, and Completed.</p>
            </div>

            <div className="mb-4 ">
            <h3 className="text-2xl font-medium"><a target="_blank" href="https://barrettk.hashnode.dev/my-experience-designing-with-react-tailwind">→ Reflecting on my First Frontend Project</a></h3>
            {/* <h4 className="my-2 text-xl font-medium"> 12.06.2023 </h4> */}
            <p className="font-normal">How I learned to design a product-centric website with React and Tailwind.</p>
            </div>
        </div>
    )
}

export default Blog;