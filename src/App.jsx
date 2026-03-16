import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import skills_data from "./data/skills";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div id="" className="flex flex-col items-center md:mx-[100px] mx-[30px] h-screen pt-[60px]">
        <h3 className="text-3xl font-bold my-6 text-white">Hi There</h3>
      </div>
      <div id="about" className="flex flex-col items-center md:mx-[100px] mx-[30px] h-screen pt-[60px]">
        <h3 className="text-3xl font-bold my-6 text-white">About Me</h3>
      </div>
      <div id="projects" className="flex flex-col items-center md:mx-[100px] mx-[30px] h-screen pt-[60px]">
        <h3 className="text-3xl font-bold my-6 text-white">Projects</h3>
      </div>
      <div id="skills" className="flex flex-col items-center md:mx-[100px] mx-[30px] pt-[60px]">
        <h3 className="text-3xl font-bold my-6 text-white">Skills</h3>
        <div className="flex flex-wrap gap-[10px] items-center justify-center">
          {skills_data.map((skill, index) => {
            return <Skills key={index} name={skill.name} logo={skill.svg}></Skills>;
          })}
        </div>
      </div>
      <div id="education" className="flex flex-col items-center md:mx-[100px] mx-[30px] h-screen pt-[60px]">
        <h3 className="text-3xl font-bold my-6 text-white">Education</h3>
      </div>

      <div id="contact" className="flex flex-col items-center md:mx-[100px] mx-[30px] h-screen pt-[60px]  ">
        <h3 className="text-3xl font-bold my-6 text-white">Connect with me!</h3>
      </div>
    </>
  );
};

export default App;
