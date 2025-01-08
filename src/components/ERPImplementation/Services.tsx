import { useSpring, animated } from "@react-spring/web";

const Services = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const services = [
    {
      title: "Custom Modules Development",
      description:
        "We specialize in developing custom Odoo modules to meet the unique requirements of your business. Our team ensures the creation of modules that enhance functionality and integrate seamlessly with your existing systems. Whether you need a specialized finance module, CRM, or supply chain management, our tailored solutions help optimize business processes and improve operational efficiency. With expertise in Odoo’s modular architecture, we ensure that your system grows with your business, offering scalability and adaptability.",
    },
    {
      title: "Thought Leadership",
      description:
        "As active contributors to the ERP community, we continuously share innovative solutions, case studies, and best practices. Our thought leadership reflects our deep understanding of ERP systems, particularly Odoo. We regularly participate in forums, write insightful articles, and engage in discussions about the future of ERP technologies, helping to shape industry trends. By staying ahead of the curve, we not only contribute to the community but also bring the latest advancements to our clients, ensuring they benefit from cutting-edge solutions.",
    },
    {
      title: "Odoo Localization",
      description:
        "Our Odoo localization services ensure that your ERP system complies with local laws, regulations, and business practices, no matter where you are. We specialize in adapting Odoo to fit the specific financial, tax, and language requirements of different regions. By offering localized modules for accounting, payroll, and regulatory compliance, we make sure that your business operates smoothly across multiple countries, with support for multi-currency and multi-language environments. Our expertise guarantees that Odoo works in harmony with your regional operations.",
    },
    {
      title: "Corporate Training",
      description:
        "Our corporate training programs empower your team to fully leverage the capabilities of Odoo. We offer comprehensive, hands-on training that covers all aspects of the ERP system, including module usage, customization, and workflow optimization. Tailored to your business needs, our training sessions ensure that employees at all levels, from administrators to end-users, are equipped with the knowledge to use Odoo effectively. With our training, your team can increase productivity, reduce errors, and ensure a smooth transition to new systems.",
    },
    {
      title: "ERP Implementation Consulting",
      description:
        "We guide companies through every phase of the ERP implementation process, from initial discovery and planning to final deployment. Our experienced consultants perform in-depth business analysis to ensure that the Odoo ERP system is aligned with your organizational goals. We handle the customization, integration, and testing phases to ensure a smooth implementation. Post-deployment, we offer continuous support to optimize system performance, ensuring that your ERP system delivers maximum value and operational efficiency.",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <animated.div style={fadeIn}>
          <h2 className="text-5xl font-bold text-center mb-10 text-indigo-600">
            Our Expertise
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            Discover our range of services designed to help your business grow
            with Odoo.
          </p>
        </animated.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
