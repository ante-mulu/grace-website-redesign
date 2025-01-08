import { CloudArrowUpIcon } from "@heroicons/react/20/solid";
import { IoIosPeople } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import logo from "../../assets/logo-01.png";

function Content() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Company Description
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                GraceERP Consultancy
              </h1>
              <p className="mt-6 leading-7 text-gray-700 text-justify">
                GraceERP Consultancy is a registered Private Limited Company
                headquartered in Addis Ababa, Ethiopia. We pride ourselves on
                being a trusted local partner for businesses seeking to optimize
                their operations through the implementation of robust ERP
                systems. Our team consists of highly skilled professionals with
                extensive experience in ERP system customization,
                implementation, integration with third party software's, and
                training.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Company Logo "
            src={logo}
            className="w-full h-full object-cover max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-justify">
                At GraceERP Consultancy PLC, we understand that every business
                is unique, with specific goals, processes, and challenges.
                That's why we take a personalized approach to our services,
                working closely with clients to analyze their business
                processes, identify gaps, and customize the ERP system to meet
                their specific requirements. Our deep expertise in ERP
                solutions, combined with our in-depth knowledge of various
                industries, allows us to deliver tailored solutions that drive
                efficiency, productivity, and growth. We are committed to
                delivering high-quality services and building long-lasting
                relationships with our clients.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span className="text-justify">
                    <strong className="font-semibold text-gray-900">
                      Leading the Way with Innovative ERP Solutions.
                    </strong>{" "}
                    As a leading ERP consultancy in Ethiopia, we stay abreast of
                    the latest industry trends, best practices, and
                    technological advancements. This allows us to provide our
                    clients with innovative solutions that help them stay ahead
                    of the competition. Additionally, we are constantly
                    investing in the professional development of our team
                    through training and certifications to ensure that we are
                    equipped with the knowledge and skills necessary to deliver
                    exceptional services.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <IoIosPeople
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Our team of experts
                    </strong>{" "}
                    is ready to assess your unique business needs and recommend
                    tailored ERP solutions that will help you manage everything
                    from finance and inventory to human resources and customer
                    relationships. Whether you're a growing startup or an
                    established enterprise, GraceERP Consultancy will deliver
                    the right ERP system to help you thrive.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BiSupport
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Support.
                    </strong>{" "}
                    <br /> Effective support and follow up.
                  </span>
                </li>
              </ul>
              <p className="mt-8 text-justify">
                Our goal is to be the go-to ERP consultancy in Ethiopia, known
                for our expertise, reliability, and customer-centric approach.
                We are passionate about helping businesses unlock their full
                potential by leveraging the power of ERP systems. By partnering
                with GraceERP Consultancy, businesses can expect a dedicated and
                collaborative approach, customized solutions, and ongoing
                support to help them navigate the ever-evolving business
                landscape and achieve sustainable growth.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                No ERP System? No problem – We're Here to Help!
              </h2>
              <p className="mt-6 justify-center">
                At GraceERP Consultancy PLC, we understand that navigating the
                complex world of ERP systems can be overwhelming, especially if
                your business is operating without one. But don't worry—no ERP?
                No problem! We're here to guide you every step of the way,
                helping you streamline your processes, improve efficiency, and
                set your business up for long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
