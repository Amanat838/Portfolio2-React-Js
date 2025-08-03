import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section id="project" className="lg:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/Amanat838/Realtime-Code-Editor-using-React-Js-and-Socket.IO"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={"/assets/images/proj1.png"}
                alt="codeImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Realtime Code Editor</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Built with CodeMirror, helps in writing code in collaboration
              being both parties able to write new code or edit existing code.
              Very helpful for learning purposes.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Reactjs</li>
              <li>Javascript</li>
              <li>Socket.IO</li>
              <li>Node Js</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Amanat838/Realtime-Code-Editor-using-React-Js-and-Socket.IO"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/Amanat838/Doctor-Appointment-Web-App"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={"/assets/images/proj2.png"}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Doctor Appointment Web App</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              Enabling patients to seamlessly book, reschedule, and manage
              medical appointments online. The platform features doctor
              profiles, real-time availability, secure patient data handling,
              and automated reminders to improve healthcare accessibility and
              efficiency.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React js</li>
              <li>JavaScript</li>
              <li>Node Js</li>
              <li>React Hook Form</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Amanat838/Doctor-Appointment-Web-App"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/Amanat838/ChatterBox-Realtime-Voice-Chat"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={"/assets/images/proj4.png"}
                alt="noorShop"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                Realtime Voice Chat (Under Development)
              </h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              Allowing users to join public or private rooms, communicate via
              live audio, and interact as speakers or listeners. Implemented
              low-latency audio streaming, user authentication, and scalable
              room management for a seamless group conversation experience.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React js</li>
              <li>JavaScript</li>
              <li>Node Js</li>
              <li>JWT-Auth</li>
              <li>Web Sockets</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Amanat838/ChatterBox-Realtime-Voice-Chat"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
