import AnimatedBlock from "./AnimatedBlock";
import NavBarFor from "./NavBarFor";
import AboutMe from "./AboutMe";
import RealAboutMe from "./RealAboutMe";
import DescriptionOfMe from "./DescriptionOfMe";
export default function HeroOnNextUi() {
  return (
    <main>
      <NavBarFor />
      <section className="min-h-[90vh] mx-auto max-w-5xl flex justify-center items-center">
        <AnimatedBlock />
      </section>
      <section className="min-h-[90vh] mx-auto max-w-5xl flex justify-center items-center">
        <DescriptionOfMe />
      </section>
      <section className="w-full bg-[#0b0b10]">
        <div className="min-h-[60vh]  mx-auto max-w-5xl flex justify-center items-start">
          <RealAboutMe />
        </div>
      </section>
      <section className="min-h-[90vh] mx-auto max-w-5xl flex justify-center items-center">
        <AboutMe />
      </section>
    </main>
  );
}
