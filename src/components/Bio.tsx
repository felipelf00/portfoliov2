import ResponsiveHeading from "./ResponsiveHeading";
import ScrambledText from "./ScrambledText";

interface BioProps {
  className?: string;
}

export default function Bio({ className }: BioProps) {
  return (
    <section
      className={`${className} flex flex-col md:flex-row gap-12 md:gap-16`}
    >
      <div className="w-full md:w-2/3 flex flex-col gap-8">
        <ResponsiveHeading>Who?</ResponsiveHeading>
        <div className="text-xl">
          <p>
            I am a web developer specializing in building responsive and
            user-friendly websites and applications. Working at{" "}
            <a
              className="font-semibold text-primary"
              href="https://buzzvel.com/"
              target="_blank"
            >
              Buzzvel
            </a>
            , I used CMS platforms such as WordPress, HubSpot, and Shopify, and
            close collaboration with clients, project managers and design teams
            to deliver solutions that meet both technical and user needs.
          </p>
          <br />
          <p>
            Besides HTML, CSS and JavaScript, I have experience working with
            React, Tailwind CSS, TypeScript, Git, and integrating REST APIs. I
            have used Node.JS, Express and MongoDB in personal projects to
            broaden my understanding about back-end and full-stack applications.
          </p>
          <br />
          <p>
            My background includes a degree in Mechanical Engineering (
            <a
              className="font-semibold text-primary"
              href="https://www.utfpr.edu.br/"
              target="_blank"
            >
              UTFPR
            </a>
            ), experience in automobile industry and as an enterpeneur. My
            outstanding communication skills in both English and Portuguese have
            always helped me collaborate with teams and stakeholders to improve
            quality and efficiency on projects.
          </p>
        </div>
      </div>
      <div className="w-full md:w-0 border-2 border-neutral-600 rounded"></div>
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <ul className="flex flex-col justify-around h-full gap-8">
          <li>
            <a className="text-6xl font-bold btn-secondary px-4" href="https://github.com/felipelf00/">
              <ScrambledText text={"Github"} />
            </a>
          </li>
          <li>
            <a className="text-6xl font-bold btn-secondary px-4" href="https://www.linkedin.com/in/felipelf00">
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
