const Skills = ({ name, logo }) => {
  return (
    <>
      <div className="border-2 solid border-white/10 rounded-2xl p-[60px] py-[10px] w-[100px] flex flex-col items-center bg-white/5 hover:bg-white/10 transition ease-in-out duration-200 gap-[10px]">
        <div className={`w-[60px] ${name === "Flask" ? "invert" : ""}`}>{logo}</div>
        <p className=" text-white ">{name}</p>
      </div>
    </>
  );
};

export default Skills;
