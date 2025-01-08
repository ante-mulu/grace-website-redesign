import { ArrowPathIcon, CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { BiCode } from "react-icons/bi";
import { FaTripadvisor } from "react-icons/fa";

const features = [
  {
    name: "ERP implementation",
    description:
      "Implementation of the ERP system, including project planning, system configuration, data migration, and user training.",
    icon: BiCode,
  },
  {
    name: "SaaS service",
    description:
      "Odoo Saas is known as a software distribution model in which a third-party provider hosts applications and provides access to users via the Internet. ",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Odoo Training Programs",
    description:
      "Offer ongoing technical support and maintenance services to address any issues and provide software updates.",
    icon: ArrowPathIcon,
  },
  {
    name: "Consulting and Advisory Services",
    description:
      "Provide consulting services to guide businesses in selecting the right ERP solution and assessing their processes.",
    icon: FaTripadvisor,
  },
];

function Feature() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Company Overview
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to know about GraceERP Consultancy
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At GraceERP Consultancy PLC, you’ll collaborate with a team that’s
            committed to delivering tailored ERP solutions that empower
            businesses to thrive.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Feature;
