
const featuredProjects = [
    //lemon meringue tart 
    {
        id: 1,
        title: "lemon meringue tart",
        image: "/food/lemonTart.jpeg",
        desc: "6/12/25: this was the first tart i ever made + my first time making meringue so i wasn't expecting much but i'm super happy with how it turned out"
    },

    //tier display
    {
        id: 2,
        title: "snack tier + scones",
        image: "/food/xmasTier.jpg",
        desc: "12/25/24: fun little breakfast tier display with matcha checkerboard cookies, avocado toast with goat cheese and pomegranate, and deviled eggs (and scones on the side)"
    },

    //chocolate orange cake
    {
        id: 3,
        title: "chocolate orange cake",
        image: "/food/chocOrangeCake.jpg",
        desc: "5/5/25: i always love making my own birthday cakes + this time i tried using the entire orange (peels for marmalade, juice + flesh for cake batter, leftover scraps were dehydrated for decoration)"

    }
]

const toasts = [
    {
        id: 1,
        title: "1/2 egg salad + 1/2 plum ricotta",
        image: "/food/toast/cucPlum.jpg"
    },
    {
        id: 2,
        title: "1/2 kiwi ricotta + 1/2 egg with parmesean crips",
        image:"/food/toast/kiwiEgg.jpg"
    },
    {
        if: 3,
        title:"mushroom and jammy egg on lemon ricotta",
        image: "/food/toast/mushroomEgg.jpg"
    },
    {
        ig: 4,
        title: "1/2 mushroom ricotta + 1/2 jam and ricotta",
        image: "/food/toast/mushroomJam.jpg"
    },
]

const otherProjects = [
    {
        id: 1,
        title: "apple galette",
        image: "/food/appleGalette.jpg",
    }, 

    {
        id: 2,
        title: "carrot cake",
        image: "/food/carrotCake.jpg",
    }, 

    {
        id: 3,
        title: "english muffin dough",
        image: "/food/engMuffin.jpg",
    }, 

    {
        id: 4,
        title: "smashed potatoes",
        image: "/food/smashPotato.jpg",
    }, 

    {
        id: 5,
        title: "zulo's bday cake",
        image: "/food/zuloCake.jpg",
    }, 

    {
        id: 6,
        title: "chicken torta",
        image: "/food/torta.jpg",
    }, 

    {
        id: 7,
        title: "ramen recipe",
        image: "/food/ramenRecipe.jpg",
    }, 

    {
        id: 8,
        title: "brunch spread",
        image: "/food/brunch1.jpg",
    }, 

    {
        id: 9,
        title: "bread roll dough",
        image: "/food/rollDough.jpg",
    }, 

    {
        id: 10,
        title: "tomato + labneh recipe",
        image: "/food/labnehRecipe.jpg"
    }, 

    {
        id: 11,
        title: "matcha cookie dough",
        image: "/food/matchaCookieDough.jpg",
    }, 

    {
        id: 12,
        title: "pomegranate pistachio loaf",
        image: "/food/pomPistaLoaf.jpg",
    }, 

    {
        id: 13,
        title: "custard + pavlova tier",
        image: "/food/nyeTier.jpg",
    }, 

    {
        id: 14,
        title: "blackberry chocolate cake",
        image: "/food/blackberryChocCake.jpg",
    }, 

    {
        id: 15,
        title: "choc orange cake process",
        image: "/food/chocOrangeProcess.jpg",
    }, 

    {
        id: 16,
        title: "crepes",
        image: "/food/crepes.jpg",
    }, 

    {
        id: 17,
        title: "choc cherry cardamom tart",
        image: "/food/cherryCardamomTart.jpg",
    }, 

    {
        id: 18,
        title: "chocolate fruit cake",
        image: "/food/chocCake.jpg",
    }, 
    {
        id: 19,
        title: "black forest olive oil cake",
        image: "/food/blackForestOliveOilCake.jpg"
    },
    {
        id: 20,
        title: "plum frangipane muffins",
        image: "/food/plumFrangipane.jpg"
    }
]
export const OfflineProjectsSection = () => {
    return (
        <section id="offlineProjects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                {/*header + desc*/}
                <h2 className="text-3xl md:text-4xl font-bold text-center"> (offline) projects </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto pt-2">
                    outside of the classroom, i like to clear my mind by cooking/baking and documenting 
                    my process in my recipe book. 
                </p>

                {/* featured projects */}
                <h2 className="text-2xl font-semibold text-center"> featured works </h2>
                <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
                    here are some of my projects that i am most proud of! 
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center pb-4 md:pl-16 md:pr-16">
                    {featuredProjects.map(project =>
                        <div key={project.id} className="text-left max-w-xs space-y-2 bg-white/80 border border-gray-200 p-2 rounded-md hover:shadow-lg">
                            <p className="font-semibold text-sm">{project.title}</p>
                            <div className="aspect-square w-full max-w-250 mx-auto overflow-hidden rounded-md shadow-2xs">
                                <img
                                    src={project.image}s
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <p className="font-thin text-sm">{project.desc}</p>

                        </div>
                    )}
                </div>
                {/* toast */}
                <h2 className="text-2xl font-semibold text-center pt-5"> toasts </h2>
                <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
                    some cool toasts deserve their own section in my opinion!
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center pb-3 md:pl-10 md:pr-10">
                    {toasts.map(project =>
                        <div key={project.id} >
                            <p className="font-medium text-sm">{project.title}</p>
                            <div className="aspect-square w-full max-w-250 mx-auto overflow-hidden rounded-sm shadow-2xs">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    )}
                </div>

                {/* other projects */}
                <h2 className="text-2xl font-semibold text-center pt-5"> other </h2>
                <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
                    here is a dump of everything else. i love taking photos to document my process 
                    so browse around to see everything from handwritten recipes to progress photos!
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center pb-3 md:pl-10 md:pr-10">
                    {otherProjects.map(project =>
                        <div key={project.id} >
                            <p className="font-medium text-sm">{project.title}</p>
                            <div className="aspect-square w-full max-w-250 mx-auto overflow-hidden rounded-sm shadow-2xs">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    )}
                </div>
            </div>

        </section>
    );
}       