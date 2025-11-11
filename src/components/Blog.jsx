function Blog(){
    const blogPosts = [
        {
            title: "Building with DIMO: Developer License",
            description: "Learn how to get up and running with your DIMO Developer License. Part of my DIMO University series.",
            link: "https://youtu.be/bfTwfAHJdKI",
            tag: "DIMO"
        },
        {
            title: "Introducing DIMO Webhooks",
            description: "Had the pleasure of announcing DIMO webhooks to our dedicated (and eager) dev community.",
            link: "https://dimo.co/blogs/the-pit-stop/introducing-dimo-webhooks",
            tag: "DIMO"
        },
        {
            title: "Creating Your First dApp (Decentralized App)",
            description: "How to get yourself setup to write your first dApp using React, Solidity, and Hardhat for local blockchain development.",
            link: "https://barrettk.hashnode.dev/creating-your-first-full-stack-dapp-with-solidity-hardhat-and-react",
            tag: "Personal"
        },
        {
            title: "An Exploration of APIs with Python",
            description: "Learn the differences between REST & RESTful API conventions.",
            link: "https://barrettk.hashnode.dev/understanding-the-differences-between-rest-api-and-restful-api-using-python",
            tag: "Personal"
        },
        {
            title: "Creating a CLI Book Tracking App",
            description: "Mark books as Currently Reading, Want to Read, and Completed.",
            link: "https://barrettk.hashnode.dev/recreating-a-simple-goodreads-book-tracker-using-python-sqlalchemy-and-inquirer",
            tag: "Personal"
        },
        {
            title: "Reflecting on my First Frontend Project",
            description: "#TBT. How I learned to design a product-centric website with React and Tailwind.",
            link: "https://barrettk.hashnode.dev/my-experience-designing-with-react-tailwind",
            tag: "Personal"
        }
    ];

    return (
        <section className="max-w-7xl mb-24">
            <div className="mb-12">
                <h2 className="mb-4">I Made You Some Content</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                    <div key={index} className="glass-card group">
                        <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-semibold flex-1">
                                <a target="_blank" href={post.link} rel="noopener noreferrer">
                                    {post.title}
                                </a>
                            </h3>
                            <span className="inline-block ml-3 text-xs font-medium text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/30 whitespace-nowrap">
                                {post.tag}
                            </span>
                        </div>
                        <p className="leading-relaxed">{post.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Blog;