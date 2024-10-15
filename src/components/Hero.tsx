import ResponsiveHeading from "./ResponsiveHeading";
import Portrait from "../assets/portrait.jpeg";
// import Portrait from "../assets/portrait-transparent.png";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section
      className={`p-5 md:px-0 min-h-screenYY max-h-screenYY max-w-[120vh]YY max-w-[1000px]YY mx-auto relative ${className}`}
    >
      <div
        className="flex flex-col items-start mb-4 md:mb-0"
        data-aos="zoom-out-down"
      >
        <ResponsiveHeading width="75%">Felipe</ResponsiveHeading>
        <ResponsiveHeading width="100%">Figueiredo</ResponsiveHeading>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-stretch">
        <div className="md:w-1/2 flex items-center" data-aos="flip-left">
          <img
            src={Portrait}
            alt="Portrait"
            className="max-md:max-h-72 md:h-[75%] rounded-full mx-auto shadow-mdYY "
          />
        </div>
        <div
          className="flex flex-col items-end md:w-1/2 justify-center"
          data-aos="zoom-out-up"
        >
          <ResponsiveHeading>Web</ResponsiveHeading>
          <ResponsiveHeading>Developer</ResponsiveHeading>
        </div>
      </div>
    </section>
  );
}
