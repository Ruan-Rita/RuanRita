
export default function CardProject({ image, title, name, description, github, live }) {

    return (
        <div className="border-2 border-gray flex flex-col hover:border-primary transition-colors duration-300">
            <div className="aspect-[16/9] bg-background/50 overflow-hidden">
                {image ? (
                    <img src={image} className="w-full h-full object-cover block hover:scale-105 transition-transform duration-300" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray text-sm">No preview</span>
                    </div>
                )}
            </div>
            <h1 className="p-4 border-b-2 text-primary font-bold border-gray text-sm">{title}</h1>
            <div className="p-4 flex flex-col flex-1">
                <h1 className="text-white font-bold text-lg mb-2">{name}</h1>
                <p className="text-gray min-h-14 flex-1 text-sm leading-relaxed">{description}</p>
                <div className="mt-4 flex gap-3">
                    {live && (
                        <a href={live} target="_blank" className="border border-primary px-4 py-2 text-white text-sm hover:bg-primary transition-colors duration-200">
                            Live
                        </a>
                    )}
                    {github && (
                        <a href={github} target="_blank" className="border border-gray px-4 py-2 text-white text-sm hover:border-primary transition-colors duration-200">
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}