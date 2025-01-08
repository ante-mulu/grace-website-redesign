import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Judith Black",
    role: "CEO of Workcation",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    companyLogo:
      "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
  },
  {
    name: "Michael Johnson",
    role: "CTO of TechCorp",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.",
    image:
      "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?crop=faces&fit=crop&w=256&h=256&q=80",
    companyLogo:
      "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
  },
  {
    name: "Sara Williams",
    role: "Product Manager at InnovateX",
    message:
      "Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=faces&fit=crop&w=256&h=256&q=80",
    companyLogo:
      "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <img
                alt=""
                src={testimonial.companyLogo}
                className="mx-auto h-12"
              />
              <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                  <p>{`“${testimonial.message}”`}</p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="mx-auto h-10 w-10 rounded-full"
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <svg
                      width={3}
                      height={3}
                      viewBox="0 0 2 2"
                      aria-hidden="true"
                      className="fill-gray-900"
                    >
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

function CustomPrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="slick-prev custom-arrow left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-50"
      onClick={onClick}
    >
      ←
    </button>
  );
}

function CustomNextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="slick-next custom-arrow right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-50"
      onClick={onClick}
    >
      →
    </button>
  );
}

export default Testimonials;
