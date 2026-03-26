import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import profile from "./assets/profile.png";
import skills_data from "./data/skills";
import projects_data from "./data/projects";
import logo from "./assets/umd-logo.png";

const App = () => {
  // let getTemporary = (x, y) => {
  //   return (
  //     <svg
  //       version="1.0"
  //       id="Layer_1"
  //       xmlns="http://www.w3.org/2000/svg"
  //       xmlnsXlink="http://www.w3.org/1999/xlink"
  //       viewBox="0 0 64 64"
  //       width={x} // Added size
  //       height={y} // Added size
  //       enableBackground="new 0 0 64 64"
  //       xmlSpace="preserve"
  //       fill="#000000"
  //     >
  //       <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
  //       <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
  //       <g id="SVGRepo_iconCarrier">
  //         <g>
  //           <path
  //             fill="#FFFFFF"
  //             d="M60,0H4C1.789,0,0,1.789,0,4v56c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V4C64,1.789,62.211,0,60,0z M8,8h48v32.688l-9.113-9.113c-1.562-1.559-4.094-1.559-5.656,0L16.805,56H8V8z"
  //           ></path>
  //           <circle fill="#FFFFFF" cx="24" cy="24" r="8"></circle>
  //         </g>
  //       </g>
  //     </svg>
  //   );
  // };
  return (
    <>
      <Navbar></Navbar>
      <div id="projects" className="flex flex-col items-center mx-10 md:mx-20 lg:mx-40 pt-20 ">
        <h3 className="text-3xl font-bold my-6 text-white">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {projects_data.map((project, index) => {
            return <Projects key={index} name={project.name} stack={project.stack} description={project.description}></Projects>;
          })}
          <div className="card-base items-center justify-center sm:py-5 sm:px-10 py-2.5 px-5">
            <svg width="100px" height="100px" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z" />
            </svg>
            <p>Something's cooking...</p>
          </div>
        </div>
      </div>
      <div id="skills" className="flex flex-col items-center mx-10 md:mx-20 lg:mx-40 pt-20">
        <h3 className="text-3xl font-bold my-6 text-white">Skills</h3>
        <div className="flex flex-wrap gap-3 items-center justify-center">
          {skills_data.map((skill, index) => {
            return <Skills key={index} name={skill.name} logo={skill.svg}></Skills>;
          })}
        </div>
      </div>

      <div id="education" className="flex flex-col items-center mx-10 md:mx-20 lg:mx-40 pt-20">
        <h3 className="text-3xl font-bold my-6 text-white">Education</h3>
        <div className="card-base flex items-center sm:py-5 sm:px-10 py-2.5 px-5 w-auto gap-2.5 text-white">
          <h2 className="text-xl font-bold text-white">University of Maryland, College Park</h2>
          <img src={logo} className="w-20 " alt="" />
          <p>Bachelor of Science, Computer Science</p>
          <div className="flex flex-col items-center text-neutral-300 text-[0.9rem]">
            <p>GPA: 3.343</p>
            <p>Expected Graduation: May 2028</p>
          </div>
          <h2 className="text-[1rem] font-bold text-white">Relavent Coursework</h2>
          <div className="flex flex-col items-center text-neutral-300 text-[0.9rem]">
            <p>CMSC216: Computer Systems</p>
            <p>CMSC250: Discrete Structures</p>
            <p>CMSC132: Object Oriented Progreamming II</p>
          </div>
        </div>
      </div>

      {/* <div id="education" className="flex flex-col items-center md:mx-[100px] mx-[30px] h-screen pt-[60px]">
        <h3 className="text-3xl font-bold my-6 text-white">Education</h3>
      </div>

      <div id="contact" className="flex flex-col items-center md:mx-[100px] h-screen md:justify-center pt-[60px] ">
        <h3 className="text-3xl font-bold my-6 text-white">Connect with me!</h3>
      </div> */}
    </>
  );
};

export default App;
