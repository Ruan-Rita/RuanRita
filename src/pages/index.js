import NavBar from "../components/Navbar/navbar";
import { MdOutlineEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import CardProject from "../components/Card/card-project";
import Footer from "../components/footer/footer";
import { Url } from "../helper/url";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import TitleSection from "../components/TitleSection";
import Trans from "../helper/language/trans";

export default function Home() {
  return (
    <main className='bg-background w-full flex flex-col min-h-screen'>
      <div className="h-[70vh] flex flex-col custom-intro" style={{backgroundImage: `url(${Url('circuit-board.svg')})`}}>
        <NavBar />
        {/* Introduce */}
        <div className="flex-1 items-center relative text-white flex">
          {/* Contacts info */}
          <section className="flex flex-col gap-5 absolute left-0 bg-primary p-3">
            <a className="hover:text-gray" href="mailto:ruan.ritah@gamil.com">
              <MdOutlineEmail size={40}/>
            </a>
            <a className="hover:text-gray" href="https://discord.com/users/ruan_rita" target="_blank">
              <FaDiscord size={40}/>
            </a>
            <a className="hover:text-gray" href="https://github.com/Ruan-Rita" target="_blank">
              <FaGithub size={40}/>
            </a>
            <a className="hover:text-gray" href="https://www.linkedin.com/in/ruan-rita-99885a1b6/" target="_blank">
              <FaLinkedin size={40}/>
            </a>
          </section>
          <div className="flex flex-col items-center gap-10 mt-20 w-full">
            <h1 className="text-4xl text-center">{Trans('intro_section.name')}</h1>
            <p className="max-w-4xl text-2xl text-center text-slate-400">{Trans('intro_section.desc')}</p>
            <a href="#WORK-Section" className="text-center w-64 py-6 font-bold text-lg bg-cyan-500 rounded-lg">{Trans('intro_section.projects')}</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full flex flex-col px-2 sm:px-6 lg:px-8 ">
        {/* motivation phrase */}
        <div className="max-w-2xl mx-auto">
          <div className="mt-12 flex flex-col relative">
            <FaQuoteLeft className="text-white w-9 h-9 absolute -top-5 left-8 bg-background p-2"/>
            <span className="text-white border border-gray px-10 py-6">{Trans('motivation.intro')}</span>
            <span className="text-white border border-gray px-5 py-5 self-end border-t-0">Peter Parker</span>
            <FaQuoteLeft className="text-white w-9 h-9 absolute top-14 right-10 bg-background p-2"/>
          </div>
        </div>
        {/* About me*/}
        <span id="ABOUT-Section" className="mb-20"></span>
        <section className="my-16" id="ABOUT">
          <TitleSection title="About-me"/>
          <section className="flex justify-between gap-20">
            <div className="w-1/2">
              <p className="text-gray tracking-widest text-lg leading-6">{Trans('about_section.desc')}</p>
              <p className="text-gray tracking-widest text-lg leading-6 my-6">{Trans('about_section.desc_2')}</p>
              <p className="text-gray tracking-widest text-lg leading-6">{Trans('about_section.desc_3')}</p>
            </div>
            <div className="w-1/2">
              <div className="grid grid-cols-3 gap-3">
                <div className="border border-gray h-min">
                  <h1 className="text-primary border-b border-gray p-2 font-bold">{Trans('languages')}</h1>
                  <p className="p-2 text-white">JavaScript</p>
                  <p className="p-2 text-white">Python</p>
                  <p className="p-2 text-white">PHP</p>
                </div>
                <div>
                  <div className="border border-gray h-min mb-3">
                    <h1 className="text-primary border-b border-gray p-2 font-bold">{Trans('databases')}</h1>
                    <p className="p-2 text-white">SQLite PostgreSQL</p>
                    <p className="p-2 text-white">Mongo MySQL</p>
                  </div>
                  <div className="border border-gray h-min mb-3">
                    <h1 className="text-primary border-b border-gray p-2 font-bold">{Trans('method_arch')}</h1>
                    <p className="p-2 text-white">Scrum DDD</p>
                    <p className="p-2 text-white">Microservice</p>
                    <p className="p-2 text-white">Monolith</p>
                    <p className="p-2 text-white">Clean Architecture</p>
                  </div>
                </div>
                <div>
                  <div className="border border-gray h-min mb-3">
                    <h1 className="text-primary border-b border-gray p-2 font-bold">Frameworks</h1>
                    <p className="p-2 text-white">Nestjs Laravel</p>
                    <p className="p-2 text-white">NodeJs Express </p>
                    <p className="p-2 text-white">NextJs React-Native</p>
                    <p className="p-2 text-white">Vuejs</p>
                  </div>
                  <div className="border border-gray h-min mb-3">
                    <h1 className="text-primary border-b border-gray p-2 font-bold">{Trans('tools')}</h1>
                    <p className="p-2 text-white">VSCode Git</p>
                    <p className="p-2 text-white">Cursor Ai</p>
                    <p className="p-2 text-white">ChatGPT</p>
                    <p className="p-2 text-white">Tailwind</p>
                    <p className="p-2 text-white">Bootstrap</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <span id="WORK-Section" className="mb-20"></span>
        {/* My projects */}
        <section className="my-16" id="WORK">
          <TitleSection title="Projects" link="https://github.com/Ruan-Rita?tab=repositories"/>
          <section className="mt-10 grid grid-cols-3 gap-8">
            <CardProject
              title="NestJs NextJs Docker Tailwind PostgresSQL"
              description={Trans('projects.ionrecording')}
              image={Url("/ion-recording.png")}
              name="Ion Recording"
              github="https://github.com/Ruan-Rita/live-ion-record"
            />
            <CardProject
              title="Laravel VueJs Tailwind SqlLite"
              description={Trans('projects.newmail')}
              image={Url("/newmail.png")}
              name="NewMail"
              github="https://github.com/Ruan-Rita/newmail"
            />
            <CardProject
              title="Laravel Blade Tailwind"
              description={Trans('projects.motivator')}
              image={Url("/motivator.png")}
              name="Motivator"
              github="https://github.com/Ruan-Rita/motivator"
            />
          </section>
        </section>
        {/* contacts*/}
        <section className="my-16" id="CONTACTS">
          <TitleSection title="Contacts"/>
          <section className="flex justify-between">
            <p className="w-1/2 text-gray tracking-widest leading-6 mb-6">{Trans('freela_oppor')}</p>
            <div className="border border-gray h-min">
              <h1 className="p-2 text-white">{Trans('message_me')}</h1>
              <span className="p-2 text-gray flex items-center">
                <a href="https://discord.com/users/ruan.ritah" target="_blank" class="hover:underline flex">
                  <FaDiscord className="mr-2 text-gray w-8 h-8"/>
                  ruan.ritah
                </a>
              </span>
              <span className="p-2 text-gray flex items-center">
                <a href="mailto:ruan.ritah@gamil.com" class="hover:underline flex">
                  <MdOutlineEmail width={32} className="mr-2 w-8 h-8 text-gray"/>
                  ruan.ritah@gamil.com
                </a>
              </span>
            </div>
          </section>
        </section>
      </div>

      <Footer />
    </main>
  );
}
