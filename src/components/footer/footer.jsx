import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <section className="border-t border-gray py-16">
            <div className="max-w-7xl mx-auto w-full flex flex-col px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-white text-xl inline mr-5">RuanRita</h1>
                        <p className="text-white mt-2">Back-end developer and Front-end developer</p>
                    </div>
                    <div>
                        <h1 className="text-white text-2xl">Media</h1>
                        <div className="flex gap-3 mt-5">
                            <a href="https://discord.com/users/ruan_rita" target="_blank">
                                <FaDiscord className="text-gray w-8 h-8 hover:text-primary" />
                            </a>
                            <a href="https://github.com/Ruan-Rita" target="_blank">
                                <FaGithub className="text-gray w-8 h-8 hover:text-primary" />
                            </a>
                            <a href="https://www.linkedin.com/in/ruan-rita-99885a1b6/" target="_blank">
                                <FaLinkedin className="text-gray w-8 h-8 hover:text-primary" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}