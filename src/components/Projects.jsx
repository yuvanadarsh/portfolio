const Projects = ({ name, stack, description }) => {
  return (
    <>
      <div className="card-base sm:py-5 sm:px-10 py-2.5 px-5 w-auto gap-2.5 text-white">
        <p className="flex justify-center text-xl font-bold">{name}</p>
        <div className="flex flex-wrap gap-1">
          {stack.map((item) => {
            return <p className="bg-white p-1 px-3 text-black text-[10px] rounded-4xl">{item}</p>;
          })}
        </div>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Projects;
