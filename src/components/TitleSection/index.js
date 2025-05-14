import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function TitleSection({title, link}) {

    return (
        <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
                <h1 className="text-white text-2xl font-bold mr-12"><b className="text-primary">#</b> {title}</h1>
                <hr className="bg-primary border-primary w-80"></hr>
            </div>
            {link && (
                <Link href={link} className="flex items-center" target="_blank">
                    <h1 className="text-white mr-2">View all</h1>
                    <FaLongArrowAltRight className="text-white" width={20}/>
                </Link>
            )}
        </div>
    )
}