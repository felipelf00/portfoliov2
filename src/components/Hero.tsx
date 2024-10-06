import ResponsiveHeading from "./ResponsiveHeading";
import Portrait from "../assets/portrait.jpeg";
import ScrambledText from "./ScrambledText";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={`p-5 max-h-screen max-w-[120vh] mx-auto ${className}`}>
      <div className="flex flex-col items-start">
        <ResponsiveHeading width="75%">
          {/* <ScrambledText text={"Felipe"} /> */}
          Felipe
        </ResponsiveHeading>
        <ResponsiveHeading width="100%">Figueiredo</ResponsiveHeading>
      </div>
      <div className="flex justify-between items-stretch">
        <div className="w-1/2 flex items-center">
          <img
            src={Portrait}
            alt="Portrait"
            className="h-[75%] rounded-full mx-auto shadow-md"
          />
        </div>
        <div className="flex flex-col items-end w-1/2 justify-center">
          <ResponsiveHeading>Web</ResponsiveHeading>
          <ResponsiveHeading>
            <ScrambledText text={"Developer"} />
          </ResponsiveHeading>
        </div>
      </div>
    </section>
  );
}
