import { Icons } from "../../../Orbit/icons";
import { OrbitingCirclesDemo } from "../../../Orbit/magic";

const WebDevelopmentProcess = () => {
  const innerIcons = [Icons.whatsapp, Icons.notion];
  console.log(innerIcons);
  const outerIcons = [Icons.googleDrive, Icons.gitHub];
  return (
    <section className="py-16 px-6 md:px-16 mb-10 bg-white text-left md:flex">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-14 mb-20">
          <span className="text-[#0B5EFF]">
            Leverage our proven AI/ML development process{" "}
          </span>
          to ensure the success of your project with innovative, data-driven
          solutions.
        </h2>
        {/* Description */}
        <p className="text-lg text-gray-700 w-3/4">
          We understand that the most intricate AI/ML projects require
          meticulous attention to every detail throughout the development
          process. With our expertise, we ensure a smooth and efficient AI/ML
          solution development experience.
        </p>
      </div>
      <div>
        <OrbitingCirclesDemo innerIcons={innerIcons} outerIcons={outerIcons} />
      </div>
    </section>
  );
};

export default WebDevelopmentProcess;
