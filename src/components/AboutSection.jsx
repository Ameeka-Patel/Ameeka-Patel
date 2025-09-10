import { Code, Box, Wrench, ArrowRight, School, Calendar, LibraryBig, GraduationCap } from "lucide-react";

const myLanguages = [
    "Java",
    "Python",
    "SQL",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Racket BSL",
    "R"
]

const myLibrariesAndFrameworks = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "JUnit",
    "Prisma ORM",
    "Radix UI"
]

const myTools = [
    "Git",
    "Docker",
    "Vite",
    "Vercel",
    "Supabase",
    "PostgreSQL",
    "VSCode",
    "IntelliJ",
    "Eclipse",
    "RStudio",
    "Figma",
    "Postman"
]

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    about me
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-left">
                    {/* left column w/ text content */}
                    <div className="space-y-6">
                        {/* <h3 className="text-2xl font-semibold">header here</h3> */}

                        <div className="text-left space-y-2">
                            <p>the basics: </p>
                            <div className="flex flex-wrap gap-x-1">
                                <Calendar /> <b>year: </b>sophomore
                            </div>

                            <div className="flex flex-wrap gap-x-1">
                                <School /><b>school: </b>Northeastern University Honors Program
                            </div>

                            <div className="flex flex-wrap gap-x-1">
                                <LibraryBig /><b>major: </b> computer science and business administration, 
                                concentrating in marketing analytics
                            </div>

                            <div className="flex flex-wrap gap-x-1">
                                <GraduationCap /><b>expected grad year: </b> December, 2027
                            </div>

                        </div>


                        <p className="text-muted-foreground">
                            hello, my name is ameeka patel! i am always eager to learn something new and further
                            my web dev skills, whether that is through student organizations like Sandbox 
                            or through personal projects like this (scroll to see all of my projects below)!
                        </p>

                        <p className="text-muted-foreground">
                            when i'm not working on my next project, you can find me testing new recipes for my book,
                            exploring new running trails, or scouring for an iced mocha
                        </p>

                        <div className="clear-button w-fit flex items-center mx-auto gap-2">
                            <a href="/resume.pdf" rel="noopener noreferrer"  target="_blank" >
                                resume
                            </a>
                        </div>
                    </div>

                    {/* right column w/ skills */}
                    <div className="grid grid-cols-1 gap-6">

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-2">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6" />
                                </div>

                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">languages</h4>
                                    <div className="text-center pt-4">
                                        <div className="text-left space-y-3">
                                            {myLanguages.map((language, index) =>
                                                 <p key={index} className="bg-primary/10 rounded-sm p-2 mr-2 inline-block"> {language} </p>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Box className="h-6 w-6" />
                                </div>

                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">libraries & frameworks</h4>
                                    <div className="text-center pt-4">
                                        <div className="text-left space-y-3">
                                            {myLibrariesAndFrameworks.map((libOrFramework, index) =>
                                                 <p key={index} className="bg-primary/10 rounded-sm p-2 mr-2 inline-block"> {libOrFramework} </p>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Wrench className="h-6 w-6" />
                                </div>

                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">tools</h4>
                                    <div className="text-center pt-4">
                                        <div className="text-left space-y-3">
                                            {myTools.map((tool, index) =>
                                                 <p key={index}  className="bg-primary/10 rounded-sm p-2 mr-2 inline-block"> {tool} </p>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
