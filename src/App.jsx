import Skills from "./components/Skills";
import skills_data from "./data/skills";

const App = () => {
  return (
    <>
      <div id="skills" className="flex flex-col items-center md:mx-[100px] mx-[30px]">
        <h3 className="text-3xl font-bold my-6 text-white">Skills</h3>
        <div className="flex flex-wrap gap-[10px] items-center justify-center">
          {skills_data.map((skill, index) => {
            return <Skills key={index} name={skill.name} logo={skill.svg}></Skills>;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
