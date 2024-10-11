import ResponsiveHeading from "./ResponsiveHeading";
import ScrambledText from "./ScrambledText";

interface BioProps {
  className?: string;
}

export default function Bio({ className }: BioProps) {
  return (
    <section className={`${className} flex gap-16`}>
      <div className="w-2/3 flex flex-col gap-8">
        <ResponsiveHeading>"Who?"</ResponsiveHeading>
        <div className="text-xl">
          <p>
            I am a Brazilian Web Developer currently working at{" "}
            <a
              className="font-semibold text-primary"
              href="https://buzzvel.com/"
              target="_blank"
            >
              Buzzvel
            </a>
            , where I do Front End Development.
          </p>
          <br />
          <p>
            Getting into Web Development is the result of a career transition.
            Despite having a background in Mechanical Engineering, I was the
            co-owner of a small artisan bakery until the first half of 2023. I
            have been learning Full Stack JavaScript at{" "}
            <a
              className="font-semibold text-primary"
              href="https://www.theodinproject.com/"
              target="_blank"
            >
              The Odin Project
            </a>{" "}
            since the end of 2022, and a lot of the projects that I list here
            were developed as part of the course.
          </p>
        </div>
      </div>
      <div className="w-0 border-2 border-neutral-600 rounded"></div>
      <div className="w-1/3 flex justify-center items-center">
        <ul className="flex flex-col justify-around h-full">
          <li>
            <a className="text-6xl font-bold btn-secondary px-4" href="#">
              <ScrambledText text={"Github"} />
            </a>
          </li>
          <li>
            <a className="text-6xl font-bold btn-secondary px-4" href="#">
              <ScrambledText text={"LinkedIn"} />
            </a>
          </li>
          <li>
            <a className="text-6xl font-bold btn-secondary px-4" href="#">
              <ScrambledText text={"Contact"} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
