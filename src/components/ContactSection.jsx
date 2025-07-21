import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react"
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";


export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "message sent",
                description: "thank you for your message. i'll get back to you soon"
            })
            setIsSubmitting(false);
        }, 1500)
    }
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

                    {/* contact form */}
                    {/*
                    <div className="bg-card p-8 rounded-lg shadow-xs"
                        onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6">send a message: </h3>
                        <form className="space-y-6">
                            //name 
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2">your name: </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Ameeka Patel..." />
                            </div>

                            //email
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2">your email: </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="xyz@gmail.com..." />
                            </div>

                           //message
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2">your message: </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="hello, i wanted to reach out..." />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                                )}>
                                {isSubmitting ? "sending..." : "send message"}
                                <Send size={16} />
                            </button>

                        </form>
                    </div>
                    
                </div>*/}
            </div>



        </section>
    )
}