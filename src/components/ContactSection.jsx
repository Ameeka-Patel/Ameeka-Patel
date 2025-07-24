import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react"
import { cn } from "@/lib/utils";
import { useState } from "react";


export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30 flex justify-center">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    get in touch
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    questions? comments? feel free to reach out for anything:
                </p>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> */}
                    {/* contact info */}
                    <div className="space-y-8 flex justify-center"> 

                        <div className="space-y-6 max-w-md">
                            {/* email */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6" />
                                </div>

                                <div className="pt-2">
                                    <a
                                        href="mailto:patelameeka@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        target="_blank">
                                        patelameeka@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* linked in */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Linkedin className="h-6 w-6" />
                                </div>

                                <div className="pt-2">
                                    <a
                                        href="https://www.linkedin.com/in/ameeka-patel-953b06262/"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        target="_blank">
                                        www.linkedin.com/in/ameeka-patel
                                    </a>
                                </div>
                            </div>

                            {/* github */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Github className="h-6 w-6" />
                                </div>

                                <div className="pt-2">
                                    <a
                                        href="https://github.com/Ameeka-Patel"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        target="_blank">
                                        https://github.com/Ameeka-Patel
                                    </a>
                                </div>
                            </div>

                            {/* general location */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6" />
                                </div>

                                <div className="pt-2">
                                    <p>Boston, MA | New Jersey</p>
                                </div>
                            </div>


                        </div>
                    </div>
            </div>



        </section>
    )
}