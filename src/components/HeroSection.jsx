export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4 space-y-10">
                <h1 className="bg-red-300 rounded-full text-2xl font-semibold p-2" >hey :) this page is still under construction</h1>
                <img className="h-70 w-fit rounded-full animate-fade-in hover:shadow-2xl" src="/headshot.jpg"/>
                <div className = "container max-w-4xl mx-auto text-center z-10">
                    <div className = "space-y-6">
                        {/* title section */}

                        <h1 className = "text-4xl md:text-6xl font-bold tracking-tight ">
                            <span className="opacity-0 animate-fade-in"> hello there, i'm</span>
                            <span className="opacity-0 animate-fade-in-delay-1"> ameeka</span>
                            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> patel</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 ">
                            constantly curious + caffeinated
                        </p>

                        <div className="pt-5 opacity-0 animate-fade-in-delay-4">
                            <a href = "#projects" className="cosmic-button mt-4 opacity-0 animate-fade-in-delay-4">
                                view my work
                            </a>
                        </div>
                    </div>
                </div>
        </section>
    )
}