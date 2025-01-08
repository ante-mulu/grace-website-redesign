import React from "react";

// Define a type for the project object
interface Project {
  name: string;
  goal: string;
  description: string;
  contactPerson: {
    name: string;
    role: string;
  };
  logo: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 flex flex-col justify-between h-full">
      <img
        src={project.logo}
        alt={`${project.name} logo`}
        className="w-20 h-20 object-contain mb-4 mx-auto" // Styling for the logo
      />
      <h3 className="text-xl font-bold text-indigo-600 mb-4">{project.name}</h3>
      <p className="text-gray-700 mb-4">
        <span className="font-bold">Project Goal: </span>
        {project.goal}
      </p>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <p className="text-gray-700">
        <span className="font-bold">Contact Person: </span>
        {project.contactPerson.name} – {project.contactPerson.role}
      </p>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      name: "Teleport Technologies PLC",
      goal: "Streamlining Operations for Telecom product purchase and distribution",
      description:
        "GraceERP Consultancy played a great role in delivering Odoo ERP system (Version 15) for Teleport Technologies. The system brought significant cost savings, improved efficiency, centralized employee management (HRMS), and enhanced customer service.",
      contactPerson: {
        name: "Yonas Bogale",
        role: "Managing Director",
      },
      logo: "/assets/telePort.png",
    },
    {
      name: "Tamra for Social Development Organization (TSD)",
      goal: "Streamlining centralized Human Resources management and projects management platform",
      description:
        "GraceERP Consultancy delivered Odoo ERP system (Version 16) for TSD, empowering their operations through HRMS and project management modules. The implementation led to increased efficiency, improved data management, and enhanced employee engagement.",
      contactPerson: {
        name: "Biruk Yergalem",
        role: "Executive Director",
      },
      logo: "/assets/TAMRA.png",
    },
    {
      name: "Royal Family Group",
      goal: "Enhancing Whole Sales Management system",
      description:
        "GraceERP Consultancy delivered Odoo ERP system (Version 16) for Royal Family Group, revolutionizing their sales and purchase processes. This implementation improved transparency, efficiency, and data-driven decision-making, boosting sales team productivity.",
      contactPerson: {
        name: "Ahmed Abduletif",
        role: "CEO",
      },
      logo: "/assets/royal.png",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <p className="text-gray-700 font-light max-w-3xl mx-auto leading-relaxed">
            Our company boasts a proven track record of successful ERP
            implementations, having helped numerous organizations navigate the
            complexities of streamlining their business processes. We bring
            years of expertise in deploying and customizing ERP solutions across
            diverse industries, resulting in tangible improvements in
            operational efficiency, cost reduction, and data-driven
            decision-making. Our deep understanding of ERP best practices,
            coupled with our collaborative approach, ensures seamless
            integration and user adoption, ultimately empowering our clients to
            achieve long-term business success.
          </p>
          <h2 className="mt-6 text-2xl md:text-4xl font-bold text-center">
            Below are some of our successful ERP system implementations:
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
