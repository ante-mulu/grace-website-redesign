import { useSpring, animated } from "@react-spring/web";

const ERPImplementation = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header with fade-in effect */}
        <animated.div style={fadeIn}>
          <h2 className="text-5xl font-bold text-center mb-10 text-indigo-600">
            ERP Implementation: Streamlining Business Operations
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            A comprehensive guide to ERP system implementation covering core
            business processes and enabling effective resource planning and
            management.
          </p>
        </animated.div>

        {/* Implementation Overview Section */}
        <div className="mb-16">
          <h3 className="text-4xl font-semibold mb-6 text-indigo-600">
            How ERP Implementation Works
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            ERP implementation is a multi-phase process that involves analyzing
            business needs, configuring software modules, integrating existing
            systems, and training users. The end goal is to create a seamless,
            integrated system that improves efficiency, data visibility, and
            decision-making across the organization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-indigo-600">
                Phase 1: Discovery & Planning
              </h4>
              <p className="text-gray-600 leading-relaxed">
                In the discovery phase, we identify key business processes and
                challenges. This stage involves defining the project's scope,
                budget, timeline, and selecting the right ERP system modules
                that meet organizational needs.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-indigo-600">
                Phase 2: Design & Configuration
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Once we understand the requirements, we configure the ERP
                modules like Finance, CRM, and SCM. Custom workflows, reports,
                and dashboards are tailored to ensure smooth integration with
                the existing business processes.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-indigo-600">
                Phase 3: Training & Deployment
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We train staff on how to use the ERP system efficiently. After
                user acceptance testing (UAT), the system goes live, with
                continuous support provided to address any post-deployment
                challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Finance & Accounting Management Module */}
        <div className="mb-16">
          <h3 className="text-4xl font-semibold mb-6 text-indigo-600">
            Finance & Accounting Management
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            The finance and accounting module is the backbone of any ERP system.
            Odoo’s finance module manages all financial transactions, from
            general ledger to tax management, budgeting, and financial
            reporting. It integrates seamlessly with other business processes,
            such as inventory and sales, providing real-time data and accurate
            financial reports.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>General Ledger and Chart of Accounts setup</li>
            <li>
              Accounts Receivable (AR) and Accounts Payable (AP) management
            </li>
            <li>Multi-currency support for global operations</li>
            <li>Integration with sales, purchase, and expense management</li>
            <li>Advanced financial reporting and budget control</li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-lg">
            With automation features, Odoo reduces manual entries and errors,
            ensuring that businesses can focus on strategic financial planning
            rather than tedious administrative tasks.
          </p>
        </div>

        {/* Human Resource Management Module */}
        <div className="mb-16">
          <h3 className="text-4xl font-semibold mb-6 text-indigo-600">
            Human Resource Management (HRM)
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            The HRM module helps organizations manage employee data, payroll,
            attendance, recruitment, and more. By centralizing employee
            information and streamlining processes, Odoo’s HRM module ensures
            efficient human resource management and compliance with local labor
            laws.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Employee master data management</li>
            <li>
              Time-off requests, attendance tracking, and payroll integration
            </li>
            <li>Recruitment and onboarding workflows</li>
            <li>Performance appraisals and competency tracking</li>
            <li>Seamless integration with payroll and finance modules</li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-lg">
            The HRM module integrates with other ERP components, making it easy
            to align employee performance with business goals, all while
            simplifying payroll and compliance reporting.
          </p>
        </div>

        {/* Supply Chain Management (SCM) Module */}
        <div className="mb-16">
          <h3 className="text-4xl font-semibold mb-6 text-indigo-600">
            Supply Chain Management (SCM)
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            The SCM module manages the flow of goods and services from
            procurement to inventory management. It ensures timely product
            delivery, optimizes inventory levels, and automates procurement
            processes, enabling businesses to improve supplier relationships and
            reduce operational costs.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Procurement and supplier management</li>
            <li>Inventory management and stock automation</li>
            <li>Warehouse management and transportation logistics</li>
            <li>Demand forecasting and trend analysis</li>
            <li>Returns processing and warranty management</li>
          </ul>
        </div>

        {/* Customer Relationship Management (CRM) Module */}
        <div className="mb-16">
          <h3 className="text-4xl font-semibold mb-6 text-indigo-600">
            Customer Relationship Management (CRM)
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            The CRM module centralizes customer data, tracks interactions, and
            helps manage sales pipelines. Integrated marketing automation and
            feedback tools enable businesses to enhance customer engagement,
            drive conversions, and improve customer satisfaction.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Lead and opportunity management</li>
            <li>Customer communication and feedback tracking</li>
            <li>Sales pipeline management and reporting</li>
            <li>Automated marketing campaigns</li>
            <li>Integration with sales, service, and support teams</li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-lg">
            With advanced analytics and reporting, businesses can gain insights
            into customer behavior, sales trends, and performance, helping to
            create stronger relationships with clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ERPImplementation;
