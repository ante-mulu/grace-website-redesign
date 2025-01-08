import React from "react";
import { Link } from "react-router-dom";
interface ExpertiseCardProps {
  title: string;
  description: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  title,
  description,
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface ExpertiseArea {
  title: string;
  description: string;
}

const Expertise: React.FC = () => {
  const expertiseAreas: ExpertiseArea[] = [
    {
      title: "Custom Modules Development",
      description:
        "We specialize in creating tailored Odoo modules to meet your specific business needs, ensuring seamless integration and enhanced functionality.",
    },
    {
      title: "Thought Leadership",
      description:
        "Our team actively contributes to the ERP community, sharing insights and innovative solutions to drive the industry forward.",
    },
    {
      title: "Odoo Localization",
      description:
        "We adapt Odoo to comply with local regulations, languages, and business practices, ensuring a perfect fit for your region.",
    },
    {
      title: "Corporate Training",
      description:
        "We offer comprehensive training programs for companies, empowering your team to maximize the potential of your ERP system.",
    },
    {
      title: "ERP Implementation Consulting",
      description:
        "Our experienced consultants guide companies through the entire ERP implementation process, ensuring smooth transitions and optimal results.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Our Expertise
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          With years of experience in the ERP industry, we've honed our skills
          to provide top-notch solutions and services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard
              key={index}
              title={area.title}
              description={area.description}
            />
          ))}
        </div>

        {/* Download Button Section */}
        <div className="text-center mt-12">
          <Link
            to="/erp-implementation"
            className="inline-block bg-orange-600 text-white py-3 px-6 rounded-md font-semibold transition-all duration-300 shadow-lg hover:scale-105 transition-transform duration-500"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
