import AnimatedBlock from "./AnimatedBlock"
import NavBarFor from "./NavBarFor"
import AboutMe from "./AboutMe"
export default function HeroOnNextUi() {
  return (
    <main>
        <NavBarFor/>
    <section  className="min-h-[90vh] mx-auto max-w-2xl flex justify-center items-center">
        <AnimatedBlock />
        
    </section>
    <section  className="min-h-[90vh] mx-auto max-w-2xl flex justify-center items-center">
        <AboutMe />
    </section>
    </main>
  )
}
