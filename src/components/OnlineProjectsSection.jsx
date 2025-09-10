import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        //graduateNU
        id: 1,
        title: "GraduateNU",
        description: "(for Sandbox, Northeastern's software consultancy) a tool that empowers 500+ Northeastern students to customize their plan of study through a flexible interface",
        image: "/projects/graduateNU.png",
        tags: ["React", "TypeScript", "Nest.js", "PostgreSQL", "Docker"],
        demoUrl: "https://graduatenu.com/",
        githubUrl: "https://github.com/sandboxnu/graduatenu",
    },

    {
        //personal portfolio
        id: 2,
        title: "Personal Portfolio",
        description: "you're already viewing it! this is where i show my online and offline projects",
        image: "/projects/personalPortfolio.png",
        tags: ["React", "JavaScript", "Tailwind CSS", "Radix UI", "Vite", "Vercel"],
        demoUrl: "#",
        githubUrl: "https://github.com/Ameeka-Patel/personalwebsite",
    },

    {
        //seam carver
        id: 3,
        title: "Seam Carver",
        description: "(for Accelerated Fundamentals of CS 2) a seam carving algorithm that resizes images by removing seams, lines of the least important pixels from the given image",
        image: "/projects/seamCarver.png",
        tags: ["Java", "Image Processing", "Deques", "Iterators"],
        demoUrl: "https://youtu.be/DgdfHFr-LkQ",
        githubUrl: "https://github.com/Ameeka-Patel/Seam-Carver",
    },

    {
        //maze solver
        id: 4,
        title: "Maze Solver",
        description: "(for Accelerated Fundamentals of CS 2)  a game which generates a random maze with kruskal's algorithm and is solved via a Breadth First Search, Depth First Search, or manual movement.",
        image: "/projects/mazeGame.png",
        tags: ["Java", "Kruskal's Algorithm", "Breadth First Search", "Depth First Search"],
        demoUrl: "https://youtu.be/OIgNwQZo7cg",
        githubUrl: "https://github.com/Ameeka-Patel/Maze-Game",
    },

    {
        //maze solver
        id: 5,
        title: "Safe Bluebikes Finder",
        description: "(for my Bostonography class) an application that anaylizes public datasets to allow users to gauge whether it is worth it to travel to a farther Bluebikes station with a higher safety score rather than settle for a closer station that is in an area more prone to accidents and fatalities",
        image: "/projects/safeBluebikesFinder.png",
        tags: ["React", "TailwindCSS", "Next.js", "Data Cleaning/Analysis"],
        demoUrl: null,
        githubUrl: "https://github.com/Ameeka-Patel/Safe-Bluebikes-Finder",
    },

    {
        //plaNUr
        id: 6,
        title: "PlaNUr",
        description: "(for Oasis, a beginner web dev club at Northeastern)  a tool which allows users to streamline the course registration process by browsing professor ratings, class locations, meeting times, and seat availability based on CRN.",
        image: "/projects/plaNUr.png",
        tags: ["React", "JavaScript", "Vite", "React Router"],
        demoUrl: null, 
        githubUrl: "https://github.com/Oasis-NEU/f24-group20",
    }
]

export const OnlineProjectsSection = () => {
    return (
        <section id="onlineProjects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                {/*header + desc*/}
                <h2 className="text-3xl md:text-4xl font-bold text-center"> (online) projects </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto pt-2">
                    here are some of my recent projects! feel free to click around and watch the demos
                    or browse the repos
                </p>

                {/* projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white/80 border border-gray rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            {/* image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>

                            {/* skill tags */}
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) =>
                                        <span key ={index} className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-secondary-foreground border">
                                            {tag}
                                        </span>
                                    )}
                                </div>

                                {/* proj title */}
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                                {/* proj desc */}
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                {/* github + demo link*/}
                            <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                className="text-foreground/80 hover:text-primary hover:rotate-20 transition-colors duration-200"
                                                target="_blank">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}

                                        <a
                                            href={project.githubUrl}
                                            className="text-foreground/80 hover:text-primary hover:rotate-20 transition-colors duration-200"
                                            target="_blank">
                                            <Github size={20} />
                                        </a>
                                    </div>
                            </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* github account link */}
                <div className="text-center mt-12">
                    <a 
                    className="clear-button w-fit flex items-center mx-auto gap-2"
                    href="https://github.com/Ameeka-Patel"
                    target="_blank">
                        my github <ArrowRight size={16}/>
                    </a>
                    <div>

                    </div>
                </div>


            </div>

        </section>
    );
};