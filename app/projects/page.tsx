const projects = [
  {
    id: 1,
    name: "Iphone Clone",
    href: "#",
    description: "lorum",
    imgSrc: "...",
    imgAtl: "",
  },
  {
    id: 2,
    name: "HiLink Travel",
    href: "#",
    description: "lorum",
    imgSrc: "...",
    imgAtl: "",
  },
  {
    id: 3,
    name: "Admin Dashboard",
    href: "#",
    description: "lorum",
    imgSrc: "...",
    imgAtl: "",
  },
  {
    id: 4,
    name: "Banking Home Page",
    href: "#",
    description: "lorum",
    imgSrc: "...",
    imgAtl: "",
  },
];

export default function Projects() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Projects</h1>
      <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-10">
        {projects.map((project) => (
          <div key={project.id} className="group relative">
            <div className="w-full overflow-hidden rounded-lg group-hover:opacity-75">
              <img
                src={project.imgSrc}
                alt={project.imgAtl}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="font-medium mb-1 tracking-tighter">
                  <a href={project.href}>{project.name}</a>
                </h3>
                <p className="mt-3 text-sm">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
