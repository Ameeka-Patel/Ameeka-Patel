
const featuredProjects = [
    //lemon meringue tart 
    {
        id: 1,
        title: "lemon meringue tart",
        image: "/food/lemonTart.jpeg",
    },

    //tier display
    {
        id: 2,
        title: "snack tier + scones",
        image: "/food/xmasTier.jpg",

    },

    //chocolate cherry cardamom tart
    {
        id: 3,
        title: "chocolate cherry cardamom tart",
        image: "/food/chocCherryTart.jpg",


    }
]
export const OfflineProjectsSection = () => {
    return (
        <section id="offlineProjects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                {/*header + desc*/}
                <h2 className="text-3xl md:text-4xl font-bold text-center"> (offline) projects </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto pt-2">
                    when i'm not cooking in the classroom, i'm cooking in the kitchen :))
                    below, you can find my featured works, progress photos, and handwritten recipes!
                </p>

                {/* featured projects */}
                <h2 className="text-xl md:text-2xl font-semibold text-center pb-3"> featured works </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center pb-8">
                    {featuredProjects.map(project =>
                        <div key={project.id} className="text-center max-w-xs space-y-2">
                            <p className="text-left font-medium">{project.title}</p>
                            <div className="aspect-square w-full max-w-250 mx-auto  overflow-hidden rounded-md shadow-2xs">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* other */}
                <h2 className="text-xl text-gray-400 md:text-2xl font-semibold text-center pb-3"> ( more coming soon :O )  </h2>



            </div>

        </section>
    );
}       