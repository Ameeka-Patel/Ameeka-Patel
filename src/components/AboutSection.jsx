export const AboutSection = () => {
    return (
        <section id="#about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    about me
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* left column w/ text content */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">header here</h3>

                        <p className="text-muted-foreground">
                            ...
                            ...
                            ...
                        </p>

                        <p className="text-muted-foreground">
                            ...
                            ...
                            ...
                        </p>

                    </div>

                    {/* right column w/ skills */}
                    <div>

                    </div>

                </div>
            </div>
        </section>
    );
};