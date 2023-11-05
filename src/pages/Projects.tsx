import { useState } from "react";

const projects = [
  {
    backgroundURL: "/pokebowl.jpg",
    id: 0,
    title: "Insulin Resistancy Project",
    technologies: [],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    backgroundURL: "/csuszka.png",
    id: 1,
    title: "My Portfolio",
    technologies: [
      { id: 0, name: "React", icon: "/react.svg", url: "https://react.dev/" },
      { id: 0, name: "React", icon: "/vite.svg", url: "https://vitejs.dev/" },
    ],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
];

export default function About() {
  const [displayedProject, setDisplayedProject] = useState(projects[0]);

  return (
    <main className="flex h-full">
      <nav className="flex flex-col">
        {projects.map((project, index) => {
          return (
            <div
              className={`p-8 flex justify-center max-w-[512px] w-full ${
                project.id === displayedProject.id ? "bg-stone-50" : ""
              }`}
              onClick={() => {
                setDisplayedProject({ ...project });
              }}
            >
              <div
                key={index}
                className={`bg-[url('${project.backgroundURL}')] bg-cover w-[170px] h-[170px] rounded-full`}
              ></div>
            </div>
          );
        })}
      </nav>
      <section className="h-full bg-stone-50">
        <h1 className={`m-8 font-[500] text-[32px] text-[#0C381F] opacity-75`}>
          {displayedProject.title}
        </h1>
        <div className="flex justify-start">
          {displayedProject.technologies.map((technology, index) => {
            return (
              <a key={index} href={technology.url}>
                <img src={technology.icon} alt={technology.name}></img>
              </a>
            );
          })}
        </div>
        <p>{displayedProject.description}</p>
      </section>
    </main>
  );
}
