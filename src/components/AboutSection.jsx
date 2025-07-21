import { Code, Box, Wrench, ArrowRight, School, Calendar, LibraryBig, GraduationCap } from "lucide-react";

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
                                <Calendar /> <b>year: </b>rising sophomore
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
                            i am always always eager to learn something new and further my
                            web dev skills, whether that is through Sandbox (see my projects
                            below) or through personal projects like this!
                        </p>

                        <p className="text-muted-foreground">
                            other than this, my offline hobbies include 
                            baking/cooking, going on long runs, and
                            hanging out with friends
                        </p>

                        <div className="cosmic-button w-fit flex items-center mx-auto gap-2">
                            <a href="resume.pdf" target="_blank" className="cosmic-button p-1">
                                resume
                            </a>
                        </div>
                    </div>

                    {/* right column w/ skills */}
                    <div className="grid grid-cols-1 gap-6">

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6" />
                                </div>

                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">languages</h4>
                                    <div className="flex space-x-3 text-center pt-4">
                                        <div className="grid-cols-1 space-y-3">
                                            <p className="bg-primary/10 rounded-sm p-1"> Java </p>
                                            <p className="bg-primary/10 rounded-sm p-1"> Python </p>
                                            <p className="bg-primary/10 rounded-sm p-1"> TypeScript </p>
                                        </div>

                                        <div className="grid-cols-1  space-y-3">
                                            <p className="bg-primary/10 rounded-sm p-1"> JavaScript </p>
                                            <p className="bg-primary/10 rounded-sm p-1"> HTML </p>
                                            <p className="bg-primary/10 rounded-sm p-1"> CSS </p>
                                        </div>

                                        <div className="grid-cols-1  space-y-3">
                                            <p className="bg-primary/10 rounded-sm p-1"> Racket BSL </p>
                                            <p className="bg-primary/10 rounded-sm p-1"> R </p>
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
                                    <h4 className="text-lg font-semibold">libraries + frameworks</h4>
                                    <div className="flex space-x-3 text-center pt-4">
                                        <div className="grid-cols-1  space-y-3">
                                            <p className="bg-primary/10 rounded-sm p-1">React</p>
                                            <p className="bg-primary/10 rounded-sm p-1">Next.js</p>
                                            <p className="bg-primary/10 rounded-sm p-1">Node.js</p>
                                        </div>
                                        <div className="grid-cols-1  space-y-3">
                                            <p className="bg-primary/10 rounded-sm p-1">Prisma</p>
                                            <p className="bg-primary/10 rounded-sm p-1">Tailwind CSS</p>
                                            <p className="bg-primary/10 rounded-sm p-1">JUnit</p>
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
                                    <div className="flex space-x-3 text-center pt-4">
                                        <div className="grid-cols-1  space-y-3">
                                            <p className="bg-primary/10 rounded-sm p-1"> Git </p>
                                            <p className="bg-primary/10 rounded-sm p-1"> Docker </p>
                                            <p className="bg-primary/10 rounded-sm p-1"> Vite </p>
                                            <p className="bg-primary/10 rounded-sm p-1"> Vercel </p>
                                        </div>
                                        <div className="grid-cols-1  space-y-3">
                                            <p className="bg-primary/10 rounded-sm p-1"> VSCode </p>
                                            <p className="bg-primary/10 rounded-sm p-1"> IntelliJ </p>
                                            <p className="bg-primary/10 rounded-sm p-1"> Eclipse </p>
                                        </div>
                                        <div className="grid-cols-1  space-y-3">
                                            <p className="bg-primary/10 rounded-sm p-1"> RStudio </p>
                                            <p className="bg-primary/10 rounded-sm p-1"> Figma </p>
                                            <p className="bg-primary/10 rounded-sm p-1"> Postman </p>
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
