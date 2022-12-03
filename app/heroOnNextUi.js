import AnimatedBlock from "./AnimatedBlock";
import NavBarFor from "./NavBarFor";
import AboutMe from "./AboutMe";
import RealAboutMe from "./RealAboutMe";
import DescriptionOfMe from "./DescriptionOfMe";
import ContactForm from "./ContactForm";

export default function HeroOnNextUi() {
  return (
    <main>
      <NavBarFor />

      <section className="relative">
        <div className="min-h-[90vh]  mx-auto max-w-5xl flex justify-center items-center">
          <AnimatedBlock />

        </div>

      </section>

      <section className="min-h-[90vh] mx-auto max-w-5xl flex justify-center items-center">
        <DescriptionOfMe />
      </section>
      <section className="w-full ">
        <div className="min-h-[60vh]  mx-auto max-w-5xl flex justify-center items-center">
          <RealAboutMe />
        </div>
      </section>
      <section className="min-h-[90vh] mx-auto max-w-5xl flex justify-center items-center">
        <AboutMe />
      </section>
        <section className="min-h-[90vh] mx-auto max-w-5xl flex justify-center items-center">
            <ContactForm/>
        </section>
    </main>
  );
}
