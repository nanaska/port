import AnimatedBlock from "./AnimatedBlock"
import NavBarFor from "./NavBarFor"
import AboutMe from "./AboutMe"
import RealAboutMe from "./RealAboutMe"
export default function HeroOnNextUi() {
  return (
    <main>
        <NavBarFor/>
    <section  className="min-h-[90vh] mx-auto max-w-3xl flex justify-center items-center">
        <AnimatedBlock />
        
    </section>
    <section  className="min-h-[90vh] mx-auto max-w-3xl flex justify-center items-center">
        <RealAboutMe/>
    </section>
    <section  className="min-h-[90vh] mx-auto max-w-3xl flex justify-center items-center">
        <AboutMe />
    </section>  
    </main>
  )
}
