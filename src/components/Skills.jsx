const Skills = ({ name, logo }) => {
  return (
    <>
      <div className="card-base p-15 py-2 w-25 items-center gap-2.5">
        <div className={`w-15 ${name === "Flask" ? "invert" : ""}`}>{logo}</div>
        <p className=" text-white ">{name}</p>
      </div>
    </>
  );
};

export default Skills;
