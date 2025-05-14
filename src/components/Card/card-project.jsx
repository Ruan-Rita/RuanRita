
export default function CardProject({ image, title, name, description, github }) {

    return (
        <div className="border-2 border-gray">
            <div className="aspect-[16/9]">
                {image && (
                    <img src={image} className="w-full block" />
                )}
            </div>
            <h1 className="p-4 border-b-2 text-primary font-bold border-gray">{title}</h1>
            <div className="p-4">
                <h1 className="text-white font-bold">{name}</h1>
                <p className="text-white min-h-14">{description}</p>
                <div className="mt-4">
                    <a href={github} target="_blank" className="border w-24 border-gray px-5 py-2 text-white">GitHub</a>
                </div>
            </div>
        </div>
    )
}