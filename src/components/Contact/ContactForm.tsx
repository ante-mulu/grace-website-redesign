import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Get in touch</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p className="text-gray-600">
            We're here to help. Contact us for any inquiries or support.
          </p>

          {/* Contact Details */}
          <div className="space-y-2">
            <div className="flex items-center">
              <FaLocationDot className="w-5 h-5 mr-2 text-gray-600" />
              <span className="ml-2">
                Address: G&B building 2nd floor office number 203, 200m from
                Century mall to Gurd Shola
              </span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="w-5 h-5 mr-2 text-gray-600" />
              <span className="ml-2"> +251-991133434 / +251-925210595</span>
            </div>
            <div className="flex items-center">
              <MdEmail className="w-5 h-5 mr-2 text-gray-600" />
              <span className="ml-2">contact@grace-erp-consultancy.com</span>
            </div>
          </div>

          {/* Embedded Google Maps iframe */}
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.485774440788!2d38.81324247225163!3d9.01937289104155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85aadb1fcbb5%3A0x6cb53978a44a801a!2sGraceERP%20Consultancy!5e0!3m2!1sen!2set!4v1726088524015!5m2!1sen!2set"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xkgwavwv"
          method="POST"
          className="space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
                placeholder="First Name"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
                placeholder="Last Name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
              placeholder="e.g,untitled@gmail.com"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
              placeholder="Phone Number"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
              minLength={20}
              placeholder="Write your message here"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
