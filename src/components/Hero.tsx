//  <img
//             className="w-48 rounded-full"
//             src={Portrait}
//             alt="portrait photo"
//           />

import ResponsiveHeading from "./ResponsiveHeading";
import Portrait from "../assets/portrait.jpeg";

function Hero() {
  return (
    <div className="p-5 max-h-screen max-w-[120vh] mx-auto">
      <div className="flex flex-col items-start">
        <ResponsiveHeading width="75%">Felipe</ResponsiveHeading>
        <ResponsiveHeading width="100%">Figueiredo</ResponsiveHeading>
      </div>
      <div className="flex justify-between items-stretch">
        <div className="w-1/2 flex items-center">
          <img
            src={Portrait}
            alt="Portrait"
            className="h-[75%] rounded-full mx-auto shadow-2xl"
          />
        </div>
        <div className="flex flex-col items-end w-1/2 justify-center">
          <ResponsiveHeading>Web</ResponsiveHeading>
          <ResponsiveHeading>Developer</ResponsiveHeading>
        </div>
      </div>
    </div>
  );
}

export default Hero;
