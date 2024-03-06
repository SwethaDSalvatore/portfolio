import React from "react";

const Skills = () => {

  const skills = [
    { name: "HTML", percentage: 85 },
    { name: "CSS", percentage: 85 },
    { name: "TailwindCSS", percentage: 90 },
    { name: "Bootstrap", percentage: 80 },
    { name: "Javascript", percentage: 70 },
    { name: "React JS", percentage: 60 },
    { name: "Firebase", percentage: 70 },
    { name: "Node JS", percentage: 50 },
    { name: "Express JS", percentage: 50 },
    { name: "Mongodb atlas", percentage: 50 },
    { name: "Canva", percentage: 90 },
    { name: "Figma", percentage: 80 },
    { name: "MS Office", percentage: 60 },
    { name: "Tally ERP", percentage: 50 },
    { name: "Supply chain - MDM (material master data management)", percentage: 70 },
    { name: "Commercial Identity - MDG (master data governance)", percentage: 70 },
  ];

  return (
    <div className="bg-slate-950 md:pb-20 pt-10 pb-10">
      <section className="max-w-6xl mx-auto p-4">
        <h2 className="text-center text-xl font-semibold text-slate-400 p-5">
          Get to know about my <span className="text-rose-400">Skills</span>
        </h2>
        <div className="md:grid md:grid-cols-2 md:gap-x-10">
          {skills.map(({ name, percentage }, index) => (
            <div className="p-4" key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-slate-400">{name}</span>
                <span className="text-sm font-medium text-slate-400">{percentage}%</span>
              </div>
              <div className="rounded-full h-2.5 bg-gray-700">
                <div
                  className="bg-rose-400 h-2.5 rounded-full"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
